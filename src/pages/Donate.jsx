import React, { useState, useRef } from 'react';
import { Heart, Coffee, CreditCard, Copy, CheckCircle2, Sparkles, Gift } from 'lucide-react';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';

const tiers = [
  {
    id: 'peanuts',
    title: 'Peanuts Tier 🥜',
    priceUSD: '$1',
    priceINR: '₹80',
    description: 'Keep the developer fueled and support basic operational costs!',
    icon: Coffee,
    perks: [
      'Supporter badge in community chats',
      'Supporter role in Discord & Telegram',
      'Request custom widgets/wallpapers',
      'Cute thank you email response',
      'Our eternal gratitude ❤️',
    ],
    popular: false,
    color: '#38bdf8',
  },
  {
    id: 'wakuwaku',
    title: 'Waku Waku Tier ✨',
    priceUSD: '$5',
    priceINR: '₹400',
    description: 'Supercharge support and get priority development updates!',
    icon: Sparkles,
    perks: [
      'All previous perks included',
      'Request custom widgets/wallpapers',
      'Access to early beta builds',
      'Direct vote on upcoming app features',
      'Sneak peeks at upcoming widget designs',
      'Access to private support channel',
    ],
    popular: true,
    color: '#8b5cf6',
  },
  {
    id: 'pro',
    title: 'Pro Sponsor 👑',
    priceUSD: '$15',
    priceINR: '₹1200',
    description: 'The ultimate tier to directly influence future projects!',
    icon: Gift,
    perks: [
      'All previous perks included',
      'Request custom widgets/wallpapers',
      'Your name in the app Credits section',
      '1-on-1 setup styling consultation',
      'Direct developer DM access for styling advice',
      'Personal spotlight on our Telegram channel',
    ],
    popular: false,
    color: '#ec4899',
  },
];

export default function Donate() {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);
  const paymentsRef = useRef(null);

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText('psatyakiran1@oksbi');
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleSelectTier = (tier) => {
    setSelectedTier(tier);
    paymentsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <SEO
        title="Support My Work"
        description="Love skdev apps? Support the indie developer behind Aniset, Anify, and Gwalls via UPI (India) or PayPal (global) with creative support tiers."
        canonical="/donate"
        image={skdevbanner}
      />

      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem', color: '#ec4899' }}>
          <Heart size={54} fill="currentColor" style={{ filter: 'drop-shadow(0 0 10px rgba(236,72,153,0.3))' }} />
        </div>
        <h1 style={{ marginBottom: '1.25rem' }}>Support My <span className="text-gradient">Work</span></h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7 }}>
          If you enjoy my apps, setups, and widgets, consider supporting the journey! Your contributions directly fund developer licenses, server hosting, and help keep the apps ad-free.
        </p>
      </div>

      {/* Support Tiers Grid */}
      <div style={{ marginBottom: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '1.875rem' }}>Choose Your Tier</h2>
        <div className="grid grid-cols-3" style={{ gap: '2rem', alignItems: 'stretch' }}>
          {tiers.map((tier) => {
            const TierIcon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`glass-panel ${tier.popular ? 'popular-glow' : ''}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2.25rem 1.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '1.5rem',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div style={{
                    position: 'absolute', top: '16px', right: '16px',
                    background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                    color: '#fff', fontSize: '0.65rem', fontWeight: 800,
                    padding: '0.25rem 0.75rem', borderRadius: '9999px',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    boxShadow: '0 2px 8px rgba(139,92,246,0.3)'
                  }}>
                    Popular
                  </div>
                )}

                {/* Tier Icon */}
                <div style={{
                  alignSelf: 'flex-start',
                  padding: '0.75rem',
                  backgroundColor: `${tier.color}15`,
                  borderRadius: '1rem',
                  color: tier.color,
                  marginBottom: '1.5rem',
                  border: `1px solid ${tier.color}30`
                }}>
                  <TierIcon size={24} />
                </div>

                {/* Tier Header */}
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {tier.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5, minHeight: '42px', marginBottom: '1.5rem' }}>
                  {tier.description}
                </p>

                {/* Price tag */}
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.4rem',
                  borderTop: '1px solid var(--border-color)',
                  borderBottom: '1px solid var(--border-color)',
                  padding: '1rem 0',
                  margin: '0.5rem 0 1.5rem 0'
                }}>
                  <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {tier.priceUSD}
                  </span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    USD / {tier.priceINR} INR
                  </span>
                </div>

                {/* Perks Checklist */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', flex: 1 }}>
                  {tier.perks.map((perk, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} style={{ color: tier.color, flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ lineHeight: 1.4 }}>{perk}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Action */}
                <button
                  onClick={() => handleSelectTier(tier)}
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    backgroundColor: tier.popular ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                    color: tier.popular ? '#fff' : 'var(--text-primary)',
                    border: tier.popular ? 'none' : '1px solid var(--border-color)',
                    boxShadow: tier.popular ? '0 4px 12px rgba(56,189,248,0.25)' : 'none',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    marginTop: 'auto',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    if (tier.popular) e.currentTarget.style.boxShadow = '0 8px 20px rgba(56,189,248,0.45)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    if (tier.popular) e.currentTarget.style.boxShadow = '0 4px 12px rgba(56,189,248,0.25)';
                  }}
                >
                  Choose {tier.title.split(' ')[0]}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Tier Prompt Helper */}
      {selectedTier && (
        <div
          className="glass-panel animate-fade-in"
          style={{
            maxWidth: '650px',
            margin: '0 auto 3rem auto',
            padding: '1.25rem 2rem',
            borderLeft: `4px solid ${selectedTier.color}`,
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Sparkles size={20} style={{ color: selectedTier.color }} />
            <span style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              Selected: <strong style={{ color: selectedTier.color }}>{selectedTier.title}</strong>. Send <strong>{selectedTier.priceUSD}</strong> / <strong>{selectedTier.priceINR}</strong> using the payment options below.
            </span>
          </div>
          <button
            onClick={() => setSelectedTier(null)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '0.85rem'
            }}
          >
            Clear
          </button>
        </div>
      )}

      {/* Payment Options Section */}
      <div ref={paymentsRef} style={{ scrollMarginTop: '120px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.875rem' }}>Payment Methods</h2>
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {/* UPI Section for Indian Users */}
          <div
            className={`glass-panel responsive-panel ${selectedTier ? 'payment-highlight' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2.5rem 2rem',
              borderRadius: '1.5rem'
            }}
          >
            <div style={{ padding: '1rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              <Coffee size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>Indian Users (UPI)</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Fast, secure, and zero-fee transfers via Google Pay, PhonePe, Paytm, or any UPI app.
            </p>

            <div style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: 'var(--bg-primary)',
              borderRadius: '1rem',
              border: '1px solid var(--border-color)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 'auto'
            }}>
              <span style={{ fontFamily: 'monospace', fontSize: '1.125rem', color: 'var(--text-primary)' }}>psatyakiran1@oksbi</span>
              <button
                onClick={handleCopyUPI}
                className="btn-icon"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
                title="Copy UPI ID"
              >
                {copiedUPI ? <CheckCircle2 size={18} color="#10b981" /> : <Copy size={18} />}
              </button>
            </div>
          </div>

          {/* PayPal Section for Global Users */}
          <div
            className={`glass-panel responsive-panel ${selectedTier ? 'payment-highlight' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '2.5rem 2rem',
              borderRadius: '1.5rem'
            }}
          >
            <div style={{ padding: '1rem', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', color: '#8b5cf6' }}>
              <CreditCard size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 700 }}>Global Users (PayPal)</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Secure international transactions using your PayPal account or credit/debit card.
            </p>

            <a
              href="https://paypal.me/skdev029"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.125rem',
                marginTop: 'auto',
                background: 'linear-gradient(135deg, #003087 0%, #009cde 100%)',
                boxShadow: '0 4px 12px rgba(0, 48, 135, 0.25)'
              }}
            >
              Donate via PayPal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
