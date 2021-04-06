# INSTRUCTIONS
# py.test test_essentia.py


from essentia.standard import *
from essentia import Pool
from essentia_algorithms import *


audio = MonoLoader(filename="mozart_c_major_30sec.wav")()
stereo_audio = AudioLoader(filename="mozart_c_major_30sec.wav")()[0]


def test_compute_energy(benchmark):
    benchmark(compute_energy, audio)
    # benchmark.pedantic(compute_energy, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_rms(benchmark):
    benchmark(compute_rms ,audio)
    # benchmark.pedantic(compute_rms, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_zcr(benchmark):
    benchmark(compute_zcr, audio)
    # benchmark.pedantic(compute_zcr, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_spectrum(benchmark):
    benchmark(compute_spectrum, audio)
    # benchmark.pedantic(compute_spectrum, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_power_spectrum(benchmark):
    benchmark(compute_power_spectrum, audio)
    # benchmark.pedantic(compute_power_spectrum, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_spectral_centroid(benchmark):
    benchmark(compute_spectral_centroid, audio)
    # benchmark.pedantic(compute_spectral_centroid, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_spectral_flatness(benchmark):
    benchmark(compute_spectral_flatness, audio)
    # benchmark.pedantic(compute_spectral_flatness, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_spectral_flux(benchmark):
    benchmark(compute_spectral_flux, audio)
    # benchmark.pedantic(compute_spectral_flux, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_spectral_rolloff(benchmark):
    benchmark(compute_spectral_rolloff, audio)
    # benchmark.pedantic(compute_spectral_rolloff, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_spectral_shape(benchmark):
    benchmark(compute_spectral_shape, audio)
    # benchmark.pedantic(compute_spectral_shape, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_mfcc(benchmark):
    benchmark(compute_mfcc, audio)
    # benchmark.pedantic(compute_mfcc, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_mel(benchmark):
    benchmark(compute_mel, audio)
    # benchmark.pedantic(compute_mel, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_bark(benchmark):
    benchmark(compute_bark, audio)
    # benchmark.pedantic(compute_bark, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_bark_spread(benchmark):
    benchmark(compute_bark_spread, audio)
    # benchmark.pedantic(compute_bark_spread, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_hpcp(benchmark):
    benchmark(compute_hpcp, audio)
    # benchmark.pedantic(compute_hpcp, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_key(benchmark):
    benchmark(compute_key, audio)
    # benchmark.pedantic(compute_key, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_tuning(benchmark):
    benchmark(compute_tuning, audio)
    # benchmark.pedantic(compute_tuning, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_onsets(benchmark):
    benchmark(compute_onsets, audio)
    # benchmark.pedantic(compute_onsets, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_onsets_superflux(benchmark):
    benchmark(compute_onsets_superflux, audio)
    # benchmark.pedantic(compute_onsets_superflux, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_beats_zapata(benchmark):
    benchmark(compute_beats_zapata, audio)
    # benchmark.pedantic(compute_beats_zapata, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_beats_degara(benchmark):
    benchmark(compute_beats_degara, audio)
    # benchmark.pedantic(compute_beats_degara, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_loudness_ebur128(benchmark):
    benchmark(compute_loudness_ebur128, stereo_audio)
    # benchmark.pedantic(compute_loudness_ebur128, kwargs={'stereo_audio':stereo_audio}, iterations=1, rounds=20)

def test_compute_melody(benchmark):
    benchmark(compute_melody, audio)
    # benchmark.pedantic(compute_melody, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_pitch_pyin(benchmark):
    benchmark(compute_pitch_pyin, audio)
    # benchmark.pedantic(compute_pitch_pyin, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_pitch_yin(benchmark):
    benchmark(compute_pitch_yin, audio)
    # benchmark.pedantic(compute_pitch_yin, kwargs={'audio':audio}, iterations=1, rounds=20)

def test_compute_pitch_yinfft(benchmark):
    benchmark(compute_pitch_yinfft, audio)
    # benchmark.pedantic(compute_pitch_yinfft, kwargs={'audio':audio}, iterations=1, rounds=20)

