import getFile from '../../utils/getFile';
import downloadJson from '../../utils/downloadJson';
import violinDistributionPlot from '../../utils/violinDistributionPlot';
import {showResultsTable} from '../../utils/showResultsTable';
import ModelsWrapper from '../../utils/ModelsWrapper';
import modelsAudioPreprocess from '../../utils/modelsAudioPreprocess';

export default function tensorflowInputVGGish(EssentiaWASM, audioURL, audioContext) {

    const TensorflowInputVGGishButton = document.querySelector('#tensorflow-input-vggish #start_offline');
    const p = document.querySelector('#tensorflow-input-vggish #results');
    const down_elem = document.querySelector('#tensorflow-input-vggish #download_results');
    const extract_table = document.querySelector('#tensorflow-input-vggish #extract_results #table');
    const extract_plot = document.querySelector('#tensorflow-input-vggish #extract_results #plot');
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

    // create ModelWrapper instance
    const vggishWrapper = new ModelsWrapper('vggish', EssentiaWASM);

    console.info("Fetching audio and loading model...");
    getFile(audioContext, audioURL).then((audioBuffer) => {
        const suite = new Benchmark.Suite('TENSORFLOW_INPUT_VGGISH');

        // monomix, downsample
        const preprocessedAudio = modelsAudioPreprocess(audioBuffer);

        console.info("Testing feature extraction...");
        // add tests
        suite.add('tensorflow-input-vggish#extract', function () {
            vggishWrapper.extractFeatures(preprocessedAudio);
        }, options)
        // add listeners
        .on('cycle', function(event) {
            console.log(String(event.target));
            console.log('New Cycle!');
        })
        .on('start', function() {
            TensorflowInputVGGishButton.classList.add('is-loading');
            TensorflowInputVGGishButton.disable = true;
        })
        .on('complete', function() {
            console.log(this);
            console.log('Fastest is ' + this.filter('fastest').map('name'));
            // TODO: Here attach to the DOM -> SPIKE
            p.textContent = 'Fastest is ' + this.filter('fastest').map('name');
            TensorflowInputVGGishButton.classList.remove('is-loading');
            TensorflowInputVGGishButton.disable = false;

            vggishWrapper.freeMemory();

            showResultsTable(extract_table, this[0].stats);

            violinDistributionPlot(extract_plot, {0:["extract", this[0].stats.sample, "green"]}, "Time distribution: Tensorflow Input VGGish - Feature Extraction");

            const resultsObj = {
                "feature_extraction": {
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
                downloadJson(resultsObj, "tensorflow_input_vggish.json", down_elem);
            }
        })
        // run async
        .run({ 'async': true });       
    });  
}
