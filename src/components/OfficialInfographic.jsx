import React from 'react';
import { ShieldAlert, ShieldCheck, AlertTriangle, RefreshCw, Heart, Ban, Info, Sparkles } from 'lucide-react';

export default function OfficialInfographic() {
  return (
    <section className="animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <h2 style={{ fontSize: 'clamp(1.5rem, 4.5vw, 2.5rem)', marginBottom: '0.75rem' }}>
          Why Choose <span className="text-gradient">Official Apps</span>?
        </h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: 'clamp(0.95rem, 3vw, 1.05rem)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          Supporting original creators isn't just about ethics — it directly protects your personal data and ensures the best app experience.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
        gap: 'clamp(1.25rem, 3vw, 2rem)',
        alignItems: 'stretch'
      }}>
        {/* Unofficial / Modded Card */}
        <div className="glass-panel" style={{
          padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '3px solid #ef4444'
        }}>
          {/* Subtle Red background glow */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444',
                flexShrink: 0,
              }}>
                <ShieldAlert size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>Modded APKs & Leaks</h3>
                <span style={{ fontSize: '0.75rem', color: '#f87171', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Risks</span>
              </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', padding: 0 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <AlertTriangle size={17} color="#f87171" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.925rem' }}>Malware & Hidden Trackers</strong>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Modded versions can be repackaged with keyloggers, adware, or background scripts that compromise your device.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Ban size={17} color="#f87171" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.925rem' }}>No Automatic Updates</strong>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    You miss out on weekly packs, newly added widgets, battery optimizations, and crucial bug fixes.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <ShieldAlert size={17} color="#f87171" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.925rem' }}>Security Sandbox Breaches</strong>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Bypassing Google Play verification allows untrusted binaries to execute unauthorized background processes.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '0.875rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            border: '1px solid rgba(239, 68, 68, 0.1)',
            display: 'flex',
            gap: '0.6rem',
            alignItems: 'flex-start'
          }}>
            <Info size={15} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.8rem', color: '#f87171', lineHeight: 1.4 }}>
              Modding takes away resources needed to build, maintain, and pay for backend wallpaper and widget servers.
            </span>
          </div>
        </div>

        {/* Official / Licensed Card */}
        <div className="glass-panel" style={{
          padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderTop: '3px solid #22c55e'
        }}>
          {/* Subtle Green background glow */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22c55e',
                flexShrink: 0,
              }}>
                <ShieldCheck size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', margin: 0 }}>Official Play Store Release</h3>
                <span style={{ fontSize: '0.75rem', color: '#4ade80', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>The Benefits</span>
              </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', padding: 0 }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <ShieldCheck size={17} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.925rem' }}>100% Secure & Play-Protected</strong>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Scanned continuously by Google Play Protect, ensuring zero telemetry scripts, ad injections, or spyware.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <RefreshCw size={17} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.925rem' }}>Automatic Cloud Updates</strong>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Receive instant notifications and silent background updates as soon as new aesthetic assets go live.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Heart size={17} color="#4ade80" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem', fontSize: '0.925rem' }}>Direct Support & Indie Fuel</strong>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Get active 1-on-1 developer support for bugs, and fund the creation of clean, private, ad-free utilities.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div style={{
            marginTop: '2rem',
            padding: '0.875rem',
            borderRadius: '12px',
            backgroundColor: 'rgba(34, 197, 94, 0.05)',
            border: '1px solid rgba(34, 197, 94, 0.1)',
            display: 'flex',
            gap: '0.6rem',
            alignItems: 'flex-start'
          }}>
            <Sparkles size={15} color="#22c55e" style={{ flexShrink: 0, marginTop: '2px' }} />
            <span style={{ fontSize: '0.8rem', color: '#4ade80', lineHeight: 1.4 }}>
              Tip: Direct purchase is available if you want to bypass Play Store fees at a discount!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
