// SpeakPro - Web Audio API Sound Synthesizer & Speech Synthesis
// Zero external audio files required!

const SoundEffects = {
    audioCtx: null,
    enabled: true,

    init() {
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) {
                this.audioCtx = new AudioContext();
            }
        }
    },

    ensureContext() {
        if (!this.audioCtx) this.init();
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
    },

    playClick() {
        if (!this.enabled) return;
        try {
            this.ensureContext();
            if (!this.audioCtx) return;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, this.audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, this.audioCtx.currentTime + 0.05);
            gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + 0.05);
        } catch (e) {
            console.warn(e);
        }
    },

    playCorrect() {
        if (!this.enabled) return;
        try {
            this.ensureContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;
            
            // Chord: C5, E5, G5
            [523.25, 659.25, 783.99].forEach((freq, idx) => {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                gain.gain.setValueAtTime(0.15, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.3);
            });
        } catch (e) {
            console.warn(e);
        }
    },

    playWrong() {
        if (!this.enabled) return;
        try {
            this.ensureContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.exponentialRampToValueAtTime(110, now + 0.25);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start(now);
            osc.stop(now + 0.25);
        } catch (e) {
            console.warn(e);
        }
    },

    playCountdown() {
        if (!this.enabled) return;
        try {
            this.ensureContext();
            if (!this.audioCtx) return;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + 0.08);
        } catch (e) {
            console.warn(e);
        }
    },

    playWin() {
        if (!this.enabled) return;
        try {
            this.ensureContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;
            // Fanfare notes: C5, G4, C5, E5, G5, C6
            const notes = [523.25, 392.00, 523.25, 659.25, 783.99, 1046.50];
            const delays = [0, 0.12, 0.24, 0.36, 0.48, 0.65];
            const durations = [0.1, 0.1, 0.1, 0.1, 0.15, 0.45];

            notes.forEach((freq, i) => {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(freq, now + delays[i]);
                gain.gain.setValueAtTime(0.2, now + delays[i]);
                gain.gain.exponentialRampToValueAtTime(0.001, now + delays[i] + durations[i]);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now + delays[i]);
                osc.stop(now + delays[i] + durations[i]);
            });
        } catch (e) {
            console.warn(e);
        }
    },

    playStarEarned() {
        if (!this.enabled) return;
        try {
            this.ensureContext();
            if (!this.audioCtx) return;
            const now = this.audioCtx.currentTime;
            [1046.50, 1318.51, 1567.98].forEach((freq, idx) => {
                const osc = this.audioCtx.createOscillator();
                const gain = this.audioCtx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.07);
                gain.gain.setValueAtTime(0.12, now + idx * 0.07);
                gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
                osc.connect(gain);
                gain.connect(this.audioCtx.destination);
                osc.start(now + idx * 0.07);
                osc.stop(now + idx * 0.07 + 0.25);
            });
        } catch (e) {
            console.warn(e);
        }
    }
};

// Web Speech API for native voice pronunciation in English, Russian, and German!
function speakForeignWord(text, langCode = 'en-US') {
    if (window.App && window.App.user && window.App.user.speechEnabled === false) {
        return; // Speech is disabled in settings
    }
    if (!('speechSynthesis' in window)) {
        console.warn('Speech synthesis not supported in this browser.');
        return;
    }
    window.speechSynthesis.cancel(); // Stop prior speech
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Normalize language codes
    let targetLang = 'en-US';
    if (langCode === 'en' || langCode === 'en-US') targetLang = 'en-US';
    else if (langCode === 'ru' || langCode === 'ru-RU') targetLang = 'ru-RU';
    else if (langCode === 'de' || langCode === 'de-DE') targetLang = 'de-DE';

    utterance.lang = targetLang;
    utterance.rate = 0.9; // clear, comfortable speed
    utterance.pitch = 1.0;
    if (window.App && window.App.user && window.App.user.volume !== undefined) {
        utterance.volume = window.App.user.volume / 100;
    }

    // Pick best available voice matching targetLang if possible
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang.startsWith(targetLang.slice(0, 2)));
    if (matchedVoice) {
        utterance.voice = matchedVoice;
    }

    window.speechSynthesis.speak(utterance);
}
