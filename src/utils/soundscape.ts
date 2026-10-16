/**
 * Procedural Web Audio Sound Engine for Bhairavgarh Batik Revival
 * 100% self-contained, synthesizes all acoustic textures in real time:
 * - Kshipra River waters (multi-pole filtered fluid pink noise with wave swells)
 * - Chhipa Workshop (hollow teak wood block thud + bubbling beeswax hearth)
 * - Malwa Drone (rich tanpura/bamboo harmonic resonance)
 * - Interactive SFX: wood block tap, dye droplet splash, bronze bell chime, paper swish
 */

export type SoundMode = 'river' | 'workshop' | 'drone' | 'off';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private currentMode: SoundMode = 'off';
  private masterVolume = 0.5;
  private sfxEnabled = true;

  // Master Gain
  private masterGain: GainNode | null = null;

  // Ambient Nodes
  private ambientSourceNodes: AudioNode[] = [];
  private ambientIntervals: number[] = [];

  private ensureContext(): AudioContext {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    if (!this.masterGain) {
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    return this.ctx;
  }

  public getMode(): SoundMode {
    return this.currentMode;
  }

  public isSoundActive(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.masterVolume;
  }

  public setVolume(vol: number) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.masterVolume, this.ctx.currentTime, 0.05);
    }
  }

  public toggleSfx(): boolean {
    this.sfxEnabled = !this.sfxEnabled;
    return this.sfxEnabled;
  }

  public isSfxOn(): boolean {
    return this.sfxEnabled;
  }

  public setMode(mode: SoundMode) {
    if (mode === 'off') {
      this.stop();
      return;
    }

    const ctx = this.ensureContext();
    this.clearCurrentAmbiance();
    this.currentMode = mode;
    this.isPlaying = true;

    if (mode === 'river') {
      this.startRiverAmbiance(ctx);
    } else if (mode === 'workshop') {
      this.startWorkshopAmbiance(ctx);
    } else if (mode === 'drone') {
      this.startDroneAmbiance(ctx);
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.setMode('river');
      return true;
    }
  }

  public stop() {
    this.clearCurrentAmbiance();
    this.currentMode = 'off';
    this.isPlaying = false;
  }

  private clearCurrentAmbiance() {
    this.ambientSourceNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof (node as AudioBufferSourceNode).stop === 'function') {
          (node as AudioBufferSourceNode).stop();
        }
        node.disconnect();
      } catch {
        // ignore
      }
    });
    this.ambientSourceNodes = [];

    this.ambientIntervals.forEach((intervalId) => clearInterval(intervalId));
    this.ambientIntervals = [];
  }

  /* ================== AMBIENT ENGINES ================== */

  /** Mode 1: Sacred Kshipra River Waters with gentle current swells & distant chiming */
  private startRiverAmbiance(ctx: AudioContext) {
    if (!this.masterGain) return;

    // Pink noise buffer for fluid water sound
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      data[i] = (b0 + b1 + b2) * 0.12;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    // Bandpass and Lowpass filters simulating water flowing over river stones
    const bandpass = ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(420, ctx.currentTime);
    bandpass.Q.setValueAtTime(1.2, ctx.currentTime);

    // LFO for wave swells
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.25, ctx.currentTime); // slow wave oscillation

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(180, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(bandpass.frequency);

    const riverGain = ctx.createGain();
    riverGain.gain.setValueAtTime(0.08, ctx.currentTime);

    noiseSource.connect(bandpass);
    bandpass.connect(riverGain);
    riverGain.connect(this.masterGain);

    noiseSource.start(0);
    lfo.start(0);

    this.ambientSourceNodes.push(noiseSource, bandpass, lfo, lfoGain, riverGain);

    // Occasional subtle distant temple chime along Kshipra ghats every ~9 seconds
    const chimeTimer = window.setInterval(() => {
      if (this.currentMode === 'river') {
        this.playDistantGhatChime();
      }
    }, 9200);
    this.ambientIntervals.push(chimeTimer);
  }

  /** Mode 2: Chhipa Karkhana Workshop (Hearth embers + periodic woodblock striking) */
  private startWorkshopAmbiance(ctx: AudioContext) {
    if (!this.masterGain) return;

    // Subtle hearth fire crackle & beeswax pot simmer
    const bufferSize = ctx.sampleRate;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // sparse random crackle bursts
      data[i] = Math.random() > 0.96 ? (Math.random() * 2 - 1) * 0.4 : (Math.random() * 0.02 - 0.01);
    }

    const hearthSource = ctx.createBufferSource();
    hearthSource.buffer = noiseBuffer;
    hearthSource.loop = true;

    const hearthFilter = ctx.createBiquadFilter();
    hearthFilter.type = 'bandpass';
    hearthFilter.frequency.setValueAtTime(1600, ctx.currentTime);
    hearthFilter.Q.setValueAtTime(0.8, ctx.currentTime);

    const hearthGain = ctx.createGain();
    hearthGain.gain.setValueAtTime(0.03, ctx.currentTime);

    hearthSource.connect(hearthFilter);
    hearthFilter.connect(hearthGain);
    hearthGain.connect(this.masterGain);

    hearthSource.start(0);
    this.ambientSourceNodes.push(hearthSource, hearthFilter, hearthGain);

    // Rhythmic Chhipa wood block stamp every ~3.2 seconds
    const stampTimer = window.setInterval(() => {
      if (this.currentMode === 'workshop') {
        this.playWoodBlockTap(false);
      }
    }, 3200);
    this.ambientIntervals.push(stampTimer);
  }

  /** Mode 3: Malwa Drone (Warm Tanpura harmonic fifths) */
  private startDroneAmbiance(ctx: AudioContext) {
    if (!this.masterGain) return;

    const droneGain = ctx.createGain();
    droneGain.gain.setValueAtTime(0.045, ctx.currentTime);
    droneGain.connect(this.masterGain);

    // D3 Root (146.83 Hz) + A3 Fifth (220 Hz) + D4 Octave (293.66 Hz)
    const freqs = [146.83, 220.0, 293.66];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Gentle vibrato
      const vibrato = ctx.createOscillator();
      vibrato.frequency.setValueAtTime(0.3 + idx * 0.1, ctx.currentTime);
      const vibratoGain = ctx.createGain();
      vibratoGain.gain.setValueAtTime(0.8, ctx.currentTime);
      vibrato.connect(vibratoGain);
      vibratoGain.connect(osc.frequency);

      const oscGain = ctx.createGain();
      oscGain.gain.setValueAtTime(0.3 / (idx + 1), ctx.currentTime);

      osc.connect(oscGain);
      oscGain.connect(droneGain);

      osc.start(0);
      vibrato.start(0);

      this.ambientSourceNodes.push(osc, vibrato, vibratoGain, oscGain);
    });

    this.ambientSourceNodes.push(droneGain);
  }

  /* ================== INTERACTIVE SFX ================== */

  /** Authentic Hollow Teak Woodblock Tap on handloom cloth */
  public playWoodBlockTap(accent = true) {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.ensureContext();
      const now = ctx.currentTime;

      // 1. Wooden body impulse (downward pitched triangle wave)
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();

      osc.type = 'triangle';
      const startFreq = accent ? 180 : 140;
      const endFreq = accent ? 52 : 44;
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.1);

      const vol = (accent ? 0.08 : 0.04) * this.masterVolume;
      oscGain.gain.setValueAtTime(vol, now);
      oscGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(oscGain);
      oscGain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);

      // 2. Teak surface transient thud (bandpassed noise burst)
      const buffer = ctx.createBuffer(1, ctx.sampleRate * 0.03, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.008));
      }
      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(650, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(vol * 0.6, now);
      noiseGain.gain.linearRampToValueAtTime(0, now + 0.03);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(now);
    } catch {
      // ignore
    }
  }

  /** Dye Solution Droplet / Aqueous Splash */
  public playDropletSound() {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.ensureContext();
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      // Upward pitch swoop simulating fluid droplet bubble
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(940, now + 0.09);

      const vol = 0.06 * this.masterVolume;
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.11);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch {
      // ignore
    }
  }

  /** Resonant Temple / Brass Register Pin Chime */
  public playBronzeChime() {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.ensureContext();
      const now = ctx.currentTime;

      const frequencies = [880, 1760, 2640];
      frequencies.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        const vol = (0.04 / (i + 1)) * this.masterVolume;
        gain.gain.setValueAtTime(vol, now);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + (1.2 / (i + 0.7)));

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 1.4);
      });
    } catch {
      // ignore
    }
  }

  /** Distant River Ghat Chime */
  private playDistantGhatChime() {
    try {
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5 bell

      gain.gain.setValueAtTime(0.015 * this.masterVolume, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 2.0);
    } catch {
      // ignore
    }
  }

  /** Tactile Silk / Paper Slide Swish */
  public playPaperSlide() {
    if (!this.sfxEnabled) return;
    try {
      const ctx = this.ensureContext();
      const now = ctx.currentTime;

      const dur = 0.12;
      const buffer = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.sin((Math.PI * i) / data.length);
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, now);
      filter.Q.setValueAtTime(1.5, now);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.035 * this.masterVolume, now);
      gain.gain.linearRampToValueAtTime(0.0001, now + dur);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
    } catch {
      // ignore
    }
  }
}

export const soundscape = new SoundEngine();
