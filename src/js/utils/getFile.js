async function getFile(audioCtx, filepath) { 
    await audioCtx.resume();
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    await audioCtx.suspend();

    return audioBuffer;
}

export {getFile as default};