import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { appsData } from '../data/appsData';
import { Download, Star, Quote, Globe, Clock, AlertCircle, CheckCircle2, Ticket, Share2 } from 'lucide-react';
import SEO from '../components/SEO';

export default function AppDetails() {
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
    operatingSystem: 'Android',
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
        image={typeof app.icon === 'string' && app.icon.startsWith('http') ? app.icon : undefined}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginTop: '0.5rem' }}>
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
            <button onClick={handleShare} className="btn-icon btn-secondary" style={{ padding: '1rem', height: '100%', background: 'transparent', border: '2px solid var(--border-color)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '0.75rem', cursor: 'pointer' }} title="Share App">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {app.screenshot && (
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src={app.screenshot} alt={`${app.name} screenshot`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }} />
          </div>
        )}
      </div>

      {/* Important Notice Section for Direct Purchase */}
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
    </div>
  );
}
