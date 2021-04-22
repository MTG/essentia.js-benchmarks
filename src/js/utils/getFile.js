async function getFile(audioCtx, filepath) { 
    audioCtx.resume().then(() => {
        const response = await fetch(filepath);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await  audioCtx.decodeAudioData(arrayBuffer);
        await audioCtx.suspend();
    })

    return audioBuffer;
}

export {getFile as default};