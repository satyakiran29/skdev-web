import { ChevronLeft, ChevronRight, House, ArrowUpRight } from 'lucide-react';
import { demoApps } from './usePhoneDemo';
import { playSound } from './sound';

export function DownloadLink({ app, className = '' }) {
  const upcoming = app.status === 'upcoming';
  return <a className={`studio-button ${className || 'studio-button--dark'} demo-download`} href={upcoming ? app.telegramLink : app.playStoreLink} target="_blank" rel="noreferrer" onClick={() => playSound('tap')}><span className="demo-download__play" aria-hidden="true">{upcoming ? '↗' : '▶'}</span><span><small>{upcoming ? 'RELEASING 19 NOVEMBER' : 'THE FULL EXPERIENCE IS ON ANDROID'}</small>{upcoming ? 'Follow launch' : 'Get on Google Play'}</span><ArrowUpRight size={18} /></a>;
}

export default function PhoneControls({ controller, showApps = true }) {
  const { demo, selectApp, action, count } = controller;
  return <div className="phone-controls">
    {showApps && <div className="phone-controls__apps" role="group" aria-label="Choose an app demo">{demoApps.map((app) => <button type="button" key={app.id} aria-pressed={demo.appId === app.id} onClick={() => selectApp(app.id)}><img src={app.icon} alt="" width="22" height="22" /><span>{app.name.replace(/\s*\(.+\)/, '')}</span></button>)}</div>}
    <div className="phone-controls__navigation"><button type="button" aria-label="Previous demo screen" onClick={() => action({ type: 'previous' })}><ChevronLeft size={16} /></button><button type="button" aria-label="Show phone home" onClick={() => action({ type: 'home' })}><House size={15} /></button><button type="button" aria-label="Next demo screen" onClick={() => action({ type: 'next' })}><ChevronRight size={16} /></button><span aria-live="polite">{demo.view === 'home' ? 'HOME' : `${String(demo.index + 1).padStart(2, '0')} / ${String(count).padStart(2, '0')}`}</span></div>
  </div>;
}
