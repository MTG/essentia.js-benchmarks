import * as EssentiaModel from '../../dist/essentia/essentia.js-model.es';
import tf from "@tensorflow/tfjs-node";

class ModelsWrapper {
    constructor(arch, EssentiaWASM, /*EssentiaModel*/) { 
        this.architecture = arch;
        this.engine = null;
        this.features = {
            melSpectrum: [],
            batchSize: 0,
            melBandsSize: 0,
            patchSize: 0
        };
        this.extractor = new EssentiaModel.EssentiaTensorflowInputExtractor(EssentiaWASM, arch);
        this.wasm = EssentiaWASM;
        this.essentia = this.extractor.essentia;
        switch (arch) {
            case "musicnn":
                this.frameSize = 512;
                this.hopSize = 256;
                this.features.patchSize = 187;
                this.features.melBandsSize = 96;
                break;
            case "vggish":
                this.frameSize = 400;
                this.hopSize = 200;
                this.features.patchSize = 96;
                this.features.melBandsSize = 64;
                break;
        }
        this.hasFeatures = false;
    }

    async loadModel(url) {
        // if (tf.getBackend() != 'wasm') { await tf.setBackend('wasm'); }
        // await tf.ready();
        // console.log(`Using ${tf.getBackend()} backend`);
        switch (this.architecture) {
            case "musicnn":
                this.engine = new EssentiaModel.TensorflowMusiCNN(tf, url);
                break;
            case "vggish":
                this.engine = new EssentiaModel.TensorflowVGGish(tf, url);
                break;
        }
        await this.engine.initialize();
        console.info("inside wrapper loadModel");
        return true;
    }

    extractFeatures(audio) {
        this.features.melSpectrum = []; // ensure it's empty from previous runs

        const frames = this.essentia.FrameGenerator(audio, this.frameSize, this.hopSize);
        const audioLength = frames.size();
        for (var i = 0; i < audioLength; i++) {
            let frame = this.wasm.vectorToArray(frames.get(i));
            this.features.melSpectrum.push(this.extractor.compute(frame).melSpectrum);
        }

        frames.delete();
        this.features.batchSize = this.features.melSpectrum.length;
        this.hasFeatures = true;

        return true;
    }

    async makePrediction() {
        // let start = Date.now();
        const preds = await this.engine.predict(this.features);
        // console.info(`makePrediction internal timing: ${Date.now() - start}`);
        return preds;
    }

    freeMemory() {
        this.extractor.delete();
        if (this.engine) this.engine.dispose();
    }
}


export default ModelsWrapper;