import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import AppCard from '../components/AppCard';
import { appsData } from '../data/appsData';


export default function Home() {
  const featuredApps = appsData.slice(0, 2);

  return (
    <div className="container">
      {/* Hero Section */}
      <section style={{ padding: '8rem 0 6rem 0', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }} className="animate-fade-in">
        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
          Crafting Digital <br /> <span className="text-gradient">Experiences</span>
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', marginBottom: '2.5rem', padding: '0 1rem' }}>
          Indie developer crafting clean, practical apps focused on performance and real user needs.
        </p>
        <div className="flex-center" style={{ gap: '1rem', flexWrap: 'wrap' }}>
          <NavLink to="/apps" className="btn btn-primary mobile-w-full">
            View All Apps <ArrowRight size={18} />
          </NavLink>
          <a href="https://play.google.com/store/apps/dev?id=9166037782169864125" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full">
            Play Store Profile <Download size={18} />
          </a>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section style={{ padding: '4rem 0' }} className="animate-fade-in delay-200">
        <div className="flex-between flex-between-mobile-col" style={{ marginBottom: '3rem' }}>
          <h2>Featured Applications</h2>
          <NavLink to="/apps" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
            See All <ArrowRight size={16} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2">
          {featuredApps.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}
