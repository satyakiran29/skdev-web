import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Navigate } from 'react-router-dom';
import { appsData } from '../data/appsData';
import { Download, Star, Quote, Globe, Clock, CheckCircle2, Ticket, Share2, MessageCircle, QrCode, X, Smartphone, Sparkles, Shield, Send, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import QRCode from 'react-qr-code';

const TwitterIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>;
const LinkedinIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
import SEO from '../components/SEO';
import { useToast } from '../context/ToastContext';

export default function AppDetails() {
  const toast = useToast();
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState(null);
  const { id } = useParams();
  const app = appsData.find(a => a.id === id);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeScreenshotIndex === null || !app?.screenshots) return;
      if (e.key === 'Escape') {
        setActiveScreenshotIndex(null);
      } else if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setActiveScreenshotIndex((prev) => (prev === 0 ? app.screenshots.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setActiveScreenshotIndex((prev) => (prev === app.screenshots.length - 1 ? 0 : prev + 1));
      }
    };

    if (activeScreenshotIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeScreenshotIndex, app?.screenshots]);

  if (!app) {
    return <Navigate to="/apps" />;
  }

  // Calculate average rating and distribution
  const totalReviews = app.reviews ? app.reviews.length : 0;
  const avgRating = totalReviews > 0
    ? app.reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews
    : null;

  const ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  if (totalReviews > 0) {
    app.reviews.forEach(r => {
      const rounded = Math.round(r.rating);
      if (ratingCounts[rounded] !== undefined) {
        ratingCounts[rounded]++;
      }
    });
  }

  const appJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: app.name,
    description: app.description,
    applicationCategory: 'PersonalizationApplication',
    operatingSystem: app.requiresAndroid || 'Android 7.0+',
    url: `https://skdev.psatyakiran.in/apps/${app.id}`,
    image: app.screenshot || app.icon,
    author: {
      '@type': 'Person',
      name: 'Satyakiran',
      url: 'https://skdev.psatyakiran.in',
    },
    offers: {
      '@type': 'Offer',
      price: app.id === 'anify' ? '0' : '1.68',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    ...(app.playStoreLink && app.playStoreLink.toLowerCase() !== 'coming soon'
      ? { downloadUrl: app.playStoreLink }
      : {}),
    ...(avgRating
      ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: avgRating.toFixed(1),
          reviewCount: app.reviews.length,
          bestRating: '5',
          worstRating: '1',
        },
      }
      : {}),
  };

  const appKeywords = `${app.name}, ${app.tagline}, ${app.shortDesc || ''}, android personalization, android widgets, skdev`.toLowerCase();

  const handleShare = async () => {
    const shareData = {
      title: app.name,
      text: app.shortDesc || app.description,
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(`Copied ${app.name} link to clipboard!`);
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(`Copied ${app.name} link to clipboard!`);
      }
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) 0' }}>
      <SEO
        title={`${app.name} — ${app.tagline}`}
        description={app.shortDesc || app.description.slice(0, 160)}
        keywords={appKeywords}
        canonical={`/apps/${app.id}`}
        image={app.screenshot || app.icon}
        type="website"
        jsonLd={appJsonLd}
      />

      {/* ── App Header Card ── */}
      <div
        className="glass-panel responsive-panel"
        style={{
          marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          display: 'flex',
          gap: 'clamp(1.5rem, 4vw, 3rem)',
          alignItems: 'center',
          flexWrap: 'wrap-reverse',
        }}
      >
        <div style={{ flex: '1 1 280px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.875rem, 3vw, 1.5rem)', marginBottom: '1.25rem' }}>
            <img
              src={app.icon}
              alt={`${app.name} icon`}
              style={{
                width: 'clamp(60px, 12vw, 84px)',
                height: 'clamp(60px, 12vw, 84px)',
                borderRadius: '1.25rem',
                objectFit: 'cover',
                border: '2px solid rgba(56, 189, 248, 0.3)',
                boxShadow: 'var(--shadow-md)',
                flexShrink: 0,
              }}
            />
            <div style={{ minWidth: 0 }}>
              <h1 style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)', margin: 0, lineHeight: 1.15 }}>
                {app.name}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.4rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#fbbf24' }}>
                  {avgRating !== null ? (
                    <>
                      <Star size={16} fill="currentColor" />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '0.95rem' }}>{avgRating.toFixed(1)}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>({app.reviews.length})</span>
                    </>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>No reviews yet</span>
                  )}
                </div>
                {app.requiresAndroid && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.15rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(56, 189, 248, 0.1)',
                      color: 'var(--accent-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                    }}
                  >
                    <Smartphone size={12} /> {app.requiresAndroid}
                  </span>
                )}
              </div>
            </div>
          </div>

          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: '1.75rem', maxWidth: '640px', lineHeight: 1.7 }}>
            {app.description}
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {app.playStoreLink && app.playStoreLink.toLowerCase() !== "coming soon" ? (
                <a
                  href={app.playStoreLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary mobile-w-full"
                  style={{ padding: '0.85rem 1.65rem', fontSize: '1rem', flex: '1 1 200px' }}
                >
                  <Download size={18} /> Get on Google Play
                </a>
              ) : (
                <button
                  disabled
                  className="btn btn-primary mobile-w-full"
                  style={{ padding: '0.85rem 1.65rem', fontSize: '1rem', opacity: 0.7, cursor: 'not-allowed', flex: '1 1 200px' }}
                >
                  <Clock size={18} /> Coming Soon
                </button>
              )}

              {app.websiteLink && app.websiteLink.toLowerCase() !== "coming soon" ? (
                <a
                  href={app.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary mobile-w-full"
                  style={{ padding: '0.85rem 1.65rem', fontSize: '1rem', flex: '1 1 180px' }}
                >
                  <Globe size={18} /> Visit Website
                </a>
              ) : (
                <button
                  disabled
                  className="btn btn-secondary mobile-w-full"
                  style={{ padding: '0.85rem 1.65rem', fontSize: '1rem', opacity: 0.7, cursor: 'not-allowed', flex: '1 1 180px' }}
                >
                  <Clock size={18} /> Website Soon
                </button>
              )}
            </div>

            {/* Social Share & QR Bar */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={handleShare}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', gap: '0.4rem', minHeight: '38px' }}
                title="Share App"
              >
                <Share2 size={16} color="var(--accent-primary)" />
                <span>Share</span>
              </button>

              <button
                onClick={() => setIsQrModalOpen(true)}
                className="btn-icon btn-secondary"
                style={{ padding: '0.5rem', minHeight: '38px', minWidth: '38px' }}
                title="Show QR Code"
              >
                <QrCode size={16} />
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent('Check out ' + app.name + ' - ' + window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-icon btn-secondary"
                style={{ padding: '0.5rem', color: '#25D366', minHeight: '38px', minWidth: '38px' }}
                title="Share on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out ' + app.name)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-icon btn-secondary"
                style={{ padding: '0.5rem', color: '#1DA1F2', minHeight: '38px', minWidth: '38px' }}
                title="Share on Twitter"
              >
                <TwitterIcon size={16} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-icon btn-secondary"
                style={{ padding: '0.5rem', color: '#0A66C2', minHeight: '38px', minWidth: '38px' }}
                title="Share on LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>

        {app.screenshot && (
          <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
            <img
              src={app.screenshot}
              alt={`${app.name} screenshot`}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '1.25rem',
                boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--border-color)',
              }}
            />
          </div>
        )}
      </div>

      {/* ── Key Highlights ── */}
      {app.highlights && app.highlights.length > 0 && (
        <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <h2 style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(1.35rem, 4vw, 1.85rem)' }}>
            <Sparkles size={22} color="var(--accent-primary)" /> Key Highlights
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {app.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                }}
              >
                <CheckCircle2 size={15} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Detailed Features Section ── */}
      {app.features && app.features.length > 0 && (
        <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.35rem, 4vw, 1.85rem)' }}>Features & Capabilities</h2>
          <div className="grid grid-cols-2" style={{ gap: '1.25rem' }}>
            {app.features.map((feat, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.65rem' }}>{feat.icon}</span>
                  <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{feat.title}</h3>
                </div>
                {feat.subtitle && (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                    {feat.subtitle}
                  </p>
                )}
                {feat.points && (
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {feat.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Accessibility Service Notice ── */}
      {app.accessibilityInfo && (
        <div className="glass-panel" style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)', padding: 'clamp(1.25rem, 3.5vw, 2rem)', borderLeft: '4px solid var(--accent-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
            <Shield size={20} color="var(--accent-primary)" />
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>AccessibilityService API Usage</h3>
          </div>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.65 }}>
            {app.accessibilityInfo}
          </p>
        </div>
      )}

      {/* ── Direct Purchase Section ── */}
      {app.directPurchase && (
        <div
          className="glass-panel responsive-panel"
          style={{
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }} />

          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'rgba(56, 189, 248, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              border: '1px solid rgba(56, 189, 248, 0.25)',
            }}
          >
            <Sparkles color="var(--accent-primary)" size={28} />
          </div>

          <h2 style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Direct Purchase (Tax & Fee Removed)
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6, marginBottom: '2rem' }}>
            To cut out Google Play Store fees, get an official <strong style={{ color: 'var(--text-primary)' }}>Play Store redeem code</strong> at a direct discount via UPI or PayPal.
          </p>

          {/* Payment Action Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
              gap: '1.25rem',
              width: '100%',
              maxWidth: '650px',
              marginBottom: '1.75rem',
            }}
          >
            {/* India UPI Card */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                borderRadius: '1.25rem',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: 'var(--accent-primary)', padding: '0.2rem 0.65rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  INDIA (UPI)
                </div>
                <div style={{ fontSize: 'clamp(1.85rem, 5vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {app.directPurchase.inPrice}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', marginBottom: '1.25rem' }}>
                  Google Pay, PhonePe, Paytm, BHIM
                </p>
              </div>

              <a
                href={`https://t.me/${app.directPurchase.telegramUser || 'skdev1'}?text=${encodeURIComponent(app.directPurchase.upiMessage || `Hi Satya, I'd like to purchase ${app.name} via UPI for ${app.directPurchase.inPrice}. Please share the details!`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', fontSize: '0.925rem', padding: '0.75rem' }}
              >
                <Send size={15} /> Buy with UPI ({app.directPurchase.inPrice})
              </a>
            </div>

            {/* Global PayPal Card */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '1.25rem',
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(34, 197, 94, 0.12)', color: '#22c55e', padding: '0.2rem 0.65rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                  GLOBAL (PAYPAL)
                </div>
                <div style={{ fontSize: 'clamp(1.85rem, 5vw, 2.25rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  {app.directPurchase.globalPrice}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.825rem', marginBottom: '1.25rem' }}>
                  International Cards & PayPal Balance
                </p>
              </div>

              <a
                href={`https://t.me/${app.directPurchase.telegramUser || 'skdev1'}?text=${encodeURIComponent(app.directPurchase.paypalMessage || `Hi Satya, I'd like to purchase ${app.name} via PayPal for ${app.directPurchase.globalPrice}. Please share the details!`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', gap: '0.4rem', fontSize: '0.925rem', padding: '0.75rem', borderColor: 'rgba(34, 197, 94, 0.4)', color: '#22c55e' }}
              >
                <Send size={15} /> Buy with PayPal ({app.directPurchase.globalPrice})
              </a>
            </div>
          </div>

          {/* Steps & Verification Info */}
          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '1rem', padding: 'clamp(1rem, 3vw, 1.5rem)', border: '1px solid var(--border-color)', width: '100%', maxWidth: '650px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <CheckCircle2 color="#22c55e" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                Tap either button above to open a <strong style={{ color: 'var(--text-primary)' }}>pre-filled Telegram message</strong> directly to <strong style={{ color: 'var(--accent-primary)' }}>@{app.directPurchase.telegramUser || 'skdev1'}</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <Ticket color="#ec4899" size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                After quick payment verification, you will receive an official <strong style={{ color: 'var(--text-primary)' }}>Play Store Redeem Code</strong> for lifetime access.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── Screenshots Horizontal Gallery ── */}
      {app.screenshots && app.screenshots.length > 0 && (
        <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.35rem, 4vw, 1.85rem)' }}>Screenshots</h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ZoomIn size={15} color="var(--accent-primary)" /> Tap image to expand
            </span>
          </div>

          <div className="screenshots-container">
            {app.screenshots.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveScreenshotIndex(idx)}
                style={{
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start',
                  cursor: 'zoom-in',
                  position: 'relative',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(56, 189, 248, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                title="Tap to view fullscreen"
              >
                <img
                  src={img}
                  alt={`${app.name} preview ${idx + 1}`}
                  loading="lazy"
                  style={{
                    height: 'clamp(240px, 42vh, 360px)',
                    width: 'auto',
                    borderRadius: '1rem',
                    border: '1px solid var(--border-color)',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Reviews & Ratings Section ── */}
      <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 4rem)' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: 'clamp(1.35rem, 4vw, 1.85rem)' }}>Ratings & Reviews</h2>

        {/* Rating Breakdown Overview Card */}
        <div
          className="glass-panel responsive-panel"
          style={{
            padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
            marginBottom: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2.5rem)',
            alignItems: 'center',
          }}
        >
          {/* Average Rating Score */}
          <div style={{ textAlign: 'center', padding: '0 0.5rem' }}>
            <div style={{ fontSize: 'clamp(3.5rem, 8vw, 4.5rem)', fontWeight: 800, lineHeight: 1, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {avgRating !== null ? avgRating.toFixed(1) : '—'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', color: '#fbbf24', marginBottom: '0.5rem' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <Star
                  key={star}
                  size={20}
                  fill={avgRating && star <= Math.round(avgRating) ? '#fbbf24' : 'none'}
                  color={avgRating && star <= Math.round(avgRating) ? '#fbbf24' : 'var(--border-color)'}
                />
              ))}
            </div>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
            </p>
          </div>

          {/* Star Distribution Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[5, 4, 3, 2, 1].map(stars => {
              const count = ratingCounts[stars] || 0;
              const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
              return (
                <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.85rem' }}>
                  <span style={{ width: '24px', display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {stars} <Star size={11} fill="#fbbf24" color="#fbbf24" />
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '7px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
                        borderRadius: '4px',
                        transition: 'width 0.5s ease',
                      }}
                    />
                  </div>
                  <span style={{ width: '28px', textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                    {count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Call to Action: Review on Play Store */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid var(--border-color)',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
              Share Your Experience
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1rem' }}>
              Enjoying {app.name}? Your feedback helps other users and supports ongoing development!
            </p>
            {app.playStoreLink && app.playStoreLink.toLowerCase() !== 'coming soon' ? (
              <a
                href={app.playStoreLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: 'center', gap: '0.4rem', padding: '0.7rem 1.25rem', fontSize: '0.9rem' }}
              >
                <Star size={15} fill="currentColor" /> Write Play Store Review
              </a>
            ) : (
              <a
                href="https://t.me/skdev_chat"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ justifyContent: 'center', gap: '0.4rem', padding: '0.7rem 1.25rem', fontSize: '0.9rem' }}
              >
                <MessageCircle size={15} /> Feedback in Chat
              </a>
            )}
          </div>
        </div>

        {/* User Reviews Grid */}
        {app.reviews && app.reviews.length > 0 ? (
          <div className="grid grid-cols-2" style={{ gap: '1.25rem' }}>
            {app.reviews.map(review => (
              <div key={review.id} className="glass-panel" style={{ padding: 'clamp(1.25rem, 3.5vw, 1.75rem)', display: 'flex', flexDirection: 'column' }}>
                <div className="flex-between" style={{ marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'var(--accent-primary)', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '1rem', display: 'block' }}>{review.user}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Verified User</span>
                        {review.date && (
                          <>
                            <span style={{ fontSize: '0.75rem', color: 'var(--border-color)' }}>•</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{review.date}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', color: '#fbbf24' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} color={i < review.rating ? 'currentColor' : 'var(--border-color)'} />
                    ))}
                  </div>
                </div>

                <div style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: review.developerResponse ? '1rem' : 0 }}>
                  <Quote size={16} color="var(--text-secondary)" style={{ position: 'absolute', left: 0, top: '2px', opacity: 0.3 }} />
                  <p style={{ margin: 0, fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>"{review.comment}"</p>
                </div>

                {/* Developer Response Bubble */}
                {review.developerResponse && (
                  <div
                    style={{
                      marginTop: 'auto',
                      backgroundColor: 'rgba(56, 189, 248, 0.06)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: '0.875rem',
                      padding: '0.875rem 1rem',
                      fontSize: '0.875rem',
                      lineHeight: 1.5,
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--accent-primary)', fontSize: '0.8rem' }}>
                        💬 Response from {review.developerResponse.author || 'Developer'}
                      </span>
                      {review.developerResponse.date && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                          {review.developerResponse.date}
                        </span>
                      )}
                    </div>
                    <p style={{ margin: 0, color: 'var(--text-primary)', opacity: 0.95 }}>
                      {review.developerResponse.comment}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <Star size={32} color="var(--text-secondary)" style={{ opacity: 0.4, marginBottom: '0.75rem' }} />
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.4rem' }}>No reviews yet</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>Be the first to leave a review on Google Play after trying out the app!</p>
          </div>
        )}
      </div>

      {/* ── QR Code Modal (Portaled) ── */}
      {isQrModalOpen && createPortal(
        <div
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 999999, padding: '1rem',
          }}
          onClick={() => setIsQrModalOpen(false)}
        >
          <div
            className="glass-panel animate-fade-in"
            style={{
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              borderRadius: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              maxWidth: '380px',
              width: '100%',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="btn-icon"
              style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', color: 'var(--text-secondary)', cursor: 'pointer' }}
              aria-label="Close QR Code modal"
            >
              <X size={22} />
            </button>

            <img src={app.icon} alt={app.name} style={{ width: '54px', height: '54px', borderRadius: '0.875rem', marginBottom: '1rem', boxShadow: 'var(--shadow-md)' }} />
            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.4rem', textAlign: 'center' }}>Scan to Download</h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '1.5rem', fontSize: '0.875rem', lineHeight: 1.5 }}>
              Scan this QR code with your camera to open <strong>{app.name}</strong> on your mobile device.
            </p>

            <div style={{ background: '#fff', padding: '1.25rem', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
              <QRCode
                value={app.playStoreLink && app.playStoreLink.toLowerCase() !== 'coming soon' ? app.playStoreLink : window.location.href}
                size={180}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ── Fullscreen Screenshot Lightbox Modal (Portaled) ── */}
      {activeScreenshotIndex !== null && app.screenshots && createPortal(
        <div
          className="animate-fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            height: '100dvh',
            backgroundColor: 'rgba(3, 7, 18, 0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 999999,
            padding: 'max(1rem, env(safe-area-inset-top)) max(0.75rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom)) max(0.75rem, env(safe-area-inset-left))',
            boxSizing: 'border-box',
          }}
          onClick={() => setActiveScreenshotIndex(null)}
        >
          {/* Top Bar Controls */}
          <div
            style={{
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              zIndex: 20,
              padding: '0 0.25rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid var(--border-color)',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              <span>{app.name}</span>
              <span style={{ opacity: 0.4 }}>•</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                {activeScreenshotIndex + 1} / {app.screenshots.length}
              </span>
            </div>

            <button
              onClick={() => setActiveScreenshotIndex(null)}
              className="btn-icon"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid var(--border-color)',
                padding: '0.5rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              title="Close viewer (Esc)"
              aria-label="Close fullscreen screenshot viewer"
            >
              <X size={22} />
            </button>
          </div>

          {/* Main Screenshot Preview */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 0',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={activeScreenshotIndex}
              src={app.screenshots[activeScreenshotIndex]}
              alt={`${app.name} preview full ${activeScreenshotIndex + 1}`}
              style={{
                maxWidth: '92vw',
                maxHeight: 'calc(100dvh - 170px)',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '1.25rem',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(56, 189, 248, 0.25)',
                animation: 'fadeIn 0.2s ease-out',
                userSelect: 'none',
              }}
            />

            {/* Left / Previous Arrow */}
            {app.screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveScreenshotIndex((prev) =>
                    prev === 0 ? app.screenshots.length - 1 : prev - 1
                  );
                }}
                className="btn-icon"
                style={{
                  position: 'absolute',
                  left: 'clamp(0.25rem, 2vw, 1.5rem)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid var(--border-color)',
                  padding: '0.65rem',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 20,
                }}
                title="Previous image"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Right / Next Arrow */}
            {app.screenshots.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveScreenshotIndex((prev) =>
                    prev === app.screenshots.length - 1 ? 0 : prev + 1
                  );
                }}
                className="btn-icon"
                style={{
                  position: 'absolute',
                  right: 'clamp(0.25rem, 2vw, 1.5rem)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid var(--border-color)',
                  padding: '0.65rem',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 20,
                }}
                title="Next image"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {app.screenshots.length > 1 && (
            <div
              className="scroll-pills-container"
              style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.35rem 0.65rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                maxWidth: '92vw',
                overflowX: 'auto',
                zIndex: 20,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {app.screenshots.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  onClick={() => setActiveScreenshotIndex(tIdx)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    padding: 0,
                    border:
                      activeScreenshotIndex === tIdx
                        ? '2px solid var(--accent-primary)'
                        : '1px solid transparent',
                    background: 'transparent',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    opacity: activeScreenshotIndex === tIdx ? 1 : 0.45,
                    transition: 'all 0.2s ease',
                    transform: activeScreenshotIndex === tIdx ? 'scale(1.08)' : 'scale(1)',
                    flexShrink: 0,
                  }}
                  title={`View screenshot ${tIdx + 1}`}
                  aria-label={`Jump to screenshot ${tIdx + 1}`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${tIdx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
