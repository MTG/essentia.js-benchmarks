# INSTRUCTIONS
# py.test test_essentia_tensorflow.py --benchmark-autosave

from essentia.standard import MonoLoader
from essentia_tensorflow_algorithms import feature_extraction, inference_test_function, endtoend_test_function
from models_wrapper import ModelsWrapper

audio = MonoLoader(filename="../audio/mozart_c_major_30sec.wav", sampleRate=16000)()

# Model architecture wrapper objects
musicnn_wrapper = ModelsWrapper('musicnn')
vggish_wrapper = ModelsWrapper('vggish')

# FEATURE EXTRACTION
def test_tensorflow_input_musicnn(benchmark):
    benchmark(feature_extraction, audio, musicnn_wrapper)

def test_tensorflow_input_vggish(benchmark):
    benchmark(feature_extraction, audio, vggish_wrapper)


# AUTOTAGGING MUSICNN
def test_inference_autotagging_musicnn(benchmark):
    inference_test_function(benchmark, 'msd-musicnn-1', musicnn_wrapper, audio)

def test_endtoend_autotagging_musicnn(benchmark):
    endtoend_test_function(benchmark, 'msd-musicnn-1', musicnn_wrapper, audio)

# AUTOTAGGING VGG
def test_inference_autotagging_vgg(benchmark):
    inference_test_function(benchmark, 'msd-vgg-1', musicnn_wrapper, audio)

def test_endtoend_autotagging_vgg(benchmark):
    endtoend_test_function(benchmark, 'msd-vgg-1', musicnn_wrapper, audio)


# GENRE ROSAMERICA MUSICNN
def test_inference_genre_rosamerica_musicnn(benchmark):
    inference_test_function(benchmark, 'genre_rosamerica-musicnn-msd-2', musicnn_wrapper, audio)

def test_endtoend_genre_rosamerica_musicnn(benchmark):
    endtoend_test_function(benchmark, 'genre_rosamerica-musicnn-msd-2', musicnn_wrapper, audio)


# GENRE ROSAMERICA VGGISH
def test_inference_genre_rosamerica_vggish(benchmark):
    inference_test_function(benchmark, 'genre_rosamerica-vggish-audioset-1', vggish_wrapper, audio)

def test_endtoend_genre_rosamerica_vggish(benchmark):
    endtoend_test_function(benchmark, 'genre_rosamerica-vggish-audioset-1', vggish_wrapper, audio)

# MOOD HAPPY MUSICNN
def test_inference_mood_happy_musicnn(benchmark):
    inference_test_function(benchmark, 'mood_happy-musicnn-msd-2', musicnn_wrapper, audio)

def test_endtoend_mood_happy_musicnn(benchmark):
    endtoend_test_function(benchmark, 'mood_happy-musicnn-msd-2', musicnn_wrapper, audio)

# MOOD HAPPY VGGISH
def test_inference_mood_happy_vggish(benchmark):
    inference_test_function(benchmark, 'mood_happy-vggish-audioset-1', vggish_wrapper, audio)

def test_endtoend_mood_happy_vggish(benchmark):
    endtoend_test_function(benchmark, 'mood_happy-vggish-audioset-1', vggish_wrapper, audio)