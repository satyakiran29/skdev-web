import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AppCard({ app }) {
  return (
    <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {app.screenshot && (
        <img src={app.screenshot} alt={`${app.name} preview`} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }} />
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <img src={app.icon} alt={`${app.name} icon`} style={{ width: '60px', height: '60px', borderRadius: '1rem', objectFit: 'cover', border: '1px solid var(--border-color)' }} />
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{app.name}</h3>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>{app.shortDesc}</p>
        </div>
      </div>
      
      <p style={{ flex: 1, marginBottom: '2rem' }}>
        {app.description}
      </p>
      
      <NavLink to={`/apps/${app.id}`} className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>
        View Details <ArrowRight size={16} />
      </NavLink>
    </div>
  );
}
