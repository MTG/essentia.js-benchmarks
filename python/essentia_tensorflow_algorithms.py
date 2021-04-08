import json

with open('./models-metadata.json', 'r') as metadata_file:
    MODELS_METADATA = json.load(metadata_file)

# ALGOS to test
def feature_extraction(audio, wrapper):
    return wrapper.compute_features(audio)

def inference(wrapper):
    return wrapper.make_prediction()

def endtoend(audio, wrapper):
    wrapper.compute_features(audio)
    return wrapper.make_prediction()

# UTILS
def inference_test_function(benchmark, model_name, wrapper, audio):
    metadata = MODELS_METADATA[model_name]
    # setup
    wrapper.load_model(metadata['path'], metadata['input_layer'], metadata['output_layer'])
    if not wrapper.feature_frames:
        wrapper.compute_features(audio)
    # test
    benchmark(inference, wrapper)
    # teardown
    wrapper.dispose()

def endtoend_test_function(benchmark, model_name, wrapper, audio):
    metadata = MODELS_METADATA[model_name]
    # setup
    wrapper.load_model(metadata['path'], metadata['input_layer'], metadata['output_layer'])
    # test
    benchmark(endtoend, audio, wrapper)
    # teardown
    wrapper.dispose()