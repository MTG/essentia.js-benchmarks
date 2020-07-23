let Meyda = require('meyda');
let essentia = require('essentia.js');
let fs = require('fs');
let path = require('path');
let Benchmark = require('benchmark');

const FRAME_SIZE = 2048;
const HOP_SIZE = 1024;
const audioFilePath = path.join(__dirname, '..', '..','audio', 'mozart_c_major_30sec.wav');
var options = {};
if (process.argv[2] !== undefined){
    options = {
            minSamples: process.argv[2],
            initCount: 1,
            minTime: -Infinity,
            maxTime: -Infinity,
            };
}

fs.readFile(audioFilePath, (err, data) => {
    if (err) throw err;
    let audioBuffer = data;
    const suite = new Benchmark.Suite('AllTimeFreq');

    // add tests
    suite.add('Meyda#AllTimeFreq', () => {
        for (let i = 0; i < audioBuffer.length/HOP_SIZE; i++) {
            Meyda.bufferSize = FRAME_SIZE;
            let frame = audioBuffer.slice(HOP_SIZE*i, HOP_SIZE*i + FRAME_SIZE);
            if (frame.length !== FRAME_SIZE) {
                frame = Buffer.concat([frame], FRAME_SIZE);
            }
            Meyda.extract([
                'energy',
                'rms', 
                'zcr', 
                'amplitudeSpectrum', 
                'powerSpectrum', 
                'spectralCentroid', 
                'spectralFlatness', 
                // 'spectralFlux', 
                'spectralRolloff', 
                'spectralSpread', 
                'spectralSkewness', 
                'spectralKurtosis', 
                'mfcc', 
                'loudness', 
                'perceptualSpread'
            ], frame);
        }
    }, options)
    .add('Essentia#AllTimeFreq', () => {
        const frames = essentia.FrameGenerator(audioBuffer, FRAME_SIZE, HOP_SIZE);
        for (var i = 0; i < frames.size(); i++){
            essentia.Energy(frames.get(i));
            essentia.RMS(frames.get(i));
            essentia.ZeroCrossingRate(frames.get(i));
            var frame_windowed = essentia.Windowing(frames.get(i),true, FRAME_SIZE)['frame'];
            var spectrum = essentia.Spectrum(frame_windowed)['spectrum'];
            essentia.PowerSpectrum(frame_windowed);
            essentia.Centroid(spectrum);
            essentia.Flatness(spectrum);
            // essentia.Flux(spectrum);
            essentia.RollOff(spectrum);
            essentia.DistributionShape(essentia.CentralMoments(spectrum)["centralMoments"]);
            essentia.MFCC(spectrum);
            var bands = essentia.BarkBands(spectrum, 24)['bands'];
            essentia.Variance(bands);
        }
    }, options)
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    
    .on('complete', function() {
        console.log(this);
        console.log('Fastest is ' + this.filter('fastest').map('name'));

        const resultsObj = {
            "meyda": {
                "mean": this[0].stats.mean,
                "moe": this[0].stats.moe,
                "rme": this[0].stats.rme,
                "sem": this[0].stats.sem,
                "deviation": this[0].stats.deviation,
                "variance": this[0].stats.variance,
                "execution times": this[0].stats.sample,
                "cycle": this[0].times.cycle,
                "elapsed": this[0].times.elapsed,
                "period": this[0].times.period,
                "timeStamp": this[0].times.timeStamp,
                "count": this[0].count,
                "cycles": this[0].cycles,
                "hz": this[0].hz
            },
            "essentia": {
                "mean": this[1].stats.mean,
                "moe": this[1].stats.moe,
                "rme": this[1].stats.rme,
                "sem": this[1].stats.sem,
                "deviation": this[1].stats.deviation,
                "variance": this[1].stats.variance,
                "execution times": this[1].stats.sample,
                "cycle": this[1].times.cycle,
                "elapsed": this[1].times.elapsed,
                "period": this[1].times.period,
                "timeStamp": this[1].times.timeStamp,
                "count": this[1].count,
                "cycles": this[1].cycles,
                "hz": this[1].hz
            }
        }

        var json = JSON.stringify(resultsObj);
        fs.writeFile('all_time_freq.json', json, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing AllTimeFreq JSON Object to File.");
                return console.log(err);
            }

            console.log("AllTimeFreq JSON file has been saved.");
        });
    })
    // run async
    .run({ 'async': true });       
  });