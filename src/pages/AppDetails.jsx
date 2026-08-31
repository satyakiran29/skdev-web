import React from 'react';
import { createPortal } from 'react-dom';
import { useParams, Navigate } from 'react-router-dom';
import { appsData } from '../data/appsData';
import { Download, Star, Quote, Globe, Clock, AlertCircle, CheckCircle2, Ticket, Share2, MessageCircle, QrCode, X, Smartphone, Sparkles, Shield, Send, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import QRCode from 'react-qr-code';

const TwitterIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const LinkedinIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
import SEO from '../components/SEO';
import { useToast } from '../context/ToastContext';

export default function AppDetails() {
  const toast = useToast();
  const [isQrModalOpen, setIsQrModalOpen] = React.useState(false);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = React.useState(null);
  const { id } = useParams();
  const app = appsData.find(a => a.id === id);

  React.useEffect(() => {
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
    applicationCategory: 'MobileApplication',
    operatingSystem: app.requiresAndroid || 'Android',
    url: `https://skdev.psatyakiran.in/apps/${app.id}`,
    ...(app.playStoreLink && app.playStoreLink.toLowerCase() !== 'coming soon'
      ? { downloadUrl: app.playStoreLink }
      : {}),
    ...(avgRating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: avgRating.toFixed(1),
            reviewCount: app.reviews.length,
          },
        }
      : {}),
  };

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
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <SEO
        title={app.name}
        description={app.description.slice(0, 160)}
        canonical={`/apps/${app.id}`}
        image={app.screenshot || app.icon}
        type="website"
        jsonLd={appJsonLd}
      />
      {/* App Header */}
      <div className="glass-panel responsive-panel" style={{ marginBottom: '4rem', display: 'flex', gap: 'clamp(1.5rem, 4vw, 3rem)', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
        <div style={{ flex: '1 1 280px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 1.5rem)', marginBottom: '1.5rem' }}>
            <img src={app.icon} alt={`${app.name} icon`} style={{ width: 'clamp(64px, 10vw, 80px)', height: 'clamp(64px, 10vw, 80px)', borderRadius: '1.25rem', objectFit: 'cover', border: '2px solid var(--border-color)', flexShrink: 0 }} />
            <div>
              <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', margin: 0 }}>{app.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#fbbf24' }}>
                  {avgRating !== null ? (
                    <>
                      <Star size={18} fill="currentColor" />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{avgRating.toFixed(1)}</span>
                      <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>({app.reviews.length} reviews)</span>
                    </>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>No reviews yet</span>
                  )}
                </div>
                {app.requiresAndroid && (
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.35rem', 
                    padding: '0.2rem 0.65rem', 
                    borderRadius: '2rem', 
                    backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                    color: 'var(--accent-primary)', 
                    fontSize: '0.8rem', 
                    fontWeight: 600, 
                    border: '1px solid rgba(56, 189, 248, 0.2)' 
                  }}>
                    <Smartphone size={13} /> {app.requiresAndroid}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)', marginBottom: '2rem', maxWidth: '600px', lineHeight: 1.8 }}>
            {app.description}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {app.playStoreLink && app.playStoreLink.toLowerCase() !== "coming soon" ? (
              <a href={app.playStoreLink} target="_blank" rel="noreferrer" className="btn btn-primary mobile-w-full" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem' }}>
                <Download size={18} /> Get on Google Play
              </a>
            ) : (
              <button disabled className="btn btn-primary mobile-w-full" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem', opacity: 0.7, cursor: 'not-allowed' }}>
                <Clock size={18} /> Coming Soon
              </button>
            )}
            {app.websiteLink && app.websiteLink.toLowerCase() !== "coming soon" ? (
              <a href={app.websiteLink} target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)' }}>
                <Globe size={18} /> Visit Website
              </a>
            ) : (
              <button disabled className="btn btn-secondary mobile-w-full" style={{ padding: '0.875rem 1.75rem', fontSize: '1rem', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)', opacity: 0.7, cursor: 'not-allowed' }}>
                <Clock size={18} /> Website Coming Soon
              </button>
            )}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button onClick={() => setIsQrModalOpen(true)} className="btn-icon btn-secondary" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '0.75rem', cursor: 'pointer' }} title="Show QR Code">
                <QrCode size={18} />
              </button>
              <button onClick={handleShare} className="btn-icon btn-secondary" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-primary)', borderRadius: '0.75rem', cursor: 'pointer' }} title="Native Share">
                <Share2 size={18} />
              </button>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out ' + app.name)}`} target="_blank" rel="noreferrer" className="btn-icon btn-secondary" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border-color)', color: '#1DA1F2', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share on Twitter">
                <TwitterIcon size={18} />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="btn-icon btn-secondary" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border-color)', color: '#0A66C2', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share on LinkedIn">
                <LinkedinIcon size={18} />
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent('Check out ' + app.name + ' ' + window.location.href)}`} target="_blank" rel="noreferrer" className="btn-icon btn-secondary" style={{ padding: '0.75rem', background: 'transparent', border: '1px solid var(--border-color)', color: '#25D366', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share on WhatsApp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        {app.screenshot && (
          <div style={{ flex: '1 1 280px', minWidth: 0, display: 'flex', justifyContent: 'center' }}>
            <img src={app.screenshot} alt={`${app.name} screenshot`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }} />
          </div>
        )}
      </div>

      {/* Key Highlights */}
      {app.highlights && app.highlights.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={24} color="var(--accent-primary)" /> Key Highlights
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {app.highlights.map((h, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  backgroundColor: 'var(--bg-secondary)', 
                  border: '1px solid var(--border-color)', 
                  padding: '0.6rem 1.2rem', 
                  borderRadius: '2rem',
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)'
                }}
              >
                <CheckCircle2 size={16} color="var(--accent-primary)" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Features Section */}
      {app.features && app.features.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Features & Capabilities</h2>
          <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
            {app.features.map((feat, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.75rem' }}>{feat.icon}</span>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>{feat.title}</h3>
                </div>
                {feat.subtitle && (
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                    {feat.subtitle}
                  </p>
                )}
                {feat.points && (
                  <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
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

      {/* Accessibility Service Notice */}
      {app.accessibilityInfo && (
        <div className="glass-panel" style={{ marginBottom: '4rem', padding: '2rem', borderLeft: '4px solid var(--accent-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <Shield size={22} color="var(--accent-primary)" />
            <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>AccessibilityService API Usage</h3>
          </div>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {app.accessibilityInfo}
          </p>
        </div>
      )}

      {/* Important Notice Section for Direct Purchase */}
      {app.directPurchase && (
        <div className="glass-panel responsive-panel" style={{ 
          marginBottom: '4rem', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '3rem 2rem'
        }}>
          {/* subtle accent gradient indicator at top */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)' }} />
          
          <div style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(56, 189, 248, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '1.5rem',
            border: '1px solid rgba(56, 189, 248, 0.25)'
          }}>
            <Sparkles color="var(--accent-primary)" size={32} />
          </div>
          <h2 style={{ fontSize: '1.85rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Direct Purchase (Tax & Fee Removed)</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '680px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            To cut out Google Play Store taxes and fees, get a <strong style={{ color: 'var(--text-primary)' }}>direct redeem code</strong> at a discounted price via UPI or PayPal.
          </p>
          
          {/* One-Click Payment Action Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '650px', marginBottom: '2rem' }}>
            
            {/* India UPI Card */}
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(56, 189, 248, 0.12)', color: 'var(--accent-primary)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  INDIA (UPI)
                </div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {app.directPurchase.inPrice}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Google Pay, PhonePe, Paytm, BHIM
                </p>
              </div>

              <a
                href={`https://t.me/${app.directPurchase.telegramUser || 'skdev1'}?text=${encodeURIComponent(app.directPurchase.upiMessage || `Hi Satya, I'd like to purchase ${app.name} via UPI for ${app.directPurchase.inPrice}. Please share the details!`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontSize: '0.95rem', padding: '0.75rem' }}
              >
                <Send size={16} /> Buy with UPI ({app.directPurchase.inPrice})
              </a>
            </div>

            {/* Global PayPal Card */}
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(34, 197, 94, 0.12)', color: '#22c55e', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                  GLOBAL (PAYPAL)
                </div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  {app.directPurchase.globalPrice}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  International Cards & PayPal Balance
                </p>
              </div>

              <a
                href={`https://t.me/${app.directPurchase.telegramUser || 'skdev1'}?text=${encodeURIComponent(app.directPurchase.paypalMessage || `Hi Satya, I'd like to purchase ${app.name} via PayPal for ${app.directPurchase.globalPrice}. Please share the details!`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontSize: '0.95rem', padding: '0.75rem', borderColor: 'rgba(34, 197, 94, 0.4)', color: '#22c55e' }}
              >
                <Send size={16} /> Buy with PayPal ({app.directPurchase.globalPrice})
              </a>
            </div>
          </div>

          {/* Steps & Verification Info */}
          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '1rem', padding: '1.5rem 2rem', border: '1px solid var(--border-color)', width: '100%', maxWidth: '650px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
              <CheckCircle2 color="#22c55e" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>
                Tap either button above to open a <strong style={{ color: 'var(--text-primary)' }}>pre-filled Telegram message</strong> directly to <strong style={{ color: 'var(--accent-primary)' }}>@{app.directPurchase.telegramUser || 'skdev1'}</strong>.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Ticket color="#ec4899" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>
                After quick payment verification, you will receive an official <strong style={{ color: 'var(--text-primary)' }}>Play Store Redeem Code</strong> for lifetime access.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Screenshots Section */}
      {app.screenshots && app.screenshots.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ margin: 0 }}>Screenshots</h2>
            <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <ZoomIn size={16} color="var(--accent-primary)" /> Click to inspect in fullscreen
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
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(56, 189, 248, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                title="Click to view fullscreen"
              >
                <img 
                  src={img} 
                  alt={`${app.name} preview ${idx + 1}`} 
                  loading="lazy"
                  style={{ height: 'clamp(260px, 45vh, 360px)', width: 'auto', borderRadius: '1rem', border: '1px solid var(--border-color)', display: 'block' }} 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews & Ratings Section */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ marginBottom: '2rem' }}>Ratings & Reviews</h2>
        
        {/* Rating Breakdown Overview Card */}
        <div className="glass-panel responsive-panel" style={{ 
          padding: '2.5rem', 
          marginBottom: '2.5rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Average Rating Score */}
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--border-color)', paddingRight: '1.5rem' }}>
            <div style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
              {avgRating !== null ? avgRating.toFixed(1) : '—'}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.35rem', color: '#fbbf24', marginBottom: '0.75rem' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <Star 
                  key={star} 
                  size={24} 
                  fill={avgRating && star <= Math.round(avgRating) ? '#fbbf24' : 'none'} 
                  color={avgRating && star <= Math.round(avgRating) ? '#fbbf24' : 'var(--border-color)'} 
                />
              ))}
            </div>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
            </p>
          </div>

          {/* Star Distribution Bars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[5, 4, 3, 2, 1].map(stars => {
              const count = ratingCounts[stars] || 0;
              const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
              return (
                <div key={stars} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <span style={{ width: '28px', display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {stars} <Star size={12} fill="#fbbf24" color="#fbbf24" />
                  </span>
                  <div style={{ 
                    flex: 1, 
                    height: '8px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                    borderRadius: '4px', 
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <div style={{ 
                      width: `${percentage}%`, 
                      height: '100%', 
                      background: 'linear-gradient(90deg, #f59e0b, #fbbf24)', 
                      borderRadius: '4px',
                      transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} />
                  </div>
                  <span style={{ width: '32px', textAlign: 'right', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    {count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Call to Action: Review on Play Store */}
          <div style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.25)', 
            border: '1px solid var(--border-color)', 
            borderRadius: '1.25rem', 
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              Share Your Feedback
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              Enjoying {app.name}? Your rating on Google Play helps other users discover the app and supports future updates!
            </p>
            {app.playStoreLink && app.playStoreLink.toLowerCase() !== 'coming soon' ? (
              <a 
                href={app.playStoreLink} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary"
                style={{ justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem' }}
              >
                <Star size={16} fill="currentColor" /> Write a Review on Play Store
              </a>
            ) : (
              <a 
                href="https://t.me/skdev_chat" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                style={{ justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1.25rem' }}
              >
                <MessageCircle size={16} /> Share Feedback in Chat
              </a>
            )}
          </div>
        </div>

        {/* User Reviews Grid */}
        {app.reviews && app.reviews.length > 0 ? (
          <div className="grid grid-cols-2" style={{ gap: '1.5rem' }}>
            {app.reviews.map(review => (
              <div key={review.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                <div className="flex-between" style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '1.05rem', display: 'block' }}>{review.user}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
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
                      <Star key={i} size={15} fill={i < review.rating ? 'currentColor' : 'none'} color={i < review.rating ? 'currentColor' : 'var(--border-color)'} />
                    ))}
                  </div>
                </div>
                <div style={{ position: 'relative', paddingLeft: '1.75rem', marginBottom: review.developerResponse ? '1.25rem' : 0 }}>
                  <Quote size={18} color="var(--text-secondary)" style={{ position: 'absolute', left: 0, top: '0', opacity: 0.3 }} />
                  <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>"{review.comment}"</p>
                </div>

                {/* Developer Response Bubble */}
                {review.developerResponse && (
                  <div style={{
                    marginTop: 'auto',
                    backgroundColor: 'rgba(56, 189, 248, 0.06)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    borderRadius: '1rem',
                    padding: '1rem 1.25rem',
                    fontSize: '0.9rem',
                    lineHeight: 1.5
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.25rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--accent-primary)', fontSize: '0.85rem' }}>
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
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <Star size={36} color="var(--text-secondary)" style={{ opacity: 0.4, marginBottom: '1rem' }} />
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No reviews yet</h3>
            <p style={{ margin: 0 }}>Be the first to leave a review on Google Play after trying out the app!</p>
          </div>
        )}
      </div>
      
      {/* QR Code Modal (Portaled) */}
      {isQrModalOpen && createPortal(
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 999999, padding: '1rem'
        }} onClick={() => setIsQrModalOpen(false)}>
          <div className="glass-panel animate-fade-in" style={{
            padding: '2.5rem', borderRadius: '1.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            position: 'relative', maxWidth: '400px', width: '100%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsQrModalOpen(false)}
              className="btn-icon"
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
            
            <img src={app.icon} alt={app.name} style={{ width: '60px', height: '60px', borderRadius: '1rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-md)' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center' }}>Scan to Download</h3>
            <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '2rem', fontSize: '0.95rem' }}>
              Scan this QR code with your phone's camera to get <strong>{app.name}</strong> instantly.
            </p>
            
            <div style={{ background: '#fff', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
              <QRCode 
                value={app.playStoreLink && app.playStoreLink.toLowerCase() !== 'coming soon' ? app.playStoreLink : window.location.href} 
                size={200}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                viewBox={`0 0 256 256`}
              />
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Fullscreen Screenshot Lightbox Modal (Portaled) */}
      {activeScreenshotIndex !== null && app.screenshots && createPortal(
        <div
          className="animate-fade-in"
          style={{
            position: 'fixed',
            inset: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(3, 7, 18, 0.96)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 999999,
            padding: '1.25rem 1rem',
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
              zIndex: 10,
              padding: '0 0.5rem',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid var(--border-color)',
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                color: 'var(--text-primary)',
                fontSize: '0.925rem',
                fontWeight: 600,
                boxShadow: 'var(--shadow-md)',
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
                padding: '0.6rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                borderRadius: '50%',
                boxShadow: 'var(--shadow-md)',
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
              padding: '1rem 0',
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={activeScreenshotIndex}
              src={app.screenshots[activeScreenshotIndex]}
              alt={`${app.name} preview full ${activeScreenshotIndex + 1}`}
              style={{
                maxWidth: '90vw',
                maxHeight: 'calc(100vh - 180px)',
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
                  left: 'clamp(0.5rem, 3vw, 2.5rem)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid var(--border-color)',
                  padding: '0.85rem',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Previous image (Left arrow)"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
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
                  right: 'clamp(0.5rem, 3vw, 2.5rem)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  border: '1px solid var(--border-color)',
                  padding: '0.85rem',
                  borderRadius: '50%',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-lg)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title="Next image (Right arrow)"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {app.screenshots.length > 1 && (
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.4rem 0.75rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(8px)',
                borderRadius: '9999px',
                border: '1px solid var(--border-color)',
                maxWidth: '90vw',
                overflowX: 'auto',
                zIndex: 10,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {app.screenshots.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  onClick={() => setActiveScreenshotIndex(tIdx)}
                  style={{
                    width: '38px',
                    height: '38px',
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
                    transform: activeScreenshotIndex === tIdx ? 'scale(1.1)' : 'scale(1)',
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
