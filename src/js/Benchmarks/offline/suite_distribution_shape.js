import getFile from '../../utils/getFile';
import downloadJson from '../../utils/downloadJson';
import violinDistributionPlot from '../../utils/violinDistributionPlot';
import {showResultsTable} from '../../utils/showResultsTable';

export default function distribution_shape(essentia, Meyda, audioURL, audioContext) {

    // const audioContext = new AudioContext();
    const FRAME_SIZE = 2048;
    const HOP_SIZE = 1024;
    const DistShapeButton = document.querySelector('#dist_shape #start_offline');
    const p = document.querySelector('#dist_shape #results');
    const down_elem = document.querySelector('#dist_shape #download_results');
    const meyda_table = document.querySelector('#dist_shape #meyda_results #table');
    const meyda_plot = document.querySelector('#dist_shape #meyda_results #plot');
    const ess_table = document.querySelector('#dist_shape #essentia_results #table');
    const ess_plot = document.querySelector('#dist_shape #essentia_results #plot');
    const stack_plot = document.querySelector('#dist_shape #essentia_results #plot_stack');
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
        const suite = new Benchmark.Suite('DIST_SHAPE');

        // add tests
        suite.add('Meyda#DIST_SHAPE', () => {
            for (let i = 0; i < audioBuffer.length/HOP_SIZE; i++) {
                Meyda.bufferSize = FRAME_SIZE;
                let frame = audioBuffer.getChannelData(0).slice(HOP_SIZE*i, HOP_SIZE*i + FRAME_SIZE);
                if (frame.length !== FRAME_SIZE) {
                    let lastFrame = new Float32Array(FRAME_SIZE);
                    audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE*i);
                    frame = lastFrame;
                }
                Meyda.extract(['spectralSpread', 'spectralSkewness', 'spectralKurtosis'], frame);
            }
        }, options)
        .add('Essentia#DIST_SHAPE', () => {
            switch(frameMode){
                case "vanilla":
                    for (let i = 0; i < audioBuffer.length/HOP_SIZE; i++) {
                        let frame = audioBuffer.getChannelData(0).slice(HOP_SIZE*i, HOP_SIZE*i + FRAME_SIZE);
                        if (frame.length !== FRAME_SIZE) {
                            let lastFrame = new Float32Array(FRAME_SIZE);
                            audioBuffer.copyFromChannel(lastFrame, 0, HOP_SIZE*i);
                            frame = lastFrame;
                        }
                        let frame_windowed = essentia.Windowing(essentia.arrayToVector(frame), true, FRAME_SIZE);
                        essentia.DistributionShape(essentia.CentralMoments(essentia.Spectrum(frame_windowed['frame'])['spectrum'])["centralMoments"]);
                    }
                    break;
                case "essentia":
                    const frames = essentia.FrameGenerator(audioBuffer.getChannelData(0), FRAME_SIZE, HOP_SIZE);
                    for (let i = 0; i < frames.size(); i++){
                        let frame_windowed = essentia.Windowing(frames.get(i),true, FRAME_SIZE);
                        essentia.DistributionShape(essentia.CentralMoments(essentia.Spectrum(frame_windowed['frame'])['spectrum'])["centralMoments"]);
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
            DistShapeButton.classList.add('is-loading');
            DistShapeButton.disable = true;
        })
        .on('complete', function() {
            console.log(this);
            console.log('Fastest is ' + this.filter('fastest').map('name'));
            // TODO: Here attach to the DOM -> SPIKE
            p.textContent = 'Fastest is ' + this.filter('fastest').map('name');
            DistShapeButton.classList.remove('is-loading');
            DistShapeButton.disable = false;

            showResultsTable(meyda_table, this[0].stats);
            showResultsTable(ess_table, this[1].stats);

            violinDistributionPlot(meyda_plot, {0:["meyda", this[0].stats.sample, "green"]}, "Time distribution Distribution Shape - Meyda");
            violinDistributionPlot(ess_plot, {0:["essentia.js",this[1].stats.sample, "red"]}, "Time distribution Distribution Shape - Essentia");
            violinDistributionPlot(stack_plot, {0:["meyda", this[0].stats.sample, "green"], 1:["essentia.js", this[1].stats.sample, "red"]},
                                     "Time distribution Distribution Shape - Stack");

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
                downloadJson(resultsObj, "distribution_shape.json", down_elem);
            }
        })
        // run async
        .run({ 'async': true });       
    });  
}
