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
    <div className="container animate-fade-in" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SEO
        title="Support SKDev — Donate & Sponsor"
        description="Support indie Android development behind Aniset and Anify via UPI (India) or PayPal (Global)."
        keywords="support skdev, donate indie developer, upi donate satyakiran, paypal skdev, sponsor android developer"
        canonical="/donate"
        image={skdevbanner}
      />

      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--bg-raised)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)',
            }}
          >
            <Heart size={22} />
          </div>
        </div>
        <h1 style={{ marginBottom: '12px', fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}>
          Support indie development
        </h1>
        <p style={{ fontSize: '1rem', maxWidth: '580px', margin: '0 auto', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
          Contributions directly fund Google Play developer licenses, diagnostic infrastructure, and keep development independent and private.
        </p>
      </div>

      {/* Payment Options Section */}
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '28px', fontSize: '1.35rem' }}>
          Payment methods
        </h2>
        <div className="grid grid-cols-2 stagger-grid" style={{ gap: '20px' }}>
          
          {/* UPI Section for Indian Users */}
          <div
            className="app-card responsive-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--bg-raised)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '16px',
                  color: 'var(--accent-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Coffee size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px', fontWeight: 600 }}>
                India (UPI)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.875rem', lineHeight: 1.5 }}>
                Direct zero-fee transfer via Google Pay, PhonePe, Paytm, or BHIM.
              </p>

              {/* QR Code Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                padding: '16px',
                borderRadius: 'var(--radius-lg)',
                margin: '0 auto 20px auto',
                width: '100%',
                maxWidth: '190px'
              }}>
                <div style={{ height: 'auto', margin: '0 auto', maxWidth: '100%', width: '100%' }}>
                  <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value={upiUri}
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '8px', fontSize: '0.7rem', color: '#0b0d14' }} className="font-mono">
                  <QrCode size={12} /> Scan with UPI app
                </div>
              </div>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px', marginTop: 'auto' }}>
              <a
                href={upiUri}
                className="btn btn-primary mobile-w-full"
                style={{ width: '100%' }}
              >
                <Smartphone size={15} /> Open in UPI app
              </a>

              {/* Copy UPI ID Bar */}
              <div style={{
                width: '100%',
                padding: '8px 12px',
                backgroundColor: 'var(--bg-raised)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span className="font-mono tabular-nums" style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                  psatyakiran1@oksbi
                </span>
                <button
                  onClick={handleCopyUPI}
                  className="btn-icon"
                  style={{ width: '30px', height: '30px' }}
                  title="Copy UPI ID"
                  aria-label="Copy UPI ID to clipboard"
                >
                  {copiedUPI ? <CheckCircle2 size={15} style={{ color: 'var(--color-positive)' }} /> : <Copy size={15} />}
                </button>
              </div>
            </div>
          </div>

          {/* PayPal Section for Global Users */}
          <div
            className="app-card responsive-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'var(--bg-raised)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '16px',
                  color: 'var(--text-primary)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CreditCard size={20} />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px', fontWeight: 600 }}>
                Global (PayPal)
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.875rem', lineHeight: 1.5 }}>
                International transfer using PayPal balance, debit, or credit card.
              </p>

              {/* PayPal QR Code Container */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                padding: '16px',
                borderRadius: 'var(--radius-lg)',
                margin: '0 auto 20px auto',
                width: '100%',
                maxWidth: '190px'
              }}>
                <div style={{ height: 'auto', margin: '0 auto', maxWidth: '100%', width: '100%' }}>
                  <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value="https://paypal.me/skdev029"
                    viewBox={`0 0 256 256`}
                  />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '8px', fontSize: '0.7rem', color: '#0b0d14' }} className="font-mono">
                  <QrCode size={12} /> Scan with PayPal
                </div>
              </div>
            </div>

            <div style={{ width: '100%', marginTop: 'auto' }}>
              <a
                href="https://paypal.me/skdev029"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%' }}
              >
                <ExternalLink size={15} /> Open PayPal.me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
