// IMPORTS
const Meyda = require('meyda');
import {AudioContext} from "standardized-audio-context";
import energy from './Benchmarks/offline/suite_energy';
import rms from './Benchmarks/offline/suite_rms';
import zcr from './Benchmarks/offline/suite_zcr';
import amplitude_spectrum from './Benchmarks/offline/suite_amplitude_spectrum';
import power_spectrum from './Benchmarks/offline/suite_power_spectrum';
import spectral_centroid from './Benchmarks/offline/suite_spectral_centroid';
import spectral_flatness from './Benchmarks/offline/suite_spectral_flatness';
import spectral_flux from './Benchmarks/offline/suite_spectral_flux';
import spectral_rolloff from './Benchmarks/offline/suite_spec_rolloff';
import distribution_shape from './Benchmarks/offline/suite_distribution_shape';
import mfcc from './Benchmarks/offline/suite_mfcc';
import mel_bands from './Benchmarks/offline/suite_mel_bands';
import loudness from './Benchmarks/offline/suite_loudness';
import perceptual_spread from './Benchmarks/offline/suite_perceptual_spread';
import all_time_freq from './Benchmarks/offline/suite_all_time_domain_and_spectral_features';
import hpcp from './Benchmarks/offline/suite_hpcp';
import key from './Benchmarks/offline/suite_key';
import tuning_frequency from './Benchmarks/offline/suite_tuning_frequency';
import onset from './Benchmarks/offline/suite_onset';
import super_flux from './Benchmarks/offline/suite_super_flux';
import beats_zapata from './Benchmarks/offline/suite_beats_zapata';
import beats_degara from './Benchmarks/offline/suite_beats_degara';
import ebur128 from './Benchmarks/offline/suite_loudnessEBUR128';
import pyin from './Benchmarks/offline/suite_compute_pyin';
import yin from './Benchmarks/offline/suite_compute_yin';
import yin_fft from './Benchmarks/offline/suite_compute_yin_fft';

import generateBencharkSet from './utils/generateBencharkSet';

// Import CSS
import "../../src/css/styles.css";

generateBencharkSet();

// DOM ELEMENTS
const EnergyButton = document.querySelector('#energy #start_offline');
const RMSButton = document.querySelector('#rms #start_offline');
const ZCRButton = document.querySelector('#zcr #start_offline');
const AmplitudeSpectralButton = document.querySelector('#amplitude_spectrum #start_offline');
const PowerSpectrumButton = document.querySelector('#power_spectrum #start_offline');
const SpectralCentroidButton = document.querySelector('#spectral_centroid #start_offline');
const SpectralFlatnessButton = document.querySelector('#spectral_flatness #start_offline');
const SpectralFluxButton = document.querySelector('#spectral_flux #start_offline');
const SpecRolloffButton = document.querySelector('#spec_rolloff #start_offline');
const DistShapeButton = document.querySelector('#dist_shape #start_offline');
const MFCCButton = document.querySelector('#mfcc #start_offline');
const MelBandsButton = document.querySelector('#mel_bands #start_offline');
const LoudnessButton = document.querySelector('#loudness #start_offline');
const PerceptualSpreadButton = document.querySelector('#perceptual_spread #start_offline');
const AllTimeFreqButton = document.querySelector('#all_time_freq #start_offline');
const HPCPButton = document.querySelector('#hpcp #start_offline');
const KeyButton = document.querySelector('#key #start_offline');
const TuningFreqButton = document.querySelector('#tuning_frequency #start_offline');
const OnsetButton = document.querySelector('#onset #start_offline');
const SuperFluxButton = document.querySelector('#super_flux #start_offline');
const BeatsZapataButton = document.querySelector('#beats_zapata #start_offline');
const BeatsDegaraButton = document.querySelector('#beats_degara #start_offline');
const Ebur128Button = document.querySelector('#ebur128 #start_offline');
const PYINButton = document.querySelector('#pyin #start_offline');
const YINButton = document.querySelector('#yin #start_offline');
const YINFFTButton = document.querySelector('#yin_fft #start_offline');
const Button5s = document.querySelector('.button#audio5s');
const Button10s = document.querySelector('.button#audio10s');
const Button20s = document.querySelector('.button#audio20s');
const Button30s = document.querySelector('.button#audio30s');
const DownloadResults = document.querySelector('#downloadResults');
const FrameMode = document.querySelector('#frameMode');

//Custom Variables
let essentia;
loadEssentia();

window.downloadResults = false;
window.frameMode = 'vanilla';
window.audioURL = 'https://sonosuite-benchmark-audios.s3.amazonaws.com/mozart_c_major_30sec.wav';
Button30s.classList.add("is-active");

// var AudioContext = window.AudioContext // Default
// || window.webkitAudioContext // Safari and old versions of Chrome
// || false;

if (AudioContext) {
    // Do whatever you want using the Web Audio API
    var ctx = new AudioContext;
    // ...
} else {
    // Web Audio API is not supported
    // Alert the user
    alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
}

/**
 * START HERE WITH ALL SUITES
 */

EnergyButton.addEventListener('click', () => energy(essentia, Meyda, audioURL, ctx));
RMSButton.addEventListener('click', () => rms(essentia, Meyda, audioURL, ctx));
ZCRButton.addEventListener('click', () => zcr(essentia, Meyda, audioURL, ctx));
AmplitudeSpectralButton.addEventListener('click', () => amplitude_spectrum(essentia, Meyda, audioURL, ctx));
PowerSpectrumButton.addEventListener('click', () => power_spectrum(essentia, Meyda, audioURL, ctx));
SpectralCentroidButton.addEventListener('click', () => spectral_centroid(essentia, Meyda, audioURL, ctx));
SpectralFlatnessButton.addEventListener('click', () => spectral_flatness(essentia, Meyda, audioURL, ctx));
SpectralFluxButton.addEventListener('click', () =>  spectral_flux(essentia, Meyda, audioURL, ctx));
SpecRolloffButton.addEventListener('click', () => spectral_rolloff(essentia, Meyda, audioURL, ctx));
DistShapeButton.addEventListener('click', () => distribution_shape(essentia, Meyda, audioURL, ctx));
MFCCButton.addEventListener('click', () => mfcc(essentia, Meyda, audioURL, ctx));
MelBandsButton.addEventListener('click', () => mel_bands(essentia, Meyda, audioURL, ctx));
LoudnessButton.addEventListener('click', () => loudness(essentia, Meyda, audioURL, ctx));
PerceptualSpreadButton.addEventListener('click', () => perceptual_spread(essentia, Meyda, audioURL, ctx));
AllTimeFreqButton.addEventListener('click', () => all_time_freq(essentia, Meyda, audioURL, ctx));
HPCPButton.addEventListener('click', () => hpcp(essentia, Meyda, audioURL, ctx));
KeyButton.addEventListener('click', () => key(essentia, Meyda, audioURL, ctx));
TuningFreqButton.addEventListener('click', () => tuning_frequency(essentia, Meyda, audioURL, ctx));
OnsetButton.addEventListener('click', () => onset(essentia, Meyda, audioURL, ctx));
SuperFluxButton.addEventListener('click', () => super_flux(essentia, Meyda, audioURL, ctx));
BeatsZapataButton.addEventListener('click', () => beats_zapata(essentia, Meyda, audioURL, ctx));
BeatsDegaraButton.addEventListener('click', () => beats_degara(essentia, Meyda, audioURL, ctx));
Ebur128Button.addEventListener('click', () => ebur128(essentia, Meyda, audioURL, ctx));
PYINButton.addEventListener('click', () => pyin(essentia, Meyda, audioURL, ctx));
YINButton.addEventListener('click', () => yin(essentia, Meyda, audioURL, ctx));
YINFFTButton.addEventListener('click', () => yin_fft(essentia, Meyda, audioURL, ctx));
Button5s.addEventListener('click', (e) => selectAudio(e));
Button10s.addEventListener('click', (e) => selectAudio(e));
Button20s.addEventListener('click', (e) => selectAudio(e));
Button30s.addEventListener('click', (e) => selectAudio(e));
DownloadResults.addEventListener('change', (e) => manageResults(e));
FrameMode.addEventListener('change', (e) => manageFrameMode(e));

function selectAudio(e, audioURL) {
    const buttonsAudio = document.getElementsByClassName("audioButton");
    [].forEach.call(buttonsAudio, (item)=>{item.classList.remove("is-active")});
    e.target.classList.add("is-active");
    console.log(e.target.id);
    switch (e.target.id) {
        case "audio5s":
            window.audioURL = 'https://sonosuite-benchmark-audios.s3.amazonaws.com/mozart_c_major_5sec.wav';
            break;
        case "audio10s":
            window.audioURL = 'https://sonosuite-benchmark-audios.s3.amazonaws.com/mozart_c_major_10sec.wav';
            break;
        case "audio20s":
            window.audioURL = 'https://sonosuite-benchmark-audios.s3.amazonaws.com/mozart_c_major_20sec.wav';
            break;
        case "audio30s":
            window.audioURL = 'https://sonosuite-benchmark-audios.s3.amazonaws.com/mozart_c_major_30sec.wav';
            break;
    }
}

function manageResults(e){
    window.downloadResults = e.target.value === "on";
}

function manageFrameMode(e) {
    window.frameMode = e.target.value === "on" ? "essentia" : "vanilla";
}

function loadEssentia() {
    EssentiaWASM().then((EssentiaWasmModule) => {
        essentia = new Essentia(EssentiaWasmModule);
    });
}
