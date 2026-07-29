import React, { useState } from 'react';
import { Heart, Coffee, CreditCard, Copy, CheckCircle2, QrCode } from 'lucide-react';
import QRCode from 'react-qr-code';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';

export default function Donate() {
  const [copiedUPI, setCopiedUPI] = useState(false);

  const upiUri = 'upi://pay?pa=psatyakiran1@oksbi&pn=SKDev&cu=INR';

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText('psatyakiran1@oksbi');
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <SEO
        title="Support My Work"
        description="Love skdev apps? Support the indie developer behind Aniset, Anify, and Gwalls via UPI (India) or PayPal (global)."
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

      {/* Payment Options Section */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.875rem' }}>Payment Methods</h2>
        <div className="grid grid-cols-2" style={{ gap: '2rem' }}>
          {/* UPI Section for Indian Users */}
          <div
            className="glass-panel responsive-panel"
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
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Fast, secure, and zero-fee transfers via Google Pay, PhonePe, Paytm, or any UPI app.
            </p>

            {/* QR Code Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: '1.25rem',
              borderRadius: '1.25rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
              marginBottom: '1.5rem',
              width: '100%',
              maxWidth: '210px'
            }}>
              <div style={{ height: 'auto', margin: '0 auto', maxWidth: '100%', width: '100%' }}>
                <QRCode
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value={upiUri}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem', fontSize: '0.7rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.05em' }}>
                <QrCode size={13} color="#0284c7" /> SCAN WITH ANY UPI APP
              </div>
            </div>

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
            className="glass-panel responsive-panel"
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
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Secure international transactions using your PayPal account or credit/debit card.
            </p>

            {/* PayPal QR Code Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              padding: '1.25rem',
              borderRadius: '1.25rem',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
              marginBottom: '1.5rem',
              width: '100%',
              maxWidth: '210px'
            }}>
              <div style={{ height: 'auto', margin: '0 auto', maxWidth: '100%', width: '100%' }}>
                <QRCode
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  value="https://paypal.me/skdev029"
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.75rem', fontSize: '0.7rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.05em' }}>
                <QrCode size={13} color="#8b5cf6" /> SCAN TO PAY VIA PAYPAL
              </div>
            </div>

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

