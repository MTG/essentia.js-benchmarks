async function getFile(audioCtx, filepath) { 
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await  audioCtx.decodeAudioData(arrayBuffer);

    return audioBuffer;
}

export {getFile as default};