import getFile from '../../utils/getFile';
let essentia;

export default function rms_realtime() {
    const RMSRbutton = document.getElementById('rms_realtime');
    
    EssentiaModule().then( (EssentiaWasmModule) => {
        essentia = new Essentia(EssentiaWasmModule);
    });

    RMSRbutton.addEventListener('click', () => {
        const audioContext = new AudioContext();
        const BUFFER_SIZE = 512;
        const BUFFER_SIZE_MEYDA = 512;

        getFile(audioContext,'/audio/track.wav').then((audioBuffer) => {
            const suite = new Benchmark.Suite;


            // add tests
            suite.add('Meyda#RMS_RT', () => {
                console.log("meyda");
				var source = audioContext.createBufferSource();
				source.buffer = audioBuffer;
				let analyzer = Meyda.createMeydaAnalyzer({
					"audioContext": audioContext,
					"source": source,
					"bufferSize": BUFFER_SIZE_MEYDA,
					"featureExtractors": ["rms"],
					"callback": features => {
						// console.log(features);
					}
				});
				analyzer.start();
				// source.connect(audioContext.destination);
				source.start();
				source.ended = function(){
					analyzer.stop();
				}
                
            }).add('Essentia#RMS_RT', () => {
                console.log("essentia");

		        let scriptNode = audioContext.createScriptProcessor(BUFFER_SIZE, 1, 1);
		        audioContext.source.connect(scriptNode);
		        scriptNode.connect(audioContext.destination);

		        scriptNode.onaudioprocess = (audioProcessingEvent) => {
		            var inputBuffer = audioProcessingEvent.inputBuffer;
		            let essRMS = essentia.RMS(essentia.arrayToVector(inputBuffer.getChannelData(0)));
		        };

				source.start();
				source.ended = function(){
				}

            })
            // add listeners
            .on('cycle', function(event) {
                console.log(String(event.target));
                console.log('New Cycle!');
            })
            .on('complete', function() {
                console.log(this);
                console.log('Fastest is ' + this.filter('fastest').map('name'));
                // TODO: Here attach to the DOM
            })
            // run async
            .run({ 'async': false });
                    
        });  
    })  
}