import React, { useState } from 'react';
import { Send, X } from 'lucide-react';

export default function BirthdaySaleBanner() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return true;
    return !sessionStorage.getItem('skdev_birthday_sale_dismissed_2026');
  });

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('skdev_birthday_sale_dismissed_2026', 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      role="banner"
      aria-label="Birthday Sale Announcement"
      className="glass-panel"
      style={{
        position: 'fixed',
        bottom: 'clamp(1rem, 3vw, 1.5rem)',
        left: 'clamp(0.75rem, 3vw, 1.5rem)',
        right: 'clamp(0.75rem, 3vw, 1.5rem)',
        maxWidth: '780px',
        margin: '0 auto',
        zIndex: 95,
        padding: 'clamp(0.85rem, 2.5vw, 1.1rem) clamp(1rem, 3vw, 1.35rem)',
        borderRadius: '1.25rem',
        background: 'linear-gradient(135deg, rgba(26, 16, 48, 0.94) 0%, rgba(15, 23, 42, 0.96) 60%, rgba(45, 12, 54, 0.94) 100%)',
        border: '1px solid rgba(168, 85, 247, 0.5)',
        boxShadow: '0 16px 40px rgba(0, 0, 0, 0.65), 0 0 30px rgba(168, 85, 247, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'clamp(0.75rem, 2.5vw, 1.5rem)',
        flexWrap: 'wrap',
        backdropFilter: 'blur(20px)',
        animation: 'slideUpBanner 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Decorative top bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '10%',
          right: '10%',
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)',
        }}
      />

      {/* Content info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', minWidth: '220px', flex: '1 1 auto' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.35rem',
            flexShrink: 0,
            boxShadow: '0 0 16px rgba(168, 85, 247, 0.5)',
          }}
        >
          🎂
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                padding: '0.15rem 0.5rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                color: '#fff',
              }}
            >
              29th Sept – 2nd Oct
            </span>
            <strong style={{ fontSize: '0.925rem', color: '#f8fafc', letterSpacing: '-0.01em' }}>
              Owner’s Birthday Sale! 🎉
            </strong>
          </div>

          <p
            style={{
              margin: '0.2rem 0 0 0',
              fontSize: '0.825rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.4,
            }}
          >
            Special deal on <strong style={{ color: '#d8b4fe' }}>Aniset</strong> 💜 — Only{' '}
            <strong style={{ color: '#38bdf8' }}>₹100 (UPI)</strong> /{' '}
            <strong style={{ color: '#22c55e' }}>$1.20 (PayPal)</strong>
          </p>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexShrink: 0 }}>
        <a
          href="https://t.me/skdev1?text=Hi%20Satya%2C%20I'd%20like%20to%20get%20Aniset%20for%20the%20Birthday%20Sale%20via%20UPI%20(%E2%82%B9100)%20or%20PayPal%20(%241.20)!%20%F0%9F%8E%82"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          style={{
            padding: '0.5rem 1rem',
            fontSize: '0.85rem',
            gap: '0.4rem',
            background: 'linear-gradient(135deg, #9333ea, #db2777)',
            borderColor: 'rgba(236, 72, 153, 0.4)',
            boxShadow: '0 4px 15px rgba(168, 85, 247, 0.4)',
          }}
          title="DM on Telegram"
        >
          <Send size={14} />
          <span>DM @skdev1</span>
        </a>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss Birthday Sale announcement"
          style={{
            padding: '0.45rem',
            borderRadius: '50%',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'color 0.2s ease, background 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
