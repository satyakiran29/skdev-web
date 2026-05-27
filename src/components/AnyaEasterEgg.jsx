import React, { useState, useEffect } from 'react';
import anyaImage from '../assets/anya_chibi_pixel.png';

export default function AnyaEasterEgg({ onClose }) {
  const [position, setPosition] = useState({ bottom: '20px', right: '20px' });
  const [bounce, setBounce] = useState(false);
  const [speakBubble, setSpeakBubble] = useState("Waku Waku! ✨");

  const playRetroSound = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const playTone = (freq, duration, type = 'square', delay = 0) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + duration);
      };
      
      // Cute 8-bit gaming sound (arpeggio)
      playTone(523.25, 0.1, 'square', 0);     // C5
      playTone(659.25, 0.1, 'square', 0.08);  // E5
      playTone(783.99, 0.1, 'square', 0.16);  // G5
      playTone(1046.50, 0.25, 'square', 0.24); // C6
    } catch (e) {
      console.warn("AudioContext initialization blocked or failed:", e);
    }
  };

  useEffect(() => {
    playRetroSound();
  }, []);

  const handleClickAnya = () => {
    playRetroSound();
    setBounce(true);
    setTimeout(() => setBounce(false), 500);

    // Random speech bubble
    const quotes = [
      "Waku Waku! ✨",
      "Anya loves peanuts! 🥜",
      "So cool! 🤩",
      "Chibi powers active! 👾",
      "Retro mode is BEST! 🎮",
      "Mission start! 🕵️‍♂️"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setSpeakBubble(randomQuote);

    // Move to a new random side/corner position occasionally
    const sides = [
      { bottom: '20px', right: '20px' },
      { bottom: '20px', left: '20px' },
      { top: '80px', right: '20px' },
      { top: '80px', left: '20px' }
    ];
    const newPos = sides[Math.floor(Math.random() * sides.length)];
    setPosition(newPos);
  };

  return (
    <div
      style={{
        position: 'fixed',
        ...position,
        zIndex: 99998,
        display: 'flex',
        flexDirection: 'column',
        alignItems: position.right ? 'flex-end' : 'flex-start',
        pointerEvents: 'auto',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      {/* Speech Bubble */}
      <div
        className="retro-bubble"
        style={{
          background: '#000',
          border: '3px solid var(--accent-primary)',
          color: '#fff',
          padding: '8px 12px',
          fontSize: '0.75rem',
          maxWidth: '180px',
          textAlign: 'center',
          marginBottom: '10px',
          position: 'relative',
          boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
          animation: 'fadeIn 0.2s ease-out',
        }}
      >
        {speakBubble}
        {/* Simple retro bubble pointer */}
        <div
          style={{
            position: 'absolute',
            bottom: '-12px',
            right: position.right ? '24px' : 'auto',
            left: position.left ? '24px' : 'auto',
            width: '0',
            height: '0',
            borderWidth: '6px',
            borderStyle: 'solid',
            borderColor: 'var(--accent-primary) transparent transparent transparent',
          }}
        />
      </div>

      {/* Anya Character */}
      <div
        onClick={handleClickAnya}
        style={{
          cursor: 'pointer',
          transform: bounce ? 'scale(1.2) translateY(-10px)' : 'scale(1)',
          transition: 'transform 0.15s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        title="Click me for more Waku Waku!"
      >
        <img
          src={anyaImage}
          alt="Anya Chibi"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain',
            imageRendering: 'pixelated',
            filter: 'drop-shadow(3px 3px 0px rgba(0,0,0,0.4))',
          }}
        />
        
        {/* Exit Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          style={{
            marginTop: '8px',
            padding: '3px 8px',
            background: '#ef4444',
            border: '2px solid #fff',
            color: '#fff',
            fontSize: '0.65rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '2px 2px 0px #000',
          }}
        >
          NORMAL MODE
        </button>
      </div>
    </div>
  );
}
