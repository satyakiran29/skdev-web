import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { appsData } from '../data/appsData';
import { Download, Star, Quote, Globe, Clock, AlertCircle, CheckCircle2, Ticket, Share2, MessageCircle, QrCode, X, Smartphone, Sparkles, Shield } from 'lucide-react';
import QRCode from 'react-qr-code';

const TwitterIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
const LinkedinIcon = ({ size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;
import SEO from '../components/SEO';

export default function AppDetails() {
  const [isQrModalOpen, setIsQrModalOpen] = React.useState(false);
  const { id } = useParams();
  const app = appsData.find(a => a.id === id);

  if (!app) {
    return <Navigate to="/apps" />;
  }

  // Calculate average rating
  const avgRating = app.reviews.length
    ? app.reviews.reduce((acc, curr) => acc + curr.rating, 0) / app.reviews.length
    : null;

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
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
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
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <img src={app.icon} alt={`${app.name} icon`} style={{ width: '80px', height: '80px', borderRadius: '1.25rem', objectFit: 'cover', border: '2px solid var(--border-color)' }} />
            <div>
              <h1 style={{ fontSize: '3rem', margin: 0 }}>{app.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24' }}>
                  {avgRating !== null ? (
                    <>
                      <Star size={20} fill="currentColor" />
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{avgRating.toFixed(1)}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>({app.reviews.length} reviews)</span>
                    </>
                  ) : (
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>No reviews yet</span>
                  )}
                </div>
                {app.requiresAndroid && (
                  <span style={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.35rem', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '2rem', 
                    backgroundColor: 'rgba(56, 189, 248, 0.1)', 
                    color: 'var(--accent-primary)', 
                    fontSize: '0.85rem', 
                    fontWeight: 600, 
                    border: '1px solid rgba(56, 189, 248, 0.2)' 
                  }}>
                    <Smartphone size={14} /> {app.requiresAndroid}
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
            {app.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {app.playStoreLink && app.playStoreLink.toLowerCase() !== "coming soon" ? (
              <a href={app.playStoreLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                <Download size={20} /> Get on Google Play
              </a>
            ) : (
              <button disabled className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', opacity: 0.7, cursor: 'not-allowed' }}>
                <Clock size={20} /> Coming Soon
              </button>
            )}
            {app.websiteLink && app.websiteLink.toLowerCase() !== "coming soon" ? (
              <a href={app.websiteLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)' }}>
                <Globe size={20} /> Visit Website
              </a>
            ) : (
              <button disabled className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)', opacity: 0.7, cursor: 'not-allowed' }}>
                <Clock size={20} /> Website Coming Soon
              </button>
            )}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setIsQrModalOpen(true)} className="btn-icon btn-secondary" style={{ padding: '1rem', height: '100%', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', cursor: 'pointer' }} title="Show QR Code">
                <QrCode size={20} />
              </button>
              <button onClick={handleShare} className="btn-icon btn-secondary" style={{ padding: '1rem', height: '100%', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', cursor: 'pointer' }} title="Native Share">
                <Share2 size={20} />
              </button>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent('Check out ' + app.name)}`} target="_blank" rel="noreferrer" className="btn-icon btn-secondary" style={{ padding: '1rem', height: '100%', background: 'transparent', border: '2px solid var(--border-color)', color: '#1DA1F2', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share on Twitter">
                <TwitterIcon size={20} />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="btn-icon btn-secondary" style={{ padding: '1rem', height: '100%', background: 'transparent', border: '2px solid var(--border-color)', color: '#0A66C2', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share on LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`https://wa.me/?text=${encodeURIComponent('Check out ' + app.name + ' ' + window.location.href)}`} target="_blank" rel="noreferrer" className="btn-icon btn-secondary" style={{ padding: '1rem', height: '100%', background: 'transparent', border: '2px solid var(--border-color)', color: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share on WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {app.screenshot && (
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
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
          overflow: 'hidden'
        }}>
          {/* subtle red gradient indicator at top */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, #ef4444, transparent)' }} />
          
          <div style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '1.5rem',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }}>
            <AlertCircle color="#EF4444" size={32} />
          </div>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Important Notice</h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '700px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Due to refund abuse and Play Store taxes, I've increased the price on the Play Store.<br/>
            To cut out Play Store tax, I'm offering a discounted price for <strong style={{ color: 'var(--text-primary)' }}>direct purchases</strong>.
          </p>
          
          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '1rem', padding: '1.5rem 2rem', border: '1px solid var(--border-color)', width: '100%', maxWidth: '600px', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>Discounted Price (Tax Removed)</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: 'bold' }}>IN</span>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.75rem', fontWeight: 'bold' }}>{app.directPurchase.inPrice}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>for India (UPI)</span>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border-color)', opacity: 0.5 }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ color: '#22c55e', fontWeight: 'bold', fontSize: '1.25rem' }}>$</span>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.75rem', fontWeight: 'bold' }}>{app.directPurchase.globalPrice}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>for Global (PayPal)</span>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '1rem', padding: '1.5rem 2rem', border: '1px solid var(--border-color)', width: '100%', maxWidth: '600px', textAlign: 'left', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
              <CheckCircle2 color="#22c55e" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>After payment verification, you will receive a <strong style={{ color: 'var(--text-primary)' }}>redeem code</strong>.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <Ticket color="#ec4899" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '1rem', lineHeight: 1.5 }}>You can redeem the app on the Play Store using this redeem code.</p>
            </div>
          </div>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            If you're interested in buying, contact me directly on <a href={app.directPurchase.telegramLink} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', fontWeight: 'bold' }}>Telegram</a>.
          </p>
        </div>
      )}

      {/* Screenshots Section */}
      {app.screenshots && app.screenshots.length > 0 && (
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ marginBottom: '2rem' }}>Screenshots</h2>
          <div style={{ 
            display: 'flex', gap: '2rem', overflowX: 'auto', paddingBottom: '1.5rem', 
            scrollSnapType: 'x mandatory', scrollbarWidth: 'thin' 
          }}>
            {app.screenshots.map((img, idx) => (
              <div key={idx} style={{ flex: '0 0 auto', scrollSnapAlign: 'start' }}>
                <img 
                  src={img} 
                  alt={`${app.name} preview ${idx + 1}`} 
                  style={{ height: '350px', width: 'auto', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }} 
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <div>
        <h2 style={{ marginBottom: '2rem' }}>User Reviews</h2>
        <div className="grid grid-cols-2">
          {app.reviews.map(review => (
            <div key={review.id} className="glass-panel" style={{ padding: '2rem' }}>
              <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {review.user.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: '1.125rem' }}>{review.user}</span>
                </div>
                <div style={{ display: 'flex', color: '#fbbf24' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < review.rating ? 'currentColor' : 'none'} color={i < review.rating ? 'currentColor' : 'var(--border-color)'} />
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                <Quote size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: 0, top: '0', opacity: 0.3 }} />
                <p style={{ margin: 0, fontStyle: 'italic', fontSize: '1.125rem', color: 'var(--text-primary)' }}>"{review.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* QR Code Modal */}
      {isQrModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100, padding: '1rem'
        }} onClick={() => setIsQrModalOpen(false)}>
          <div className="glass-panel animate-fade-in" style={{
            padding: '2.5rem', borderRadius: '1.5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            position: 'relative', maxWidth: '400px', width: '100%'
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
        </div>
      )}
    </div>
  );
}
