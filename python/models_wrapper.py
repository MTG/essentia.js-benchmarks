import essentia.standard as es
from essentia import Pool
import numpy as np

# Base helper class to wrap each architechture and run benchmarks repeatedly
class ModelsWrapper:
    def __init__(self, arch):
        self.architechture = arch
        self.in_layer = None
        self.out_layer = None
        if arch == 'musicnn':
            self.feature_extractor = es.TensorflowInputMusiCNN()
            self.frame_size = 512
            self.hop_size = 256
            self.patch_size = 187
            self.num_bands = 96
        elif arch == 'vggish':
            self.feature_extractor = es.TensorflowInputVGGish()
            self.frame_size = 400
            self.hop_size = 200
            self.patch_size = 96
            self.num_bands = 64
        self.feature_frames = []
        self.in_pool = Pool()
        self.out_pool = Pool()
        # setup model
        self.predict = None

    def load_model(self, model_path, in_layer, out_layer):
        if not self.predict:
            self.predict = es.TensorflowPredict(graphFilename=model_path, inputs=[in_layer], outputs=[out_layer], squeeze=True)
            self.in_layer = in_layer
            self.out_layer = out_layer

    def compute_features(self, audio):
        frames = []
        self.feature_frames = [] # ensure it's empty
        for frame in es.FrameGenerator(audio, frameSize=self.frame_size, hopSize=self.hop_size, startFromZero=True):
            frames.append(frame)
        
        for f in frames:
            self.feature_frames.append(self.feature_extractor(f))
        
        return self.feature_frames
        

    def make_prediction(self):
        self._featuresToTensorAsBatch()
        self.out_pool.clear()
        self.out_pool = self.predict(self.in_pool)
        return self.out_pool[self.out_layer]

    def _featuresToTensorAsBatch(self):
        # reshape features as tensor, zeropadding as needed
        feature_frames_as_np = np.array(self.feature_frames, dtype=np.single)
        incomplete_patch_size = feature_frames_as_np.shape[0] % self.patch_size

        zero_frame_size = self.patch_size - incomplete_patch_size
        zero_frames = np.zeros((zero_frame_size, self.num_bands), dtype=np.single)
        zero_padded_features = np.append(feature_frames_as_np, zero_frames, axis=0)
        batch = np.expand_dims(np.reshape(zero_padded_features, [-1, self.patch_size, self.num_bands]), 1)
        self.in_pool.set(self.in_layer, batch)
    
    def dispose(self):
        # clear model from memory
        self.predict = None
        self.in_layer = None