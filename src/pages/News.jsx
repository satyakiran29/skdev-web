import React from 'react';

export default function News() {
  const newsItems = [
    {
      id: 1,
      date: 'April 3, 2026',
      title: 'Welcome to the new SKDev Website!',
      content: 'We are thrilled to launch our newly redesigned website! It features a fresh look, responsive design across all devices, and improved access to all our latest apps and utility tools. Stay tuned for more updates!'
    },
    {
      id: 2,
      date: 'Coming Soon',
      title: 'Aniset Widget Pack Updates',
      content: 'We are actively working on expanding the Aniset widget pack with even more beautifully designed, privacy-focused widgets. Keep an eye out for the next major release!'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Latest <span className="text-gradient">News</span></h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
          Stay up to date with the latest developments, app releases, and announcements from SKDev.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {newsItems.map(item => (
          <article key={item.id} className="glass-panel responsive-panel" style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0 }}>{item.title}</h2>
              <span style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600, padding: '0.25rem 0.75rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '9999px', border: '1px solid var(--border-color)' }}>
                {item.date}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              {item.content}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
