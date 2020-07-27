import getFile from '../../utils/getFile';
import downloadJson from '../../utils/downloadJson';
import violinDistributionPlot from '../../utils/violinDistributionPlot';
import {showResultsTable} from '../../utils/showResultsTable';

export default function all_time_freq(essentia, Meyda, audioURL, audioContext) {

    // const audioContext = new AudioContext();
    const FRAME_SIZE = 2048;
    const HOP_SIZE = 1024;
    const AllTimeFreqBtn = document.querySelector('#all_time_freq #start_offline');
    const p = document.querySelector('#all_time_freq #results');
    const down_elem = document.querySelector('#all_time_freq #download_results');
    const meyda_table = document.querySelector('#all_time_freq #meyda_results #table');
    const meyda_plot = document.querySelector('#all_time_freq #meyda_results #plot');
    const ess_table = document.querySelector('#all_time_freq #essentia_results #table');
    const ess_plot = document.querySelector('#all_time_freq #essentia_results #plot');
    const stack_plot = document.querySelector('#all_time_freq #essentia_results #plot_stack');
    const repetitionsInput = document.getElementById('repetitions');
    let repetitions = repetitionsInput.value;

    const options = repetitions ?
        {
            minSamples: repetitions,
            initCount: 1,
            minTime: -Infinity,
            maxTime: -Infinity,
        }
        : {};

    getFile(audioContext, audioURL).then((audioBuffer) => {
        const suite = new Benchmark.Suite('ALL_TIME_FREQ');

        // add tests
        suite.add('Meyda#ALL_TIME_FREQ', () => {
            for (let i = 0; i < audioBuffer.length/HOP_SIZE; i++) {
                Meyda.bufferSize = FRAME_SIZE;
                let frame = audioBuffer.getChannelData(0).slice(HOP_SIZE*i, HOP_SIZE*i + FRAME_SIZE);
                if (frame.length !== FRAME_SIZE) {
                    let lastFrame = new Float32Array(FRAME_SIZE);
                    audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE*i);
                    frame = lastFrame;
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
        .add('Essentia#ALL_TIME_FREQ', () => {
            switch(frameMode){
                case "vanilla":
                    for (let i = 0; i < audioBuffer.length/HOP_SIZE; i++) {
                        let frame = audioBuffer.getChannelData(0).slice(HOP_SIZE*i, HOP_SIZE*i + FRAME_SIZE);
                        if (frame.length !== FRAME_SIZE) {
                            let lastFrame = new Float32Array(FRAME_SIZE);
                            audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE*i);
                            frame = lastFrame;
                        }
                        essentia.Energy(essentia.arrayToVector(frame));
                        essentia.RMS(essentia.arrayToVector(frame));
                        essentia.ZeroCrossingRate(essentia.arrayToVector(frame));
                        let frame_windowed = essentia.Windowing(essentia.arrayToVector(frame),true, FRAME_SIZE)['frame'];
                        let spectrum = essentia.Spectrum(frame_windowed)['spectrum'];
                        essentia.PowerSpectrum(frame_windowed);
                        essentia.Centroid(spectrum);
                        essentia.Flatness(spectrum);
                        // essentia.Flux(spectrum);
                        essentia.RollOff(spectrum);
                        essentia.DistributionShape(essentia.CentralMoments(spectrum)["centralMoments"]);
                        essentia.MFCC(spectrum);
                        let bands = essentia.BarkBands(spectrum, 24)['bands'];
                        essentia.Variance(bands);
                    }
                    break;
                case "essentia":
                    const frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);
                    for (let i = 0; i < frames.size(); i++){
                        essentia.Energy(frames.get(i));
                        essentia.RMS(frames.get(i));
                        essentia.ZeroCrossingRate(frames.get(i));
                        let frame_windowed = essentia.Windowing(frames.get(i),true, FRAME_SIZE)['frame'];
                        let spectrum = essentia.Spectrum(frame_windowed)['spectrum'];
                        essentia.PowerSpectrum(frame_windowed);
                        essentia.Centroid(spectrum);
                        essentia.Flatness(spectrum);
                        // essentia.Flux(spectrum);
                        essentia.RollOff(spectrum);
                        essentia.DistributionShape(essentia.CentralMoments(spectrum)["centralMoments"]);
                        essentia.MFCC(spectrum);
                        let bands = essentia.BarkBands(spectrum, 24)['bands'];
                        essentia.Variance(bands);
                    }
                    break;
            }
        }, options)
        // add listeners
        .on('cycle', function(event) {
            console.log(String(event.target));
            console.log('New Cycle!');
        })
        .on('start', function() {
            AllTimeFreqBtn.classList.add('is-loading');
            AllTimeFreqBtn.disable = true;
        })
        .on('complete', function() {
            console.log(this);
            console.log('Fastest is ' + this.filter('fastest').map('name'));
            // TODO: Here attach to the DOM
            p.textContent = 'Fastest is ' + this.filter('fastest').map('name');
            AllTimeFreqBtn.classList.remove('is-loading');
            AllTimeFreqBtn.disable = false;

            showResultsTable(meyda_table, this[0].stats);
            showResultsTable(ess_table, this[1].stats);

            violinDistributionPlot(meyda_plot, {0:["meyda", this[0].stats.sample, "green"]}, "Time distribution all time and freq features - Meyda");
            violinDistributionPlot(ess_plot, {0:["essentia.js",this[1].stats.sample, "red"]}, "Time distribution all time and freq features - Essentia");
            violinDistributionPlot(stack_plot, {0:["meyda", this[0].stats.sample, "green"], 1:["essentia.js", this[1].stats.sample, "red"]},
                                     "Time distribution all time and freq features - Stack");

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
            if(window.downloadResults){
                downloadJson(resultsObj, "all_time_domain_and_spectrum.json", down_elem);
            }
        })
        // run async
        .run({ 'async': true });
    });  
}