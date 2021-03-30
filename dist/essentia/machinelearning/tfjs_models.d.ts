/**
 * @license
 * Copyright (C) 2006-2020  Music Technology Group - Universitat Pompeu Fabra
 *
 * This file is part of Essentia
 *
 * Essentia is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation (FSF), either version 3 of the License, or (at your
 * option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the Affero GNU General Public License
 * version 3 along with this program.  If not, see http://www.gnu.org/licenses/
 */
import { InputMusiCNN, InputVGGish } from './types';
/**
 * Base class for loading a pre-trained Essentia-Tensorflow.js model for inference
 * using TensorFlow.js.
 * @class
 */
declare class EssentiaTensorflowJSModel {
    model: any;
    protected tf: any;
    protected isReady: boolean;
    protected modelPath: string;
    protected IS_TRAIN: any;
    protected randomTensorInput: any;
    constructor(tfjs: any, modelPath: string, verbose?: boolean);
    initialize(): Promise<void>;
    arrayToTensorAsBatches(inputfeatureArray: Float32Array, inputShape: any[], patchSize: number): any;
    dispose(): void;
    protected disambiguateExtraInputs(): any[];
}
/**
 * Class with methods for computing inference of
 * Essentia-Tensorflow.js MusiCNN-based pre-trained models.
 * The predict method expect an input audio feature computed
 * using `EssentiaTensorflowInputExtractor`.
 * @class
 * @example
 * // FEATURE EXTRACTION
 * // Create `EssentiaTensorflowInputExtractor` instance by passing
 * // essentia-wasm import `EssentiaWASM` global object and `extractorType=musicnn`.
 * const inputFeatureExtractor = new EssentiaTensorflowInputExtractor(EssentiaWASM, "musicnn");
 * // Compute feature for a given frame of audio signal
 * let inputMusiCNN = inputFeatureExtractor.compute(audioSignalFrame);
 * // INFERENCE
 * const modelURL = "./model.json"
 * // Where `tf` is the global import object from the `@tensorflow/tfjs*` package.
 * const musicnn = new TensorflowMusiCNN(tf, modelURL);
 * // Promise for loading the model
 * await musicnn.initialize();
 * // Compute predictions for a given frame of input feature.
 * let predictions = await musicnn.predict(inputMusiCNN);
 */
declare class TensorflowMusiCNN extends EssentiaTensorflowJSModel {
    constructor(tfjs: any, model_url: string, verbose?: boolean);
    predict(inputFeature: InputMusiCNN): Promise<any>;
}
/**
 * Class with methods for computing common feature input representations
 * required for the inference of Essentia-Tensorflow.js VGGish-based
 * pre-trained models using Essentia WASM backend.
 * @class
 * @example
 * // FEATURE EXTRACTION
 * // Create `EssentiaTensorflowInputExtractor` instance by passing
 * // essentia-wasm import `EssentiaWASM` global object and `extractorType=vggish`.
 * const inputFeatureExtractor = new EssentiaTensorflowInputExtractor(EssentiaWASM, "vggish");
 * // Compute feature for a given frame of audio signal
 * let inputVGGish = inputFeatureExtractor.compute(audioSignalFrame);
 * // INFERENCE
 * const modelURL = "./model.json"
 * // Where `tf` is the global import object from the `@tensorflow/tfjs*` package.
 * const vggish = new TensorflowVGGish(tf, modelURL);
 * // Promise for loading the model
 * await vggish.initialize();
 * // Compute predictions for a given frame of input feature.
 * let predictions = await vggish.predict(inputVGGish);
 */
declare class TensorflowVGGish extends EssentiaTensorflowJSModel {
    constructor(tfjs: any, model_url: string, verbose?: boolean);
    predict(inputFeature: InputVGGish): Promise<any>;
}
export { EssentiaTensorflowJSModel, TensorflowMusiCNN, TensorflowVGGish, };
