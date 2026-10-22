let context;
let master;
let ambient;
let enabled = false;
let lastHover = 0;
const listeners = new Set();

export const getSoundEnabled = () => enabled;
export const subscribeToSound = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

function createAudio() {
  if (context) return true;
  const Audio = window.AudioContext || window.webkitAudioContext;
  if (!Audio) return false;
  context = new Audio();
  master = context.createGain();
  master.gain.value = 0;
  master.connect(context.destination);
  ambient = context.createGain();
  ambient.gain.value = 0.032;
  ambient.connect(master);
  [110, 164.81, 220.2].forEach((frequency) => {
    const oscillator = context.createOscillator();
    const level = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    level.gain.value = 0.2;
    oscillator.connect(level).connect(ambient);
    oscillator.start();
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) context.suspend().catch(() => {});
    else if (enabled) context.resume().catch(() => {});
  });
  return true;
}

export async function setSoundEnabled(value) {
  if (!value) {
    enabled = false;
    if (context && master) master.gain.setTargetAtTime(0, context.currentTime, 0.04);
    listeners.forEach((listener) => listener());
    return false;
  }
  try {
    if (!createAudio()) return false;
    await context.resume();
    enabled = context.state === 'running';
    master.gain.setTargetAtTime(enabled ? 0.5 : 0, context.currentTime, 0.1);
  } catch {
    enabled = false;
  }
  listeners.forEach((listener) => listener());
  return enabled;
}

export function playSound(kind = 'tap') {
  if (!enabled || !context || context.state !== 'running') return;
  const now = context.currentTime;
  if (kind === 'navigate') {
    const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * 0.65), context.sampleRate);
    const samples = buffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const level = context.createGain();
    source.buffer = buffer;
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, now);
    filter.frequency.exponentialRampToValueAtTime(1800, now + 0.25);
    filter.frequency.exponentialRampToValueAtTime(100, now + 0.65);
    level.gain.setValueAtTime(0.0001, now);
    level.gain.exponentialRampToValueAtTime(0.035, now + 0.22);
    level.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);
    source.connect(filter).connect(level).connect(master);
    source.start(now); source.stop(now + 0.65);
    source.onended = () => { source.disconnect(); filter.disconnect(); level.disconnect(); };
    return;
  }
  if (kind === 'hover' && now - lastHover < 0.09) return;
  if (kind === 'hover') lastHover = now;
  const notes = kind === 'enter' ? [220, 329.63, 440, 659.25] : kind === 'shift' ? [164.81, 246.94, 493.88] : [kind === 'hover' ? 740 : 440];
  notes.forEach((frequency, index) => {
    const start = now + index * (kind === 'enter' ? 0.095 : 0.035);
    const duration = kind === 'enter' ? 0.8 : kind === 'hover' ? 0.09 : 0.32;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.frequency.exponentialRampToValueAtTime(frequency * (kind === 'hover' ? 0.8 : 1.015), start + duration);
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.exponentialRampToValueAtTime(kind === 'hover' ? 0.035 : 0.12, start + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(envelope).connect(master);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
    oscillator.onended = () => { oscillator.disconnect(); envelope.disconnect(); };
  });
}
