import React, { useState } from 'react';
import { Heart, Coffee, CreditCard, Copy, CheckCircle2, QrCode, Smartphone, ExternalLink } from 'lucide-react';
import QRCode from 'react-qr-code';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';
import { useToast } from '../context/ToastContext';

export default function Donate() {
  const toast = useToast();
  const [copiedUPI, setCopiedUPI] = useState(false);

  const upiUri = 'upi://pay?pa=psatyakiran1@oksbi&pn=SKDev&cu=INR';

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText('psatyakiran1@oksbi');
      setCopiedUPI(true);
      toast.success('UPI ID copied: psatyakiran1@oksbi');
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy UPI ID.');
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) 0' }}>
      <SEO
        title="Support SKDev — Donate & Sponsor"
        description="Love SKDev apps? Support indie Android development behind Aniset and Anify via UPI (India) or PayPal (Global)."
        keywords="support skdev, donate indie developer, upi donate satyakiran, paypal skdev, sponsor android developer"
        canonical="/donate"
        image={skdevbanner}
      />

      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: '#ec4899' }}>
          <Heart size={48} fill="currentColor" style={{ filter: 'drop-shadow(0 0 12px rgba(236,72,153,0.4))' }} />
        </div>
        <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2rem, 6.5vw, 3.25rem)' }}>
          Support My <span className="text-gradient">Work</span>
        </h1>
        <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.125rem)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
          If you enjoy my apps, setups, and widgets, consider supporting indie development! Contributions directly fund Google Play licenses, cloud servers, and keep projects private and ad-free.
        </p>
      </div>

      {/* Payment Options Section */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)', fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}>
          Payment Methods
        </h2>
        <div className="grid grid-cols-2" style={{ gap: 'clamp(1.25rem, 3vw, 2rem)' }}>
          
          {/* UPI Section for Indian Users */}
          <div
            className="glass-panel responsive-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              borderRadius: '1.5rem',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', marginBottom: '1.25rem', color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <Coffee size={28} />
              </div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', marginBottom: '0.5rem', fontWeight: 700 }}>
                Indian Users (UPI)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Instant zero-fee direct transfer via Google Pay, PhonePe, Paytm, or BHIM.
              </p>

              {/* QR Code Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                padding: '1rem',
                borderRadius: '1.25rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                margin: '0 auto 1.5rem auto',
                width: '100%',
                maxWidth: '200px'
              }}>
                <div style={{ height: 'auto', margin: '0 auto', maxWidth: '100%', width: '100%' }}>
                  <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value={upiUri}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.6rem', fontSize: '0.65rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.05em' }}>
                  <QrCode size={12} color="#0284c7" /> SCAN WITH ANY UPI APP
                </div>
              </div>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: 'auto' }}>
              {/* 1-Tap Mobile UPI Intent Trigger */}
              <a
                href={upiUri}
                className="btn btn-primary mobile-w-full"
                style={{ width: '100%', padding: '0.85rem 1.25rem', fontSize: '0.95rem', gap: '0.45rem' }}
              >
                <Smartphone size={16} /> Open in Any UPI App
              </a>

              {/* Copy UPI ID Bar */}
              <div style={{
                width: '100%',
                padding: '0.65rem 0.875rem',
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderRadius: '0.875rem',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontFamily: 'monospace', fontSize: 'clamp(0.8rem, 3vw, 0.95rem)', color: 'var(--text-primary)', wordBreak: 'break-all' }}>
                  psatyakiran1@oksbi
                </span>
                <button
                  onClick={handleCopyUPI}
                  className="btn-icon"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', minWidth: '34px', minHeight: '34px', padding: '0.35rem' }}
                  title="Copy UPI ID"
                  aria-label="Copy UPI ID to clipboard"
                >
                  {copiedUPI ? <CheckCircle2 size={16} color="#10b981" /> : <Copy size={16} />}
                </button>
              </div>
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
              padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              borderRadius: '1.5rem',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', marginBottom: '1.25rem', color: '#8b5cf6', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <CreditCard size={28} />
              </div>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', marginBottom: '0.5rem', fontWeight: 700 }}>
                Global Users (PayPal)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Secure international transactions using your PayPal balance, debit, or credit card.
              </p>

              {/* PayPal QR Code Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                padding: '1rem',
                borderRadius: '1.25rem',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
                margin: '0 auto 1.5rem auto',
                width: '100%',
                maxWidth: '200px'
              }}>
                <div style={{ height: 'auto', margin: '0 auto', maxWidth: '100%', width: '100%' }}>
                  <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value="https://paypal.me/skdev029"
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.6rem', fontSize: '0.65rem', fontWeight: 800, color: '#0f172a', letterSpacing: '0.05em' }}>
                  <QrCode size={12} color="#8b5cf6" /> SCAN TO PAY VIA PAYPAL
                </div>
              </div>
            </div>

            <div style={{ width: '100%', marginTop: 'auto' }}>
              <a
                href="https://paypal.me/skdev029"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '0.85rem 1.25rem',
                  fontSize: '0.95rem',
                  background: 'linear-gradient(135deg, #003087 0%, #009cde 100%)',
                  boxShadow: '0 4px 14px rgba(0, 48, 135, 0.35)',
                  gap: '0.45rem',
                }}
              >
                <ExternalLink size={16} /> Donate via PayPal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
