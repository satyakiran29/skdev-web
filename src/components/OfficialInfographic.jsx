import React from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, Ban } from 'lucide-react';

export default function OfficialInfographic() {
  return (
    <section className="animate-fade-in" style={{ padding: '64px 0 32px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '640px', margin: '0 auto 40px auto' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '12px' }}>
          Official vs modified APKs
        </h2>
        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Installing apps through verified channels ensures system integrity, on-device privacy, and direct updates.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
          gap: '20px',
          alignItems: 'stretch',
        }}
      >
        {/* Unofficial / Modded Card */}
        <div
          className="app-card"
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '2px solid var(--color-negative)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-negative-bg)',
                  border: '1px solid var(--color-negative-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-negative)',
                  flexShrink: 0,
                }}
              >
                <ShieldAlert size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0 }}>
                  Repackaged APKs & mirrors
                </h3>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--color-negative)' }}>
                  Security risks
                </span>
              </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <AlertTriangle size={16} style={{ color: 'var(--color-negative)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.9rem', fontWeight: 500 }}>
                    Tampered binaries
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Modded APKs frequently inject ad trackers or modify runtime permissions to access personal data.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Ban size={16} style={{ color: 'var(--color-negative)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.9rem', fontWeight: 500 }}>
                    No update path
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Sideloaded APKs bypass Google Play delivery, missing out on new widgets, bug fixes, and battery optimizations.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ShieldAlert size={16} style={{ color: 'var(--color-negative)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.9rem', fontWeight: 500 }}>
                    Sandbox vulnerabilities
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Unverified APK signatures can expose the application sandbox to background execution exploits.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Apps Card */}
        <div
          className="app-card"
          style={{
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: '2px solid var(--color-positive)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-positive-bg)',
                  border: '1px solid var(--color-positive-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-positive)',
                  flexShrink: 0,
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0 }}>
                  Google Play & official release
                </h3>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--color-positive)' }}>
                  Verified integrity
                </span>
              </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-positive)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.9rem', fontWeight: 500 }}>
                    Play Protect verified
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Cryptographically signed by SKDev and continuously scanned by Google Play Protect against malware.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-positive)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.9rem', fontWeight: 500 }}>
                    Direct delta updates
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Receive continuous updates, widget additions, and Android version compatibility releases automatically.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <ShieldCheck size={16} style={{ color: 'var(--color-positive)', flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '2px', fontSize: '0.9rem', fontWeight: 500 }}>
                    Private and ad-supported
                  </strong>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Zero telemetry permissions on utilities like Milky Launcher, and minimal non-intrusive operations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
