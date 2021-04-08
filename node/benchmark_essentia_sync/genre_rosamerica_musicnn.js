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

let options = {
    defer: true
};
if (process.argv[2] !== undefined){
    options = {
        minSamples: process.argv[2],
        initCount: 1,
        minTime: -Infinity,
        maxTime: -Infinity,
        defer: true
    };
};

// create ModelWrapper instance
const musicnnWrapper = new ModelsWrapper('musicnn', EssentiaWASM);
 // tfjs needs `file://` otherwise thinks it's a relative path
const modelPath = 'file://' + path.join(__dirname, '..', '..', 'models/genre_rosamerica-musicnn-msd-2/model.json');

console.info("Loading audio and model...");
Promise.all( [readFile(audioFilePath), musicnnWrapper.loadModel(modelPath)] ).then((responses) => {
    const audioFileBuffer = responses[0];
    const suite = new Benchmark.Suite('GENRE_ROSAMERICA_MUSICNN');

    // monomix, downsample
    const preprocessedAudio = modelsAudioPreprocess(audioFileBuffer);

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
    .on('complete', function() {
        console.log(this);
        console.log('Fastest is ' + this.filter('fastest').map('name'));

        musicnnWrapper.freeMemory();

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

        var json = JSON.stringify(resultsObj);
        fs.writeFile('genre_rosamerica_musicnn.json', json, 'utf8', function (err) {
            if (err) {
                console.log("An error occured while writing genre_rosamerica_musicnn JSON Object to File.");
                return console.log(err);
            }

            console.log("genre_rosamerica_musicnn JSON file has been saved.");
        });
    })
    // run async
    .run({ 'async': true });       
});  
    