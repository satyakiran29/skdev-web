import React, { useState } from 'react';
import { ChevronDown, Share2, Clock, Tag, CheckCheck, Newspaper } from 'lucide-react';
import SEO from '../components/SEO';
import Anify from '../assets/anify/anify_bg.png';
import skdevbanner from '../assets/skdev-banner.png';

const readTime = (text) => `${Math.max(1, Math.ceil(text.split(' ').length / 200))} min read`;



const isRecent = (dateStr) => {
  const d = new Date(dateStr);
  return !isNaN(d) && (Date.now() - d.getTime()) < 30 * 24 * 60 * 60 * 1000;
};

export default function News() {
  const [expandedId,  setExpandedId]  = useState(null);
  const [copied,    setCopied]  = useState(null);
  const [activeTag, setActiveTag] = useState('All');

  const newsItems = [
    {
      id: 1,
      date: 'April 3, 2026',
      tag: 'Launch',
      tagColor: '#38bdf8',
      title: 'Welcome to the new SKDev Website!',
      content: 'We are thrilled to launch our newly redesigned website! It features a fresh look, responsive design across all devices, and improved access to all our latest apps and utility tools. Stay tuned for more updates!',
      image: skdevbanner,
      imageAlt: 'SKDev website launch banner',
    },
    {
      id: 2,
      date: 'Coming Soon',
      tag: 'Update',
      tagColor: '#a78bfa',
      title: 'Anify App - New release on the horizon!',
      content: 'We are actively working on the Anify app which had widgets, wallpapers and more. The upcoming release will include new features, enhanced performance, and a more intuitive user interface. Stay tuned for the official launch date and get ready to experience Anify like never before!',
      image: Anify,
      imageAlt: 'Anify app update banner',
    }
  ];

  const allTags  = ['All', ...new Set(newsItems.map(n => n.tag))];
  const filtered = activeTag === 'All' ? newsItems : newsItems.filter(n => n.tag === activeTag);

  const toggle = (id) => setExpandedId(prev => prev === id ? null : id);

  const handleShare = (e, item) => {
    e.stopPropagation();
    const url = window.location.href;
    if (navigator.share) {
      navigator.share({ title: item.title, text: item.content, url });
    } else {
      navigator.clipboard.writeText(url);
      setCopied(item.id);
      setTimeout(() => setCopied(null), 2000);
    }
  };



  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <SEO
        title="News"
        description="Latest news, app releases, and updates from skdev — stay informed about Anify, Aniset, Gwalls, and more."
        canonical="/news"
      />

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Latest <span className="text-gradient">News</span></h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 1.75rem' }}>
          Stay up to date with the latest developments, app releases, and announcements from SKDev.
        </p>

        {/* ── Tag filter bar ── */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                padding: '0.4rem 1.1rem',
                borderRadius: '9999px',
                border: '1px solid',
                fontSize: '0.82rem', fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderColor:      activeTag === tag ? 'var(--accent-primary)' : 'var(--border-color)',
                backgroundColor:  activeTag === tag ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                color:            activeTag === tag ? '#fff' : 'var(--text-secondary)',
                transform:        activeTag === tag ? 'translateY(-1px)' : 'none',
                boxShadow:        activeTag === tag ? '0 4px 12px rgba(56,189,248,0.25)' : 'none',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Article count ── */}
      <div style={{
        maxWidth: '800px', margin: '0 auto 1.25rem',
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        color: 'var(--text-secondary)', fontSize: '0.85rem',
      }}>
        <Newspaper size={14} />
        {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
        {activeTag !== 'All' && <> in <strong style={{ color: 'var(--text-primary)' }}>{activeTag}</strong></>}
      </div>

      {/* ── News Cards ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-secondary)' }}>
            No articles in this category yet.
          </div>
        )}

        {filtered.map(item => {
          const isOpen = expandedId === item.id;

          return (
            <article
              key={item.id}
              className="glass-panel"
              style={{
                overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
              onClick={() => toggle(item.id)}
            >
              {/* Always-visible header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                gap: '1rem', padding: 'clamp(1.25rem, 3vw, 1.75rem)', flexWrap: 'wrap',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, minWidth: 0 }}>

                  {/* Tag + NEW badge + date + read time */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      color: item.tagColor,
                      backgroundColor: `${item.tagColor}18`,
                      border: `1px solid ${item.tagColor}40`,
                      borderRadius: '9999px',
                      fontSize: '0.72rem', fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                    }}>
                      <Tag size={10} /> {item.tag}
                    </span>

                    {isRecent(item.date) && (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center',
                        background: 'linear-gradient(135deg, #38bdf8, #8b5cf6)',
                        color: '#fff',
                        borderRadius: '9999px',
                        fontSize: '0.65rem', fontWeight: 800,
                        padding: '0.15rem 0.55rem',
                        textTransform: 'uppercase', letterSpacing: '0.08em',
                        boxShadow: '0 2px 8px rgba(56,189,248,0.35)',
                      }}>
                        ✦ New
                      </span>
                    )}

                    <span style={{ color: 'var(--accent-primary)', fontSize: '0.78rem', fontWeight: 600 }}>
                      {item.date}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                      <Clock size={11} /> {readTime(item.content)}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1rem, 3vw, 1.375rem)', margin: 0, lineHeight: 1.3 }}>
                    {item.title}
                  </h2>
                </div>

                {/* Chevron */}
                <div style={{
                  flexShrink: 0, width: '2rem', height: '2rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.35s ease', color: 'var(--accent-primary)',
                }}>
                  <ChevronDown size={16} />
                </div>
              </div>

              {/* Expandable body */}
              <div style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.4s ease',
              }}>
                <div style={{ overflow: 'hidden' }}>

                  {/* Banner Image */}
                  <div style={{ width: '100%', aspectRatio: '16/7', overflow: 'hidden' }}>
                    <img
                      src={item.image} alt={item.imageAlt}
                      style={{
                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                        transform: isOpen ? 'scale(1)' : 'scale(1.05)',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{
                    padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex', flexDirection: 'column', gap: '1.25rem',
                  }}>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, margin: 0 }}>
                      {item.content}
                    </p>

                    {/* Share */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={(e) => handleShare(e, item)}
                        className="btn btn-secondary"
                        style={{ fontSize: '0.85rem', padding: '0.4rem 1rem', gap: '0.4rem' }}
                      >
                        {copied === item.id
                          ? <><CheckCheck size={14} /> Link Copied!</>
                          : <><Share2 size={14} /> Share</>
                        }
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
}
