import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Smartphone, Star } from 'lucide-react';

export default function AppCard({ app }) {
  const avgRating = app.reviews && app.reviews.length > 0
    ? (app.reviews.reduce((acc, curr) => acc + curr.rating, 0) / app.reviews.length).toFixed(1)
    : null;

  return (
    <div
      className="glass-panel"
      style={{
        padding: 'clamp(1.25rem, 3.5vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div>
        {app.screenshot && (
          <div style={{ position: 'relative', marginBottom: '1.25rem', overflow: 'hidden', borderRadius: '1rem' }}>
            <img
              src={app.screenshot}
              alt={`${app.name} preview`}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '1rem',
                border: '1px solid var(--border-color)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>
        )}

        {/* App Header Row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            style={{
              width: 'clamp(52px, 8vw, 64px)',
              height: 'clamp(52px, 8vw, 64px)',
              borderRadius: '1rem',
              objectFit: 'cover',
              border: '1px solid var(--border-color)',
              flexShrink: 0,
              boxShadow: 'var(--shadow-sm)',
            }}
          />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)', margin: 0, color: 'var(--text-primary)' }}>
                {app.name}
              </h3>
              {app.requiresAndroid && (
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.2rem',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    padding: '0.15rem 0.5rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    color: 'var(--accent-primary)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                  }}
                >
                  <Smartphone size={10} /> {app.requiresAndroid}
                </span>
              )}
            </div>

            {app.shortDesc && (
              <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {app.shortDesc}
              </p>
            )}

            {avgRating && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.35rem', color: '#fbbf24', fontSize: '0.8rem' }}>
                <Star size={13} fill="currentColor" />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{avgRating}</span>
                <span style={{ color: 'var(--text-secondary)' }}>({app.reviews.length})</span>
              </div>
            )}
          </div>
        </div>

        <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.925rem', lineHeight: 1.6 }}>
          {app.description}
        </p>
      </div>

      <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <NavLink
          to={`/apps/${app.id}`}
          className="btn btn-secondary mobile-w-full"
          style={{
            justifyContent: 'space-between',
            padding: '0.7rem 1.25rem',
            fontSize: '0.925rem',
          }}
        >
          <span>View App Details</span>
          <ArrowRight size={16} color="var(--accent-primary)" />
        </NavLink>
      </div>
    </div>
  );
}
