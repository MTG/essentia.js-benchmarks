import getFile from '../../utils/getFile';
import downloadJson from '../../utils/downloadJson';
import violinDistributionPlot from '../../utils/violinDistributionPlot';
import {showResultsTable} from '../../utils/showResultsTable';

export default function beats_zapata(essentia, Meyda, audioURL, audioContext) {

    // const audioContext = new AudioContext();
    const FRAME_SIZE = 2048;
    const HOP_SIZE = 1024;
    const BeatsZapataButton = document.querySelector('#beats_zapata #start_offline');
    const p = document.querySelector('#beats_zapata #results');
    const down_elem = document.querySelector('#beats_zapata #download_results');
    const ess_table = document.querySelector('#beats_zapata #essentia_results #table');
    const ess_plot = document.querySelector('#beats_zapata #essentia_results #plot');
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
        const suite = new Benchmark.Suite('BEATS_ZAPATA');

        // add tests
        suite.add('Essentia#BEATS_ZAPATA', () => {
            essentia.RhythmExtractor2013(essentia.arrayToVector(audioBuffer.getChannelData(0)));
        }, options)
        // add listeners
        .on('cycle', function(event) {
            console.log(String(event.target));
            console.log('New Cycle!');
        })
        .on('start', function() {
            BeatsZapataButton.classList.add('is-loading');
            BeatsZapataButton.disable = true;
        })
        .on('complete', function() {
            // console.log(this);
            // TODO: Here attach to the DOM -> SPIKE
            BeatsZapataButton.classList.remove('is-loading');
            BeatsZapataButton.disable = false;

            showResultsTable(ess_table, this[0].stats);
            violinDistributionPlot(ess_plot, {0:["essentia.js",this[0].stats.sample, "red"]}, "Time distribution Beats Zapata Extractor - Essentia");


            const resultsObj = {
                "essentia": {
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
                }
            }
            if(window.downloadResults){
                downloadJson(resultsObj, "beats_zapata.json", down_elem);
            }
        })
        // run async
        .run({ 'async': true });       
    });  
}
