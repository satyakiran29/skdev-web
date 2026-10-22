import { Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ArrowUpRight, LayoutGrid, Smartphone } from 'lucide-react';
import usePhoneDemo, { demoApps } from './usePhoneDemo';
import PhoneControls, { DownloadLink } from './PhoneControls';
import { playSound } from './sound';

const PhoneScene = lazy(() => import('./PhoneScene'));
const ready = () => {};
const features = { anify: [['Overview',0],['Widgets',1],['Wallpapers',4]], 'milky-launcher': [['Home screen',0],['App drawer',1]], aniset: [['Forest',0],['Lavender',1],['Ice',2]] };

export default function SelectedWork({ children }) {
  const [mode, setMode] = useState('playground');
  const controller = usePhoneDemo();
  const { demo, app, selectApp, action } = controller;
  return <section className="studio-work" id="selected-work" aria-labelledby="work-title">
    <div className="studio-section-heading" data-reveal><div><span className="studio-eyebrow">LOOK AROUND. TRY SOMETHING. MAKE IT YOURS.</span><h2 id="work-title">Selected <em>work.</em><sup>(03)</sup></h2></div><div className="work-view-switch" role="group" aria-label="Work presentation"><button type="button" aria-pressed={mode === 'playground'} onClick={() => { setMode('playground'); playSound('tap'); }}><Smartphone size={14} /> Playground</button><button type="button" aria-pressed={mode === 'gallery'} onClick={() => { setMode('gallery'); playSound('tap'); }}><LayoutGrid size={14} /> Gallery</button></div></div>
    {mode === 'gallery' ? children : <div className="work-playground">
      <div className="work-playground__selection"><span className="studio-eyebrow">THREE APPS. THREE DIFFERENT WORLDS.</span><div className="work-selector" role="group" aria-label="Preview a selected project">{demoApps.map((item,index) => <button key={item.id} type="button" className={item.id === demo.appId ? 'is-selected' : ''} aria-pressed={item.id === demo.appId} onClick={() => selectApp(item.id)}><span>0{index + 1}</span><strong>{item.name.replace(/\s*\(.+\)/, '')}</strong><ArrowUpRight size={24} /></button>)}</div>
        <div className="work-playground__description" key={app.id}><p>{app.shortDesc}</p><NavLink to={`/apps/${app.id}`} className="studio-text-link">Behind the project <ArrowUpRight size={17} /></NavLink></div>
        <div className="demo-feature-tabs" role="group" aria-label="Try an app feature">{features[app.id].map(([name,index]) => <button type="button" key={name} aria-pressed={demo.index === index && demo.view !== 'home'} onClick={() => action({ type: 'feature', index })}>{name}</button>)}</div>
        <div className="work-playground__download"><DownloadLink app={app} /><p>A hands-on teaser.<br />Get the full experience on your phone.</p></div>
      </div>
      <div className="work-playground__phone"><span className="work-playground__label">LIVE APP PREVIEW <i /></span><div className="phone-halo" aria-hidden="true" /><Suspense fallback={<div className="scene-loading">Opening the playground…</div>}><PhoneScene demo={demo} onAction={action} onReady={ready} /></Suspense><div className="work-playground__phone-bottom"><PhoneControls controller={controller} showApps={false} /><span>TAP THE SCREEN TO EXPLORE<br />DRAG THE DEVICE TO ROTATE</span></div></div>
    </div>}
    <div className="work-collection-link"><span>MADE WITH CARE. BUILT FOR EVERYDAY LIFE.</span><NavLink to="/apps" className="studio-text-link">The full collection <ArrowUpRight size={17} /></NavLink></div>
  </section>;
}
