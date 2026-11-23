import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export default function AppCard({ app }) {
  const avgRating = app.reviews && app.reviews.length > 0
    ? (app.reviews.reduce((acc, curr) => acc + curr.rating, 0) / app.reviews.length).toFixed(1)
    : null;

  return (
    <div
      className="app-card"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <div>
        {app.screenshot && (
          <div className="app-card-thumb" style={{ marginBottom: '16px', overflow: 'hidden', borderRadius: '10px' }}>
            <img
              src={app.screenshot}
              alt={`${app.name} preview`}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: '10px',
                border: '1px solid var(--border-subtle)',
              }}
            />
          </div>
        )}

        {/* App Header Row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
          <img
            src={app.icon}
            alt={`${app.name} icon`}
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '10px',
              objectFit: 'cover',
              border: '1px solid var(--border-subtle)',
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '1.15rem', margin: 0, color: 'var(--text-primary)', fontWeight: 600 }}>
                {app.name}
              </h3>
              {app.requiresAndroid && (
                <span className="tech-badge">
                  {app.requiresAndroid}
                </span>
              )}
              {app.status === 'upcoming' && (
                <span className="tech-badge">
                  <span className="status-dot" /> Releasing {app.releaseDate || '25 Dec'}
                </span>
              )}
              {app.id === 'gwalls' && (
                <span className="tech-badge" style={{ color: 'var(--text-muted)' }}>
                  Discontinued
                </span>
              )}
            </div>

            {app.shortDesc && (
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {app.shortDesc}
              </p>
            )}

            {avgRating && app.status !== 'upcoming' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginTop: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--color-warning)',
                }}
                className="font-mono tabular-nums"
              >
                <Star size={13} fill="currentColor" />
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{avgRating}</span>
                <span style={{ color: 'var(--text-muted)' }}>({app.reviews.length})</span>
              </div>
            )}
          </div>
        </div>

        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
          {app.description}
        </p>
      </div>

      <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
        <NavLink
          to={`/apps/${app.id}`}
          className="btn btn-secondary mobile-w-full"
          style={{
            width: '100%',
            justifyContent: 'space-between',
            fontSize: '0.875rem',
          }}
        >
          <span>View details</span>
          <ArrowRight size={15} className="card-arrow" style={{ color: 'var(--text-muted)' }} />
        </NavLink>
      </div>
    </div>
  );
}
