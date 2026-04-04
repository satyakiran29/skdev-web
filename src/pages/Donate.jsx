import React from 'react';
import { Heart, Coffee, CreditCard, Copy, CheckCircle2 } from 'lucide-react';

export default function Donate() {
  const [copiedUPI, setCopiedUPI] = React.useState(false);

  const handleCopyUPI = async () => {
    try {
      await navigator.clipboard.writeText('psatyakiran1@oksbi'); // Placeholder UPI ID
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', color: '#ec4899' }}>
          <Heart size={48} fill="currentColor" />
        </div>
        <h1 style={{ marginBottom: '1rem' }}>Support My <span className="text-gradient">Work</span></h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          If you enjoy my apps and widgets, consider buying me a coffee! Your support directly helps me maintain servers, pay developer fees, and continue creating ad-free experiences.
        </p>
      </div>

      <div className="grid grid-cols-2">
        {/* UPI Section for Indian Users */}
        <div className="glass-panel responsive-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: 'rgba(56, 189, 248, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
            <Coffee size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Indian Users (UPI)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Fast, secure, and zero-fee transfers via Google Pay, PhonePe, Paytm, or any UPI app.
          </p>
          
          <div style={{ width: '100%', padding: '1rem', backgroundColor: 'var(--bg-primary)', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
            <span style={{ fontFamily: 'monospace', fontSize: '1.125rem', color: 'var(--text-primary)' }}>psatyakiran1@oksbi</span>
            <button onClick={handleCopyUPI} className="btn-icon" style={{ backgroundColor: 'var(--bg-secondary)' }} title="Copy UPI ID">
              {copiedUPI ? <CheckCircle2 size={18} color="#10b981" /> : <Copy size={18} />}
            </button>
          </div>
        </div>

        {/* PayPal Section for Global Users */}
        <div className="glass-panel responsive-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ padding: '1rem', backgroundColor: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', color: '#8b5cf6' }}>
            <CreditCard size={32} />
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Global Users (PayPal)</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Secure international transactions using your PayPal account or credit/debit card.
          </p>
          
          <a 
            href="https://paypal.me/skdev029" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary" 
            style={{ width: '100%', padding: '1rem', fontSize: '1.125rem', marginTop: 'auto', background: 'linear-gradient(135deg, #003087 0%, #009cde 100%)' }}
          >
            Donate via PayPal
          </a>
        </div>
      </div>
    </div>
  );
}
