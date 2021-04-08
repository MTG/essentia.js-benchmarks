import wav from "node-wav";

export default function preprocess (buffer) {
    if (buffer instanceof Buffer) {
        // decode buffer of binary data
        const audioBuffer = wav.decode(buffer);
        const mono = monomix(audioBuffer);
        // downmix to mono, and downsample to 16kHz sr for essentia tensorflow models
        return downsampleArray(mono, audioBuffer.sampleRate, 16000);
    } else {
        throw new TypeError("Input to models audio preprocessing is not of type Buffer");
    }
}

function monomix(buffer) {
    // downmix to mono
    let monoAudio;
    if (buffer.channelData.length > 1) {
        console.log('mixing down to mono...');
        const leftCh = buffer.channelData[0];
        const rightCh = buffer.channelData[1];
        monoAudio = leftCh.map( (sample, i) => 0.5 * (sample + rightCh[i]) );
    } else {
        monoAudio = buffer.channelData[0];
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
