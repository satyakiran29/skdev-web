import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Mail, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';

const CATEGORIES = ['All', 'Purchasing', 'Apps & Widgets', 'Privacy', 'Support'];

const faqs = [
  /* ── Purchasing ── */
  {
    category: 'Purchasing',
    question: 'How do I purchase apps directly instead of using the Play Store?',
    answer:
      'We offer direct purchases at a discounted rate — via UPI for Indian users or PayPal for global users. Open the specific app\'s detail page on this site, scroll to the "Important Notice" section, and tap the Telegram link to contact us and complete your purchase.',
  },
  {
    category: 'Purchasing',
    question: 'Why is the direct purchase cheaper than the Play Store price?',
    answer:
      'Google Play charges a 15–30% platform fee on every transaction. By purchasing directly, that fee is removed entirely, so you pay less and I receive the same amount. It\'s a win-win.',
  },
  {
    category: 'Purchasing',
    question: 'What payment methods are accepted?',
    answer:
      'For Indian users: any UPI app (Google Pay, PhonePe, Paytm, etc.). For global users: PayPal. If you need another method, reach out on Telegram and we\'ll do our best to accommodate you.',
  },
  {
    category: 'Purchasing',
    question: 'How do I get access after paying directly?',
    answer:
      'After your payment is verified, you will receive a Google Play redeem code via Telegram. Enter this code on the Play Store to unlock the app on your account permanently.',
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
      'Yes! Once purchased, the app is tied to your Google account. You can reinstall it anytime for free on any device logged into the same account. Be sure to back up your KWGT/KLWP presets to restore your setup after a reinstall.',
  },
  {
    category: 'Apps & Widgets',
    question: 'Which launcher / widget app do I need to use Aniset widgets?',
    answer:
      'Aniset widgets require KWGT (for home-screen widgets) or KLWP (for live wallpapers). Both are available on the Play Store. A free version of each app is available, but you\'ll need the Pro unlock to apply custom widget packs.',
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
      'Yes! Anify is now officially live on Google Play. You can download it for free at https://play.google.com/store/apps/details?id=com.skdev.anify. It brings anime-themed widgets, beautiful wallpapers, and more — all in one app!',
  },
  {
    category: 'Apps & Widgets',
    question: 'Does Gwalls require an internet connection?',
    answer:
      'Yes, Gwalls loads wallpapers from a curated online collection, so an internet connection is required to browse and download. Once a wallpaper is set, it lives on your device.',
  },

  /* ── Privacy ── */
  {
    category: 'Privacy',
    question: 'Do your apps collect my personal data?',
    answer:
      'No personally identifiable data is collected. Our customization apps (Aniset, Anify) process everything locally on your device. Third-party SDKs like AdMob may collect anonymized, non-identifiable usage data as described in our Privacy Policy.',
  },
  {
    category: 'Privacy',
    question: 'Are your apps ad-free?',
    answer:
      'Gwalls is completely ad-free. Aniset is a paid app with no ads. Anify is free and may include minimal, non-intrusive ads to support ongoing development. Follow us on Telegram for updates on any future ad-free options.',
  },
  {
    category: 'Privacy',
    question: 'Do you sell user data to third parties?',
    answer:
      'Absolutely not. We do not sell, trade, or share any user data with third parties for marketing purposes. Any analytics collected are solely used to improve the app experience.',
  },

  /* ── Support ── */
  {
    category: 'Support',
    question: 'How can I request a new widget or feature?',
    answer:
      'The best ways to submit feature requests are: (1) join our Telegram community and post your idea, or (2) email us at satyakiran296@gmail.com. Popular requests are regularly considered for future updates.',
  },
  {
    category: 'Support',
    question: 'How do I report a bug?',
    answer:
      'Please send a bug report via Telegram (@skdev1) with: your device model, Android version, app version, and a description of what happened (screenshots help a lot). We aim to respond within 24–48 hours.',
  },
  {
    category: 'Support',
    question: 'I lost access to an app I purchased. Can I recover it?',
    answer:
      'If you purchased via the Play Store, simply visit the app\'s Play Store page while logged into the same Google account — it should show as purchased and allow a free reinstall. If you purchased directly via a redeem code, contact us on Telegram with your payment proof.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

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
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <SEO
        title="FAQ"
        description="Frequently asked questions about skdev apps — purchasing, widgets, privacy, feature requests, and support."
        canonical="/faq"
        jsonLd={faqJsonLd}
      />

      {/* ── Hero ── */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '64px', height: '64px', borderRadius: '50%',
          background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)',
          color: 'var(--accent-primary)', marginBottom: '1.5rem',
        }}>
          <HelpCircle size={28} />
        </div>
        <h1 style={{ marginBottom: '1rem' }}>
          Frequently Asked <span className="text-gradient">Questions</span>
        </h1>
        <p style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-secondary)' }}>
          Have questions? We have answers. Browse by category or scroll through them all.
        </p>

        {/* ── Category pills ── */}
        <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              style={{
                padding: '0.45rem 1.2rem',
                borderRadius: '9999px',
                border: '1px solid',
                fontSize: '0.85rem', fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderColor:     activeCategory === cat ? 'var(--accent-primary)' : 'var(--border-color)',
                backgroundColor: activeCategory === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                color:           activeCategory === cat ? '#fff' : 'var(--text-secondary)',
                transform:       activeCategory === cat ? 'translateY(-1px)' : 'none',
                boxShadow:       activeCategory === cat ? '0 4px 14px rgba(56,189,248,0.25)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Accordion ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '820px', margin: '0 auto' }}>
        {filtered.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: 0,
                overflow: 'hidden',
                cursor: 'pointer',
                border: isOpen ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
                transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                boxShadow: isOpen ? '0 0 0 3px rgba(56,189,248,0.08)' : 'none',
              }}
              onClick={() => toggle(idx)}
            >
              {/* Header */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                gap: '1rem', padding: '1.25rem 1.5rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flex: 1, minWidth: 0 }}>
                  {/* Category dot */}
                  <span style={{
                    flexShrink: 0, width: '8px', height: '8px', borderRadius: '50%',
                    background: isOpen ? 'var(--accent-primary)' : 'var(--border-color)',
                    transition: 'background 0.25s ease',
                  }} />
                  <h3 style={{ fontSize: '1.05rem', margin: 0, fontWeight: 600, lineHeight: 1.4 }}>
                    {faq.question}
                  </h3>
                </div>
                <div style={{
                  flexShrink: 0,
                  width: '28px', height: '28px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%',
                  background: isOpen ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: isOpen ? '#fff' : 'var(--text-secondary)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease, background 0.25s ease, color 0.25s ease',
                }}>
                  <ChevronDown size={15} />
                </div>
              </div>

              {/* Body — CSS grid expand trick */}
              <div style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.35s ease',
              }}>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{
                    padding: '0 1.5rem 1.5rem 3.1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75,
                    fontSize: '0.975rem',
                    borderTop: isOpen ? '1px solid var(--border-color)' : 'none',
                    paddingTop: isOpen ? '1.25rem' : '0',
                    transition: 'border-color 0.25s ease',
                  }}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Still have questions? ── */}
      <div className="glass-panel" style={{
        maxWidth: '820px', margin: '3rem auto 0',
        textAlign: 'center', padding: 'clamp(2rem, 4vw, 3rem)',
        background: 'linear-gradient(135deg, rgba(56,189,248,0.05) 0%, rgba(139,92,246,0.05) 100%)',
        border: '1px solid rgba(56,189,248,0.15)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* subtle top line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--accent-primary), transparent)',
        }} />

        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>
          Still have questions?
        </h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
          Can't find the answer you're looking for? Reach out directly — we usually reply within 24 hours.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://t.me/skdev1"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ gap: '0.5rem' }}
          >
            <MessageCircle size={18} /> Message on Telegram
          </a>
          <a
            href="mailto:satyakiran296@gmail.com"
            className="btn btn-secondary"
            style={{ gap: '0.5rem' }}
          >
            <Mail size={18} /> Send an Email
          </a>
        </div>
      </div>
    </div>
  );
}
