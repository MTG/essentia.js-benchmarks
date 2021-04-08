## Requirements
[install essentia with tensorflow support](https://essentia.upf.edu/installing.html)
pip install pytest
pip install pytest-benchmark
pip install numpy

## Run benchmarks
py.test test_essentia.py --benchmark-autosave
py.test test_essentia_tensorflow.py --benchmark-autosave