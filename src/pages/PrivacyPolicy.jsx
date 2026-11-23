import React from 'react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="container animate-fade-in" style={{ paddingTop: '48px', paddingBottom: '64px' }}>
      <SEO
        title="Privacy Policy"
        description="Official SKDev Privacy Policy — how user data, permissions, AccessibilityService API, and third-party services are handled across Anify, Aniset, and SKDev apps."
        keywords="skdev privacy policy, anify privacy, aniset privacy, accessibility service android privacy, indie developer data policy"
        canonical="/privacy"
      />
      <div className="app-card responsive-panel" style={{ maxWidth: '820px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '24px', textAlign: 'center', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Privacy Policy
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.925rem' }}>
          <section>
            <p className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Effective Date: {new Date().toLocaleDateString()}
            </p>
            <p>
              At SKDev, privacy is foundational. This Privacy Policy outlines what information is processed when using our applications and how it is handled.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>
              Information Collection and Usage
            </h3>
            <p>
              Our personalization apps (Aniset, Anify, and Milky Launcher) prioritize local on-device operation. Milky Launcher requires zero internet permissions and operates strictly offline.
            </p>
            <p>
              Anify is free and ad-supported; AdMob SDK may collect standard anonymized diagnostic information to deliver relevant ads in accordance with Google Play policies.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>
              AccessibilityService API Policy
            </h3>
            <p>
              Anify utilizes Android's AccessibilityService API strictly to deliver its optional BlockIt focus lock feature. When enabled by the user, it detects when a designated distracting application is foregrounded to display a restriction screen. The AccessibilityService API is never used to collect personal data, monitor keystrokes, or transmit browsing history.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>
              Diagnostic and Crash Logs
            </h3>
            <p>
              When a user voluntarily triggers the "Report Logs" action in Anify, diagnostic error logs are prepared locally for the user to review and send directly via email to satyakiran296@gmail.com for debugging.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>
              Contact
            </h3>
            <p>
              For privacy inquiries or technical clarification: <strong>satyakiran296@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
