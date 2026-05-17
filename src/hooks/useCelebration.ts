import { useCallback } from 'react';
import confetti from 'canvas-confetti';

function playSuccessSound() {
  try {
    const ctx = new AudioContext();
    // Acorde ascendente C5 → E5 → G5 → C6
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const start = ctx.currentTime + i * 0.1;
      const end = start + (i === notes.length - 1 ? 0.35 : 0.18);
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.22, start + 0.02);
      gain.gain.linearRampToValueAtTime(0, end);
      osc.start(start);
      osc.stop(end + 0.05);
    });
  } catch {
    // ignore se o browser não suportar
  }
}

export function useCelebration() {
  const celebrate = useCallback(() => {
    playSuccessSound();

    // Rajada central
    confetti({
      particleCount: 90,
      spread: 65,
      origin: { x: 0.5, y: 0.52 },
      colors: ['#7C3AED', '#06B6D4', '#10B981', '#A78BFA', '#F8FAFC'],
    });

    // Dois canhões laterais com pequeno delay
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 60,
        spread: 50,
        origin: { x: 0, y: 0.6 },
        colors: ['#7C3AED', '#06B6D4', '#A78BFA'],
      });
      confetti({
        particleCount: 40,
        angle: 120,
        spread: 50,
        origin: { x: 1, y: 0.6 },
        colors: ['#10B981', '#06B6D4', '#F8FAFC'],
      });
    }, 150);
  }, []);

  return { celebrate };
}
