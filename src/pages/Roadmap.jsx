import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Compass, 
  Milestone, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Flame, 
  Send, 
  MessageCircle, 
  ArrowRight, 
  Layers, 
  Smartphone, 
  Palette, 
  Lightbulb
} from 'lucide-react';
import SEO from '../components/SEO';
import { useToast } from '../context/ToastContext';
import skdevbanner from '../assets/skdev-banner.webp';
import anifyIcon from '../assets/anify/anifyicon_new.webp';
import anisetIcon from '../assets/Aniset_logo.webp';

export default function Roadmap() {
  const toast = useToast();
  const [selectedYear, setSelectedYear] = useState('All');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'in-progress', 'planned', 'planning'

  const journeyMilestones = [
    {
      year: '2023',
      date: 'Early 2023',
      title: 'The Inception & Gwalls Wallpaper App',
      tag: 'Foundation',
      tagColor: '#38bdf8',
      icon: <Palette size={20} color="#38bdf8" />,
      description: 'Started the indie Android journey with Gwalls — a clean, ad-free wallpaper app focusing on high-resolution curated aesthetics and total user privacy. Set the foundation for mobile UI personalization.',
      status: 'Completed',
    },
    {
      year: '2023',
      date: 'December 2023',
      title: 'Launch of Aniset (Anime KWGT & KLWP Suite)',
      tag: 'Release',
      tagColor: '#ec4899',
      icon: <Sparkles size={20} color="#ec4899" />,
      app: 'Aniset',
      appIcon: anisetIcon,
      appLink: '/apps/aniset',
      description: 'Published Aniset on Google Play — bringing iconic anime aesthetics to KWGT widgets and KLWP dynamic live wallpapers. Introduced deep typography, palette customization, and curated anime art.',
      status: 'Completed',
    },
    {
      year: '2024',
      date: '2024',
      title: 'Aniset Major Updates & Community Growth',
      tag: 'Milestone',
      tagColor: '#a855f7',
      icon: <Layers size={20} color="#a855f7" />,
      app: 'Aniset',
      appIcon: anisetIcon,
      appLink: '/apps/aniset',
      description: 'Expanded Aniset with new widget packs, community-requested anime themes, tablet support, and continuous bug-fixing for seamless integration across all major launchers.',
      status: 'Completed',
    },
    {
      year: '2025',
      date: 'Mid 2025',
      title: 'Developing Anify: The Standalone Widget Revolution',
      tag: 'Innovation',
      tagColor: '#22c55e',
      icon: <Smartphone size={20} color="#22c55e" />,
      description: 'Recognized the barrier of requiring 3rd-party base apps (like KWGT Pro) for casual users. Began architecting Anify — a fully standalone, native widget suite requiring ZERO companion apps.',
      status: 'Completed',
    },
    {
      year: '2026',
      date: 'Early 2026',
      title: 'Anify Official Launch & Focus Lock Integration',
      tag: 'Flagship Release',
      tagColor: '#e11d48',
      icon: <Flame size={20} color="#e11d48" />,
      app: 'Anify',
      appIcon: anifyIcon,
      appLink: '/apps/anify',
      description: 'Launched Anify on Google Play! Packed with ready-to-apply widgets, BlockIt Focus Lock (using Android AccessibilityService API), HD wallpapers, and custom ringtones.',
      status: 'Completed',
    },
    {
      year: '2026',
      date: 'August 2026',
      title: 'Anify v1.1.5: Sticker Studio & Android 16 (API 36)',
      tag: 'Latest Release',
      tagColor: '#22c55e',
      icon: <CheckCircle2 size={20} color="#22c55e" />,
      app: 'Anify',
      appIcon: anifyIcon,
      appLink: '/apps/anify',
      description: 'Rolled out Sticker Studio with Telegram → WhatsApp conversion & 1-tap export, KWGT copyright and widget removal requests, improved Focus Lock UI & controls, automatic crash reports & diagnostics, and updated Android 16 (API 36) target.',
      status: 'Completed',
    }
  ];

  const roadmapItems = [
    {
      id: 1,
      title: 'Anify 1.1.6 — Under Development',
      targetApp: 'Anify',
      category: 'in-progress',
      categoryLabel: '⚡ Under Development',
      categoryColor: '#22c55e',
      priority: 'Active Development',
      description: 'Major upcoming upgrade introducing PC Remote (trackpad & media controls), Dual Screen extension mode, ultra-fast local File Transfer between PC and Android, and refined widget optimizations.',
      eta: 'Under Development',
      progress: 75,
    },
    {
      id: 2,
      title: 'Aniset 2.0 — Active Development',
      targetApp: 'Aniset',
      category: 'in-progress',
      categoryLabel: '⚡ Active Development',
      categoryColor: '#38bdf8',
      priority: 'Active Sprint',
      description: 'A massive next-generation overhaul of the Aniset suite featuring brand-new anime KWGT presets, modernized KLWP dynamic live wallpaper setups, and expanded launcher compatibility.',
      eta: 'In Progress',
      progress: 65,
    },
    {
      id: 3,
      title: 'Aniset Pro — Coming Soon after Aniset 2.0',
      targetApp: 'Aniset Pro',
      category: 'planned',
      categoryLabel: '👑 After Aniset 2.0',
      categoryColor: '#ec4899',
      priority: 'Next Phase Flagship',
      description: 'The ultimate premium edition of Aniset launching immediately following the 2.0 release, packed with exclusive pro anime widgets, dynamic themes, and advanced customization modules.',
      eta: 'After Aniset 2.0',
      progress: 20,
    },
    {
      id: 4,
      title: 'Home Launcher — Planning Stage',
      targetApp: 'Home Launcher',
      category: 'planning',
      categoryLabel: '⏳ In Planning',
      categoryColor: '#f59e0b',
      priority: 'Planning Stage',
      partner: {
        name: '@KBOT09',
        link: 'https://t.me/KBOT09'
      },
      description: 'Android home launcher project in partnership with @KBOT09. Currently in the planning stage with release date unknown.',
      eta: 'Planning Stage',
      progress: 10,
    },
  ];

  const filteredMilestones = selectedYear === 'All' 
    ? journeyMilestones 
    : journeyMilestones.filter(m => m.year === selectedYear);

  const filteredRoadmap = activeTab === 'all'
    ? roadmapItems
    : roadmapItems.filter(item => item.category === activeTab);

  const handleSuggestFeature = () => {
    const telegramUrl = `https://t.me/skdev1?text=${encodeURIComponent("Hi Satya, I have a feature idea for SKDev apps:\n\n[Describe your widget or app idea here]")}`;
    window.open(telegramUrl, '_blank');
    toast.success('Opening Telegram to submit your idea!');
  };

  const roadmapJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'SKDev Developer Journey & Public Roadmap',
    description: 'Chronological timeline of SKDev milestones from 2023 to 2026+ and live public roadmap for upcoming Android personalization features (Anify 1.1.6, Aniset 2.0, Aniset Pro, and Home Launcher).',
    url: 'https://skdev.psatyakiran.in/roadmap',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: roadmapItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        description: item.description,
      })),
    },
  };

  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(1.5rem, 4vw, 3.5rem) 0' }}>
      <SEO
        title="Developer Journey & Public Roadmap"
        description="Explore the evolution of SKDev and track live development sprints for Anify 1.1.6 (PC Remote, Dual Screen, File Transfer), Aniset 2.0, Aniset Pro, and Home Launcher."
        keywords="skdev roadmap, anify 1.1.6, aniset 2.0, aniset pro, home launcher, android indie developer, pc remote android, android widgets development, transparent indie dev"
        canonical="/roadmap"
        image={skdevbanner}
        jsonLd={roadmapJsonLd}
      />

      {/* ── Hero Section ── */}
      <section style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto clamp(2.5rem, 6vw, 4rem) auto' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 0.9rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(56, 189, 248, 0.1)',
          border: '1px solid rgba(56, 189, 248, 0.25)',
          color: 'var(--accent-primary)',
          fontSize: '0.825rem',
          fontWeight: 600,
          marginBottom: '1.25rem',
        }}>
          <Compass size={15} /> Transparent Indie Development
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 6.5vw, 3.5rem)', marginBottom: '1.25rem', lineHeight: 1.15 }}>
          Developer Journey & <br /><span className="text-gradient">Public Roadmap</span>
        </h1>

        <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
          From simple wallpaper experiments to crafting full-featured Android personalization tools — here is how it started, what’s happening right now, and what’s coming next.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button onClick={handleSuggestFeature} className="btn btn-primary" style={{ padding: '0.8rem 1.65rem', flex: '1 1 180px', maxWidth: '240px' }}>
            <Lightbulb size={17} /> Suggest a Feature
          </button>
          <a href="https://t.me/skdev29" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.8rem 1.65rem', flex: '1 1 180px', maxWidth: '240px' }}>
            <Send size={17} /> Join Updates
          </a>
        </div>
      </section>

      {/* ── Section 1: The Public Roadmap ── */}
      <section style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Flame color="#f43f5e" size={22} />
              <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 4.5vw, 2.25rem)' }}>What We're Building</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginTop: '0.35rem' }}>
              <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
                Live sprint progress and planned features for Anify and Aniset.
              </p>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '0.15rem 0.6rem',
                borderRadius: '9999px'
              }}>
                <Clock size={12} /> Updated: September 1, 2026 at 1:00 AM IST
              </span>
            </div>
          </div>

          {/* Filter Tabs (Horizontal scrollable pill container on mobile) */}
          <div className="scroll-pills-container" style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '0.35rem', borderRadius: '1rem', border: '1px solid var(--border-color)', width: '100%', maxWidth: 'max-content' }}>
            {[
              { id: 'all', label: 'All Items' },
              { id: 'in-progress', label: '⚡ Active Sprints' },
              { id: 'planned', label: '👑 Next Phase' },
              { id: 'planning', label: '⏳ In Planning' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="scroll-pill-item"
                style={{
                  padding: '0.45rem 0.95rem',
                  borderRadius: '0.75rem',
                  border: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  backgroundColor: activeTab === tab.id ? 'var(--accent-primary)' : 'transparent',
                  color: activeTab === tab.id ? '#0f172a' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Roadmap Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(1rem, 3vw, 1.5rem)'
        }}>
          {filteredRoadmap.map(item => (
            <div 
              key={item.id}
              className="glass-panel responsive-panel"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${item.categoryColor}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: `${item.categoryColor}20`,
                    color: item.categoryColor,
                    border: `1px solid ${item.categoryColor}40`
                  }}>
                    {item.categoryLabel}
                  </span>

                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
                    App: <strong style={{ color: 'var(--text-primary)' }}>{item.targetApp}</strong>
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.65rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: item.partner ? '0.65rem' : '1.25rem' }}>
                  {item.description}
                </p>

                {item.partner && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>🤝 In Partnership with:</span>
                    <a
                      href={item.partner.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: 'var(--accent-primary)',
                        fontWeight: 600,
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        backgroundColor: 'rgba(56, 189, 248, 0.1)',
                        padding: '0.15rem 0.6rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                      }}
                    >
                      <Send size={12} /> {item.partner.name}
                    </a>
                  </div>
                )}
              </div>

              <div>
                {/* Progress bar */}
                <div style={{ marginBottom: '0.875rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.35rem', fontWeight: 600 }}>
                    <span>Progress</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
                    <div style={{
                      width: `${item.progress}%`,
                      height: '100%',
                      backgroundColor: item.categoryColor,
                      borderRadius: '9999px',
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  <span>Target: <strong style={{ color: 'var(--text-primary)' }}>{item.eta}</strong></span>
                  <span style={{ color: item.categoryColor, fontWeight: 600 }}>{item.priority}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Interactive Developer Journey Timeline ── */}
      <section style={{ marginBottom: 'clamp(3rem, 7vw, 5rem)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Milestone color="var(--accent-primary)" size={22} />
              <h2 style={{ margin: 0, fontSize: 'clamp(1.4rem, 4.5vw, 2.25rem)' }}>The Story & Milestones</h2>
            </div>
            <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.9rem' }}>
              Key milestones achieved in our indie development journey.
            </p>
          </div>

          {/* Year Filter (Horizontal scrollable pill container on mobile) */}
          <div className="scroll-pills-container" style={{ width: '100%', maxWidth: 'max-content' }}>
            {['All', '2023', '2024', '2025', '2026'].map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className="scroll-pill-item"
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '9999px',
                  border: selectedYear === year ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  backgroundColor: selectedYear === year ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  color: selectedYear === year ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredMilestones.map((milestone, idx) => (
            <div
              key={idx}
              className="glass-panel responsive-panel"
              style={{
                display: 'flex',
                gap: 'clamp(0.875rem, 3vw, 1.75rem)',
                alignItems: 'flex-start',
                position: 'relative'
              }}
            >
              {/* Left Badge */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '52px',
                flexShrink: 0
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '0.875rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${milestone.tagColor}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-sm)',
                  marginBottom: '0.35rem'
                }}>
                  {milestone.icon}
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: milestone.tagColor }}>
                  {milestone.year}
                </span>
              </div>

              {/* Main Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                  <span style={{
                    padding: '0.15rem 0.55rem',
                    borderRadius: '2rem',
                    backgroundColor: `${milestone.tagColor}15`,
                    color: milestone.tagColor,
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    border: `1px solid ${milestone.tagColor}30`
                  }}>
                    {milestone.tag}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {milestone.date}
                  </span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                  {milestone.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 0.875rem 0' }}>
                  {milestone.description}
                </p>

                {milestone.app && (
                  <NavLink
                    to={milestone.appLink}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '0.5rem',
                      backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}
                  >
                    {milestone.appIcon && (
                      <img src={milestone.appIcon} alt="" style={{ width: '16px', height: '16px', borderRadius: '4px' }} />
                    )}
                    View {milestone.app} Page <ArrowRight size={13} />
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: Community Input & Suggestion Box ── */}
      <section>
        <div
          className="glass-panel responsive-panel"
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '1.25rem',
            backgroundColor: 'rgba(56, 189, 248, 0.1)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem auto',
            color: 'var(--accent-primary)'
          }}>
            <Lightbulb size={26} />
          </div>

          <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)', marginBottom: '0.75rem' }}>
            Have a Widget or Feature Idea?
          </h2>

          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            SKDev apps evolve directly from user suggestions. If there's a widget style, focus feature, or wallpaper theme you'd love to see, share it directly!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button onClick={handleSuggestFeature} className="btn btn-primary mobile-w-full" style={{ padding: '0.8rem 1.65rem', fontSize: '0.95rem', flex: '1 1 200px', maxWidth: '280px' }}>
              <Send size={16} /> Send via Telegram
            </button>
            <a href="https://t.me/skdev_chat" target="_blank" rel="noreferrer" className="btn btn-secondary mobile-w-full" style={{ padding: '0.8rem 1.65rem', fontSize: '0.95rem', flex: '1 1 200px', maxWidth: '280px' }}>
              <MessageCircle size={16} /> Community Chat
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
