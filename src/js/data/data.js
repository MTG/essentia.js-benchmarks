 let data = [
        {
            title: "Time Domain Features",
            childs: [
                {
                    title: "Energy",
                    id: 'energy'
                },
                {
                    title: "RMS",
                    id: "rms"
                }, 
                {
                    title: "Zero Crossing Rate",
                    id : "zcr"
                }
            ]

        },
        {
            title: "Spectral Features", 
            childs: [
                {
                    title: "Amplitude Spectrum",
                    id: "amplitude_spectrum"
                },
                {
                    title: "Power Spectrum",
                    id: "power_spectrum"
                },
                {
                    title: "Spectral Centroid",
                    id: "spectral_centroid"
                },
                {
                    title: "Spectral Flatness",
                    id: "spectral_flatness"
                },
                {
                    title: "Spectral Flux",
                    id: "spectral_flux"
                },
                {
                    title: "Spectral RollOff",
                    id: "spec_rolloff"
                },
                {
                    title: "Distribution Shape",
                    id: "dist_shape"
                },
                {
                    title: "MFCC",
                    id: "mfcc"
                },
                {
                    title: "Mel Bands",
                    id: "mel_bands"
                },
                {
                    title: "Loudness",
                    id:"loudness"
                },
                {
                    title: "Perceptual Spread",
                    id: "perceptual_spread"
                }
            ]
        },
        {
            title: "All time domain and Spectral features (Above)",
            childs: [
                {
                    title: "All Time and Spectral",
                    id: "all_time_freq"
                }
            ]
        },
        {
            title: "Tonal Features",
            childs: [
                {
                    title: "HCPC (Chroma)",
                    id: "hpcp"
                },
                {
                    title: "Key Extractor",
                    id: "key"
                },
                {
                    title: "Tuning Frequency Extractor",
                    id: "tuning_frequency"
                }
            ]
        },
        {
            title: "Rhythm",
            childs: [
                {
                    title: "Onset Rate",
                    id: "onset"
                },
                {
                    title: "Super Flux Extractor",
                    id: "super_flux"
                },
                {
                    title: "Beats Zapata Extractor",
                    id: "beats_zapata"
                },
                {
                    title: "Beats Degara Extractor",
                    id: "beats_degara"
                }
            ]

        },
        {
            title: "Loudness",
            childs: [
                {
                    title: "Loudness EBUR128",
                    id: "ebur128"
                },
                {
                    title: "Compute Pitch PYIN",
                    id: "pyin"
                },
                {
                    title: "Compute Pitch YIN",
                    id: "yin"
                },
                {
                    title: "Compute Pitch YIN (fft)",
                    id: "yin_fft"
                }
            ]
        }
    ];

export default data;
