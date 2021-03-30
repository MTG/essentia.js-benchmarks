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
import { EssentiaTensorflowInputExtractorOutput } from "./types";
/**
 * Class with methods for computing common feature input representations required
 * for the inference of Essentia-Tensorflow.js pre-trained models using EssentiaWASM
 * backend which is imported from `essentia-wasm*.js` builds.
 * @class
 * @example
 * // Create `EssentiaTensorflowInputExtractor` instance by passing EssentiaWASM import object and `extractorType` value.
 * const extractor = new EssentiaTensorflowInputExtractor(EssentiaWASM, "musicnn");
 * // Compute feature for a given frame of audio signal
 * let featureMusiCNN = await extractor.compute(audioSignalFrame);
 * // Change the feature extractor with a new setting for VGGish input
 * extractor.extractorType = "vggish";
 * let featureVGGish = await extractor.compute(audioSignalFrame);
 * // Delete and shutdown the extractor instance if you don't need it anymore.
 * extractor.delete();
 * extractor.shutdown();
 */
declare class EssentiaTensorflowInputExtractor {
    /**
    * @property {EssentiaJS} this.essentia an instance of `EssentiaWASM.EssentiaJS`.
    * @property {string} this.extractorType List of available Essentia alogrithms from the WASM backend
    */
    essentia: any;
    extractorType: string;
    protected module: any;
    /**
    * @constructs
    * @param {EssentiaWASM} EssentiaWASM Essentia WASM emcripten global module object
    * @param {string} [extractorType='musicnn']
    */
    constructor(EssentiaWASM: any, extractorType?: string, isDebug?: boolean);
    /**
     * Convert a typed JS Float32Array into VectorFloat type.
     * @method
     * @param {Float32Array} inputArray input Float32 typed array.
     * @returns {VectorFloat} returns converted VectorFloat array.
     * @memberof EssentiaTensorflowInputExtractor
     */
    arrayToVector(inputArray: Float32Array): any;
    /**
     * Convert an input VectorFloat array into typed JS Float32Array
     * @method
     * @param {VectorFloat} inputVector input VectorFloat array
     * @returns {Float32Array} returns converted JS typed array
     * @memberof EssentiaTensorflowInputExtractor
     */
    vectorToArray(inputVector: any): Float32Array;
    /**
     * Decode and returns the audio buffer from an given audio url or blob uri using Web Audio API. (NOTE: This doesn't work on Safari browser)
     * @async
     * @method
     * @param {string} audioURL web url or blob uri of a audio file
     * @param {AudioContext} webAudioCtx an instance of Web Audio API `AudioContext`
     * @returns {Promise<AudioBuffer>} decoded audio buffer as a promise
     * @memberof EssentiaTensorflowInputExtractor
     */
    getAudioBufferFromURL(audioURL: string, webAudioCtx: AudioContext): Promise<AudioBuffer>;
    /**
     * Generates overlapping frames (chunks) of array with given frame size and hop size from an input array.
     * @method
     * @param {string} inputArray web url or blob uri of a audio file
     * @param {number} frameSize frame size for generating frames (chunks) of input array
     * @param {number} hopSize hop size required for overlap while generating the frames.
     * @returns {Array<Float32Array>} generated frames as array of array of Float32 type.
     * @memberof EssentiaTensorflowInputExtractor
     */
    arrayFrameGenerator(inputArray: any[], frameSize: number, hopSize: number): any[];
    /**
     * This method compute the pre-configured features for a given audio signal frame.
     * It throws an exception if the size of audioFrame is not equal to the pre-configured
     * audioFrame size for the selected `extractorType` setting.
     * @method
     * @param {Float32Array} audioFrame a frame of audio signal as Float32 typed JS array.
     * @returns {EssentiaTensorflowInputExtractorOutput} returns the computed feature for the input the given audio frame.
     * @memberof EssentiaTensorflowInputExtractor
     */
    compute(audioFrame: Float32Array): EssentiaTensorflowInputExtractorOutput;
    /**
     * Delete essentia session and frees the memory.
     * @method
     * @returns {null}
     * @memberof EssentiaTensorflowInputExtractor
     */
    delete(): void;
    /**
     * This method shutdown all the instance of Essentia WASM and frees the memory.
     * NOTE: If you want to just free the memory of the pre-configured extractor,
     * use `this.extractor.delete()` instead.
     * @method
     * @returns {null}
     * @memberof EssentiaTensorflowInputExtractor
     */
    shutdown(): void;
}
export { EssentiaTensorflowInputExtractor };
