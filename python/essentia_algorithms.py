from essentia.standard import *
from essentia import Pool

frame_size = 2048
hop_size = 1024
tonal_frame_size = 4096
tonal_hop_size = 2048


# Energy
def compute_energy(audio):
    energy = Energy()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('energy', energy(frame))
    return 'True';
    # return p['energy']


# RMS
def compute_rms(audio):
    rms = RMS()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('rms', rms(frame))
    return p['rms']


# Zero-crossing rate
def compute_zcr(audio):
    zcr = ZeroCrossingRate()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('zcr', zcr(frame))
    return p['zcr']


# Magnitude spectrum
def compute_spectrum(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('spectrum', spectrum(w(frame)))
    return p['spectrum']


# Power spectrum
def compute_power_spectrum(audio):
    w = Windowing(type = 'hann')
    power_spectrum = PowerSpectrum()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('power_spectrum', power_spectrum(w(frame)))
    return p['power_spectrum']


# Spectral centroid
def compute_spectral_centroid(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    centroid = Centroid()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('spectral_centroid', centroid(spectrum(w(frame))))
    return p['spectral_centroid']


# Spectral flatness
def compute_spectral_flatness(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    flatness = Flatness()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('spectral_flatness', flatness(spectrum(w(frame))))
    return p['spectral_flatness']


# Spectral flux
def compute_spectral_flux(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    flux = Flux()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('spectral_flux', flux(spectrum(w(frame))))
    return p['spectral_flux']


# Spectral rolloff
def compute_spectral_rolloff(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    rolloff = RollOff()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('spectral_rolloff', rolloff(spectrum(w(frame))))
    return p['spectral_rolloff']


# Spectral distribution shape (kurtosis, skewness, spread)
def compute_spectral_shape(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    cm = CentralMoments()
    ds = DistributionShape()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        spread, skewness, kurtosis = ds(cm(spectrum(w(frame))))
        p.add('spectral_spread', spread)
        p.add('spectral_skewness', skewness)
        p.add('spectral_kurtosis', kurtosis)    
    return p['spectral_spread'], p['spectral_skewness'], p['spectral_kurtosis']


# MFCC
def compute_mfcc(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    mfcc = MFCC()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        _, coeffs = mfcc(spectrum(w(frame)))
        p.add('mfcc', coeffs)
    return p['mfcc']


# Mel-spectrogram 96 bins
def compute_mel(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    mel = MelBands(numberBands=96)
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('mel', mel(spectrum(w(frame))))
    return p['mel']


# Bark bands (Meyda: "Loudness")
def compute_bark(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    bark = BarkBands()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('bark', bark(spectrum(w(frame))))
    return p['bark']


# Bark bands spread (Meyda: "Perceptual Spread")
def compute_bark_spread(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    bark = BarkBands()
    variance = Variance()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('bark_spread', variance(bark(spectrum(w(frame)))))
    return p['bark_spread']


# HPCP 
def compute_hpcp(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    peaks = SpectralPeaks(orderBy='magnitude',
                          magnitudeThreshold=0.00001,
                          minFrequency=20,
                          maxFrequency=3500,
                          maxPeaks=60)
    hpcp = HPCP()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=tonal_frame_size, hopSize=tonal_hop_size, startFromZero=True):
        p.add('hpcp', hpcp(*peaks(spectrum(w(frame)))))
    return p['hpcp']


# KeyExtractor (has it's own frame/hop size of 4096 and 4096)
def compute_key(audio):
    return KeyExtractor()(audio)


# Tuning frequency (has it's own frame/hop size of 4096 and 2048)
def compute_tuning(audio):
    return TuningFrequencyExtractor()(audio)


# Onsets 
def compute_onsets(audio):
    return OnsetRate()(audio)


# Superflux Onsets
def compute_onsets_superflux(audio):
    return SuperFluxExtractor()(audio)


# Beats, BPM (Zapata)
def compute_beats_zapata(audio):
    return RhythmExtractor2013(method='multifeature')(audio)


# Beats, BPM (Degara) 
def compute_beats_degara(audio):
    return RhythmExtractor2013(method='degara')(audio)


# Loudness EBU R128
# NOTE: the input is stereo audio
def compute_loudness_ebur128(stereo_audio):
    return LoudnessEBUR128()(stereo_audio)


# Predominant melody
def compute_melody(audio):
    eqloudness = EqualLoudness()
    melodia = PredominantPitchMelodia()
    return melodia(eqloudness(audio))


# Pitch (PYin)
def compute_pitch_pyin(audio):
    return PitchYinProbabilistic()(audio)


# Pitch (Yin)
def compute_pitch_yin(audio):
    yin = PitchYin()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('pitch_yin', yin(frame)[0])
    return p['pitch_yin']


# Pitch (Yin FFT)
def compute_pitch_yinfft(audio):
    w = Windowing(type = 'hann')
    spectrum = Spectrum()
    yinfft = PitchYinFFT()
    p = Pool()
    for frame in FrameGenerator(audio, frameSize=frame_size, hopSize=hop_size, startFromZero=True):
        p.add('pitch_yinfft', yinfft(spectrum(w(frame)))[0])
    return p['pitch_yinfft']


audio = MonoLoader(filename="../audio/mozart_c_major_30sec.wav")()
stereo_audio = AudioLoader(filename="../audio/mozart_c_major_30sec.wav")()[0]




print("DONE")