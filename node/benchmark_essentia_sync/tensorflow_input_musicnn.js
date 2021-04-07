import fs from 'fs';
import { readFile } from 'fs/promises';
import path from 'path';
import Benchmark from 'benchmark';

// import essentia-wasm backend
import { EssentiaWASM } from '../../dist/essentia/essentia-wasm.module.js';

import ModelsWrapper from '../utils/ModelsWrapper.js';
import modelsAudioPreprocess from '../utils/modelsAudioPreprocess.js';

const __dirname = path.resolve();
console.log(__dirname);

const audioFilePath = path.join(__dirname, '..', '..','audio', 'mozart_c_major_30sec.wav');

let options = {};
if (process.argv[2] !== undefined) {
    options = {
        minSamples: process.argv[2],
        initCount: 1,
        minTime: -Infinity,
        maxTime: -Infinity,
    };
};

// create ModelWrapper instance
const musicnnWrapper = new ModelsWrapper('musicnn', EssentiaWASM);


console.info("Loading and preprocessing audio...");
readFile(audioFilePath).then((audioBuffer) => {
    const suite = new Benchmark.Suite('TENSORFLOW_INPUT_MUSICNN');

    // monomix, downsample
    const preprocessedAudio = modelsAudioPreprocess(audioBuffer);

    console.info("Testing feature extraction...");
    // add tests
    suite.add('tensorflow-input-musicnn#extract', function () {
        musicnnWrapper.extractFeatures(preprocessedAudio);
    }, options)
    // add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
        console.log('New Cycle!');
    })
    .on('complete', function() {
        console.log(this);
        console.log('Fastest is ' + this.filter('fastest').map('name'));

        musicnnWrapper.freeMemory();

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
        var json = JSON.stringify(resultsObj);
        fs.writeFile('tensorflow_input_musicnn.json', json, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing tensorflow_input_musicnn JSON Object to File.");
                return console.log(err);
            }

            console.log("tensorflow_input_musicnn JSON file has been saved.");
        });
    })
    // run async
    .run({ 'async': true });       
});
