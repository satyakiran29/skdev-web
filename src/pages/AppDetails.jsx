import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { appsData } from '../data/appsData';
import { Download, Star, Quote } from 'lucide-react';

export default function AppDetails() {
  const { id } = useParams();
  const app = appsData.find(a => a.id === id);

  if (!app) {
    return <Navigate to="/apps" />;
  }

  // Calculate average rating
  const avgRating = app.reviews.reduce((acc, curr) => acc + curr.rating, 0) / app.reviews.length;

  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      {/* App Header */}
      <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap-reverse' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <img src={app.icon} alt={`${app.name} icon`} style={{ width: '80px', height: '80px', borderRadius: '1.25rem', objectFit: 'cover', border: '2px solid var(--border-color)' }} />
            <div>
              <h1 style={{ fontSize: '3rem', margin: 0 }}>{app.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginTop: '0.5rem' }}>
                <Star size={20} fill="currentColor" />
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{avgRating.toFixed(1)}</span>
                <span style={{ color: 'var(--text-secondary)' }}>({app.reviews.length} reviews)</span>
              </div>
            </div>
          </div>
          
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '600px', lineHeight: 1.8 }}>
            {app.description}
          </p>
          <a href={app.playStoreLink} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
            <Download size={20} /> Get on Google Play
          </a>
        </div>

        {app.screenshot && (
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <img src={app.screenshot} alt={`${app.name} screenshot`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-color)' }} />
          </div>
        )}
      </div>

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
