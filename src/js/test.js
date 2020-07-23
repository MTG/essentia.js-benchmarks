export default function test() {

    async function getFile(audioCtx, filepath) {
        const response = await fetch(filepath);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await  audioCtx.decodeAudioData(arrayBuffer);
        return audioBuffer;
    }


    function computeEssentiaRMS(audioBuffer, bufferSize, essentia){
      for (var i = 0; i < audioBuffer.length/bufferSize; i++){
        var buffer = audioBuffer.getChannelData(0).slice(bufferSize*i, bufferSize*i + bufferSize);
        var essRMS = essentia.RMS(essentia.arrayToVector(buffer));
        console.log(essRMS);
      }
    }


    console.log('from class!!');
    document.addEventListener('click', (e) => {
        if (audioContext) {
            console.log('hola');
            return;
        }
        const audioContext = new AudioContext();
        // // Select the Audio Element from the DOM
        // const htmlAudioElement = document.getElementById("audio");
        // // Create an "Audio Node" from the Audio Element
        // const source = audioContext.createMediaElementSource(htmlAudioElement);
        // // Connect the Audio Node to your speakers. Now that the audio lives in the
        // // Audio Context, you have to explicitly connect it to the speakers in order to
        // // hear it
        // source.connect(audioContext.destination);

        if (typeof Meyda === "undefined") {
            console.log("Meyda could not be found! Have you included it?");
        }
        else {
            // const analyzer = Meyda.createMeydaAnalyzer({
            //     "audioContext": audioContext,
            //     "source": source,
            //     "bufferSize": 512,
            //     "featureExtractors": ["rms"],
            //     "callback": features => {
            //         console.log(features);
            //     }
            // });
            // analyzer.start();
            getFile(audioContext,'/audio/track.wav').then((audioBuffer) => {
                console.log(Meyda);
                Meyda.bufferSize = 512;
                const features = Meyda.extract(['rms'], audioBuffer.getChannelData(0).slice(0, 512));
                console.log(features);
            });
            
        }


        var essentia;
        EssentiaModule().then( function(EssentiaWasmModule) {
            essentia = new Essentia(EssentiaWasmModule);
            // prints version of the essentia wasm backend
            console.log(essentia.version)
            // prints all the available algorithms in essentia.js
            console.log(essentia.algorithmNames);

            // add your custom audio feature extraction callbacks here
            getFile(audioContext, '/audio/track.wav').then((audioBuffer) => {
                computeEssentiaRMS(audioBuffer, 512, essentia);
            });
        });



    });
}