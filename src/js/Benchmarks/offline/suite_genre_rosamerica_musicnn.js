import getFile from '../../utils/getFile';
import downloadJson from '../../utils/downloadJson';
import violinDistributionPlot from '../../utils/violinDistributionPlot';
import {showResultsTable} from '../../utils/showResultsTable';
import ModelsWrapper from '../../utils/ModelsWrapper';
import modelsAudioPreprocess from '../../utils/modelsAudioPreprocess';

export default function genreRosamericaMusiCNN(EssentiaWASM, audioURL, audioContext) {

    const GenreRosamericaMusiCNNButton = document.querySelector('#genre-rosamerica-musicnn #start_offline');
    const p = document.querySelector('#genre-rosamerica-musicnn #results');
    const down_elem = document.querySelector('#genre-rosamerica-musicnn #download_results');
    const endtoend_table = document.querySelector('#genre-rosamerica-musicnn #endtoend_results #table');
    const endtoend_plot = document.querySelector('#genre-rosamerica-musicnn #endtoend_results #plot');
    const inference_table = document.querySelector('#genre-rosamerica-musicnn #inference_results #table');
    const inference_plot = document.querySelector('#genre-rosamerica-musicnn #inference_results #plot');
    const repetitionsInput = document.getElementById('repetitions');
    let repetitions = repetitionsInput.value;

    const options = repetitions ?
        {
            minSamples: repetitions,
            initCount: 1,
            minTime: -Infinity,
            maxTime: -Infinity,
            defer: true
        }
        : {
            defer: true
        };

    // create ModelWrapper instance
    const musicnnWrapper = new ModelsWrapper('musicnn', EssentiaWASM);
    const modelURL = window.modelsBaseURL + '/genre_rosamerica-musicnn-msd-2/model.json';

    console.info("Fetching audio and loading model...");
    Promise.all( [getFile(audioContext, audioURL), musicnnWrapper.loadModel(modelURL)] ).then((responses) => {
        const audioBuffer = responses[0];
        const suite = new Benchmark.Suite('GENRE_ROSAMERICA_MUSICNN');

        // monomix, downsample
        const preprocessedAudio = modelsAudioPreprocess(audioBuffer);

        console.info("Loading done, running feature extraction...");
        musicnnWrapper.extractFeatures(preprocessedAudio);
        
        console.info("Features computed, setting up inference test");
        // add tests
        suite.add('genre-rosamerica-musicnn#inference', async function (deferred) {
            await musicnnWrapper.makePrediction();
            deferred.resolve();
        }, options)
        .add('genre-rosamerica-musicnn#endtoend', async function (deferred) {
            musicnnWrapper.extractFeatures(preprocessedAudio);
            await musicnnWrapper.makePrediction();
            deferred.resolve();
        }, options)
        // add listeners
        .on('cycle', function(event) {
            console.log(String(event.target));
            console.log('New Cycle!');
        })
        .on('start', function() {
            GenreRosamericaMusiCNNButton.classList.add('is-loading');
            GenreRosamericaMusiCNNButton.disable = true;
        })
        .on('complete', function() {
            console.log(this);
            console.log('Fastest is ' + this.filter('fastest').map('name'));
            // TODO: Here attach to the DOM -> SPIKE
            p.textContent = 'Fastest is ' + this.filter('fastest').map('name');
            GenreRosamericaMusiCNNButton.classList.remove('is-loading');
            GenreRosamericaMusiCNNButton.disable = false;

            musicnnWrapper.freeMemory();

            showResultsTable(inference_table, this[0].stats);
            showResultsTable(endtoend_table, this[1].stats);

            violinDistributionPlot(inference_plot, {0:["inference", this[0].stats.sample, "green"]}, "Time distribution: Genre Rosamerica MusiCNN - Inference");
            violinDistributionPlot(endtoend_plot, {0:["endtoend",this[1].stats.sample, "red"]}, "Time distribution: Genre Rosamerica MusiCNN - End-to-end");

            const resultsObj = {
                "inference": {
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
                "endtoend": {
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
                downloadJson(resultsObj, "genre_rosamerica_musicnn.json", down_elem);
            }
        })
        // run async
        .run({ 'async': true });       
    });  
}
