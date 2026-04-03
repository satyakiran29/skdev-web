import React from 'react';
import { appsData } from '../data/appsData';
import AppCard from '../components/AppCard';

export default function AppsSection() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 0' }}>
      <header style={{ marginBottom: '4rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>My Applications</h1>
        <p>A curated collection of tools, widgets, and platforms meticulously crafted for an unparalleled user experience.</p>
      </header>
      
      <div className="grid grid-cols-2">
        {appsData.map(app => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  );
}
