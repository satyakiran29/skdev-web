import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, Volume2 } from 'lucide-react';
import BrandMark from '../components/BrandMark';

export default function Startup({ ready, exiting, onEnter }) {
  const dialog = useRef(null);
  const soundButton = useRef(null);
  useEffect(() => {
    const previousFocus = document.activeElement;
    const root = document.getElementById('root');
    const previousOverflow = document.body.style.overflow;
    root.inert = true;
    document.body.style.overflow = 'hidden';
    dialog.current.focus();
    return () => {
      root.inert = false;
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected && previousFocus !== document.body) previousFocus.focus();
    };
  }, []);
  useEffect(() => { if (ready) soundButton.current?.focus({ preventScroll: true }); }, [ready]);
  const keyDown = (event) => {
    if (event.key === 'Escape' && !exiting) onEnter(false);
    if (event.key === 'Tab') {
      const controls = [...dialog.current.querySelectorAll('button:not(:disabled)')];
      if (!controls.length) { event.preventDefault(); return; }
      if (event.shiftKey && document.activeElement === controls[0]) {
        event.preventDefault(); controls.at(-1).focus();
      } else if (!event.shiftKey && document.activeElement === controls.at(-1)) {
        event.preventDefault(); controls[0].focus();
      }
    }
  };
  return createPortal(
    <div className={`startup ${exiting ? 'is-exiting' : ''}`} ref={dialog} role="dialog" aria-modal="true" aria-labelledby="startup-title" tabIndex={-1} onKeyDown={keyDown}>
      <div className="startup__top"><span className="startup__brand"><BrandMark className="startup__brand-logo" /><span>SKDEV<sup>®</sup></span></span><span>INDEPENDENT BY DESIGN</span><span>EST. 2023</span></div>
      <div className="startup__orbit" aria-hidden="true"><i /><i /><i /><b /></div>
      <div className="startup__center">
        <p className="studio-eyebrow">A SMALL WORLD OF POSSIBILITIES</p>
        <h2 id="startup-title"><span>Stay</span><em>curious.</em></h2>
        <div className="startup__status" role="status"><span className={ready ? 'is-ready' : ''} />{ready ? 'Your experience is ready.' : 'Bringing the playground to life…'}</div>
        <div className="startup__actions">
          <button ref={soundButton} className="studio-button studio-button--lime" type="button" disabled={!ready || exiting} onClick={() => onEnter(true)}><Volume2 size={16} /> Enter with sound <ArrowUpRight size={18} /></button>
          <button className="startup__quiet" type="button" disabled={exiting} onClick={() => onEnter(false)}>Enter quietly <span>↗</span></button>
        </div>
      </div>
      <div className="startup__bottom"><span>DESIGNED TO BE EXPLORED</span><span className="startup__creator">WEBSITE BY <strong>ARMAN</strong> & <strong>SATYAKIRAN</strong></span><span>ESC TO ENTER QUIETLY</span></div>
    </div>, document.body
  );
}
