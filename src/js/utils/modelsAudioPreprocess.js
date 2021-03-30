export default function preprocess (audioBuffer) {
    if (audioBuffer instanceof AudioBuffer) {
        const mono = monomix(audioBuffer);
        // downmix to mono, and downsample to 16kHz sr for essentia tensorflow models
        return downsampleArray(mono, audioBuffer.sampleRate, 16000);
    } else {
        throw new TypeError("Input to audio preprocessing is not of type AudioBuffer");
    }
}

function monomix(buffer) {
    // downmix to mono
    let monoAudio;
    if (buffer.numberOfChannels > 1) {
        console.log('mixing down to mono...');
        const leftCh = buffer.getChannelData(0);
        const rightCh = buffer.getChannelData(1);
        monoAudio = leftCh.map( (sample, i) => 0.5 * (sample + rightCh[i]) );
    } else {
        monoAudio = buffer.getChannelData(0);
    }

    return monoAudio;
}

function downsampleArray(audioIn, sampleRateIn, sampleRateOut) {
    if (sampleRateOut === sampleRateIn) {
      return audioIn;
    }
    let sampleRateRatio = sampleRateIn / sampleRateOut;
    let newLength = Math.round(audioIn.length / sampleRateRatio);
    let result = new Float32Array(newLength);
    let offsetResult = 0;
    let offsetAudioIn = 0;

    while (offsetResult < result.length) {
        let nextOffsetAudioIn = Math.round((offsetResult + 1) * sampleRateRatio);
        let accum = 0,
            count = 0;
        for (let i = offsetAudioIn; i < nextOffsetAudioIn && i < audioIn.length; i++) {
            accum += audioIn[i];
            count++;
        }
        result[offsetResult] = accum / count;
        offsetResult++;
        offsetAudioIn = nextOffsetAudioIn;
    }

    return result;
}