import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, HelpCircle, Search, Send, X } from 'lucide-react';
import SEO from '../components/SEO';
import skdevbanner from '../assets/skdev-banner.webp';

const CATEGORIES = ['All', 'Purchasing', 'Apps & Widgets', 'Privacy', 'Support'];

const faqs = [
  /* ── Purchasing ── */
  {
    category: 'Purchasing',
    question: 'How do I purchase apps directly instead of using the Play Store?',
    answer:
      'We offer direct purchases at a discounted rate — via UPI for Indian users or PayPal for global users. Open the specific app\'s detail page on this site, scroll to the "Direct Purchase" section, and tap the Telegram link to contact us and complete your purchase.',
  },
  {
    category: 'Purchasing',
    question: 'Why is the direct purchase cheaper than the Play Store price?',
    answer:
      'Google Play charges a 15–30% platform fee on every transaction. By purchasing directly, that fee is removed entirely, so you pay less and I receive the same amount.',
  },
  {
    category: 'Purchasing',
    question: 'What payment methods are accepted?',
    answer:
      'For Indian users: any UPI app (Google Pay, PhonePe, Paytm, BHIM, etc.). For global users: PayPal. If you need another method, reach out on Telegram.',
  },
  {
    category: 'Purchasing',
    question: 'How do I get access after paying directly?',
    answer:
      'After your payment is verified, you will receive an official Google Play redeem code via Telegram. Enter this code on the Play Store to unlock the app on your Google account permanently.',
  },
  {
    category: 'Purchasing',
    question: 'Can I get a refund?',
    answer:
      'Due to the digital nature of redeem codes (which are consumed on use), direct purchases are non-refundable once the code is delivered. For Play Store purchases, Google\'s standard refund policy applies within 48 hours.',
  },

  /* ── Apps & Widgets ── */
  {
    category: 'Apps & Widgets',
    question: 'Are my widgets permanently unlocked after I purchase them?',
    answer:
      'Yes. Once purchased, the app is tied to your Google account. You can reinstall it anytime for free on any device logged into the same account. Be sure to back up your KWGT/KLWP presets to restore your setup after a reinstall.',
  },
  {
    category: 'Apps & Widgets',
    question: 'Which launcher / widget app do I need to use Aniset widgets?',
    answer:
      'Aniset widgets require KWGT (for home-screen widgets) or KLWP (for live wallpapers). Both are available on the Play Store. A free version of each app is available, but you will need the Pro unlock to apply custom widget packs.',
  },
  {
    category: 'Apps & Widgets',
    question: 'The widget is not loading or showing an error. What should I do?',
    answer:
      'First, make sure you have the latest version of both Aniset and KWGT/KLWP installed. Then try: (1) long-pressing the widget → Edit → re-apply it, (2) clearing the KWGT cache in system settings, or (3) restarting your device. If the issue persists, contact us on Telegram with a screenshot.',
  },
  {
    category: 'Apps & Widgets',
    question: 'Is Anify available on the Play Store?',
    answer:
      'Yes. Anify is officially live on Google Play at https://play.google.com/store/apps/details?id=com.skdev.anify. It brings widgets, wallpapers, Sticker Studio, and focus controls in one standalone app.',
  },
  {
    category: 'Apps & Widgets',
    question: 'Which Android versions are supported by Anify?',
    answer:
      'Anify supports Android 7.0 (Nougat) all the way up to Android 16 (API 36), ensuring compatibility across both older and current generation Android devices.',
  },
  {
    category: 'Apps & Widgets',
    question: 'What is Milky Launcher and when will it release?',
    answer:
      'Milky Launcher is an Android home screen launcher built natively with Jetpack Compose by Krishna Vishwakarma (@Spyou) and Satyakiran (skdevs). It features spring-based spatial motion physics tokens, adaptive circle icon masking, 4-tier instant smart search, and modular desktop widgets with 100% on-device privacy (zero internet permissions). It is scheduled to release on Google Play on 25 December 2026. You can explore the website at https://mlweb-skdev29.vercel.app/ and follow updates on Telegram: https://t.me/milkylc',
  },
  {
    category: 'Apps & Widgets',
    question: 'Does Gwalls require an internet connection?',
    answer:
      'Yes, Gwalls loads wallpapers from a curated online collection, so an internet connection is required to browse and download. Note that Gwalls is now discontinued.',
  },

  /* ── Privacy ── */
  {
    category: 'Privacy',
    question: 'Do your apps collect my personal data?',
    answer:
      'No personally identifiable data is collected. Our customization apps process everything locally on your device. Third-party SDKs like AdMob may collect anonymized usage diagnostics as described in our Privacy Policy.',
  },
  {
    category: 'Privacy',
    question: 'Are your apps ad-free?',
    answer:
      'Aniset is a paid app with zero ads. Anify is free to download and is supported by non-intrusive ads. Milky Launcher has zero internet permissions and zero ads.',
  },
  {
    category: 'Privacy',
    question: 'Do you sell user data to third parties?',
    answer:
      'No. We do not sell, trade, or share user data with third parties.',
  },

  /* ── Support ── */
  {
    category: 'Support',
    question: 'How can I request a new widget or feature?',
    answer:
      'The best ways to submit feature requests are: (1) join our Telegram community chat (https://t.me/skdev_chat), or (2) email us at satyakiran296@gmail.com.',
  },
  {
    category: 'Support',
    question: 'How do I report a bug?',
    answer:
      'Please send a bug report via Telegram (@skdev1 or in our chat https://t.me/skdev_chat) with your device model, Android version, app version, and description of the issue.',
  },
  {
    category: 'Support',
    question: 'I lost access to an app I purchased. Can I recover it?',
    answer:
      'If you purchased via the Play Store, visit the app page while logged into the same Google account to reinstall. If you purchased directly via a redeem code, contact us on Telegram with your payment proof.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = faqs.filter(f => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch = f.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const highlightText = (text, query) => {
    if (!query || query.length < 2) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} style={{ backgroundColor: 'var(--accent-muted)', color: 'var(--accent-primary)', borderRadius: '2px', padding: '0 2px' }}>{part}</span>
      ) : (
        part
      )
    );
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const toggle = idx => setOpenIndex(prev => (prev === idx ? null : idx));

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SEO
        title="Frequently Asked Questions (FAQ)"
        description="Frequently asked questions about SKDev Android apps, Anify, Aniset, direct redeem code purchases (UPI / PayPal), widget setup, and privacy."
        keywords="skdev faq, anify help, aniset kwgt setup, android widget redeem codes, upi paypal direct purchase, indie app support"
        canonical="/faq"
        image={skdevbanner}
        jsonLd={faqJsonLd}
      />

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ marginBottom: '14px' }}>
          <span className="tech-badge">
            <HelpCircle size={13} /> Support & Documentation
          </span>
        </div>
        <h1 style={{ marginBottom: '12px', fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1rem', maxWidth: '580px', margin: '0 auto 28px auto', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Questions about app installations, widget setups, direct purchases, and privacy.
        </p>

        {/* Search Bar */}
        <div style={{ position: 'relative', maxWidth: '480px', margin: '0 auto 20px auto' }}>
          <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              height: '42px',
              padding: '0 40px 0 42px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
              backgroundColor: 'var(--bg-card)',
              color: 'var(--text-primary)',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'border-color 140ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="btn-icon"
              style={{ position: 'absolute', right: '6px', top: '50%', transform: 'translateY(-50%)', width: '30px', height: '30px' }}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Category filters */}
        <div className="scroll-pills-container" style={{ justifyContent: 'center', width: '100%', maxWidth: 'max-content', margin: '0 auto' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className="scroll-pill-item"
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid',
                fontSize: '0.825rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 140ms cubic-bezier(0.22, 1, 0.36, 1)',
                whiteSpace: 'nowrap',
                borderColor:     activeCategory === cat ? 'var(--accent-border)' : 'var(--border-subtle)',
                backgroundColor: activeCategory === cat ? 'var(--bg-raised)' : 'var(--bg-card)',
                color:           activeCategory === cat ? 'var(--accent-primary)' : 'var(--text-secondary)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div className="stagger-grid" style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '800px', margin: '0 auto' }}>
        {filtered.length === 0 && (
          <div className="app-card" style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--text-muted)' }}>
            No questions found matching "{searchQuery}".
          </div>
        )}
        {filtered.map((faq, idx) => {
          const isOpen = openIndex === idx || searchQuery.length > 1;
          return (
            <div
              key={idx}
              className="app-card"
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                borderColor: isOpen ? 'var(--accent-border)' : 'var(--border-subtle)',
              }}
              onClick={() => toggle(idx)}
            >
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: 0 }}>
                  <span style={{
                    flexShrink: 0, width: '6px', height: '6px', borderRadius: '50%',
                    backgroundColor: isOpen ? 'var(--accent-primary)' : 'var(--border-subtle)',
                  }} />
                  <h3 style={{ fontSize: '0.95rem', margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
                    {highlightText(faq.question, searchQuery)}
                  </h3>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: '26px', height: '26px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-raised)',
                  color: 'var(--text-muted)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 180ms cubic-bezier(0.22, 1, 0.36, 1)',
                }}>
                  <ChevronDown size={14} />
                </div>
              </div>

              {/* Body */}
              <div style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 200ms cubic-bezier(0.22, 1, 0.36, 1)',
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    padding: '0 20px 18px 36px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    fontSize: '0.875rem',
                    borderTop: isOpen ? '1px solid var(--border-subtle)' : 'none',
                    paddingTop: isOpen ? '14px' : '0',
                  }}>
                    {highlightText(faq.answer, searchQuery)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Still have questions? */}
      <div className="app-card responsive-panel" style={{
        maxWidth: '800px', margin: '48px auto 0',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
          Still have questions?
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px auto' }}>
          Reach out directly via Telegram or email.
        </p>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://t.me/skdev_chat"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ minWidth: '160px' }}
          >
            <MessageCircle size={15} /> Community chat
          </a>
          <a
            href="https://t.me/skdev29"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
            style={{ minWidth: '160px' }}
          >
            <Send size={15} /> Updates channel
          </a>
          <a
            href="mailto:satyakiran296@gmail.com"
            className="btn btn-secondary"
            style={{ minWidth: '160px' }}
          >
            <Mail size={15} /> Send an email
          </a>
        </div>
      </div>
    </div>
  );
}
