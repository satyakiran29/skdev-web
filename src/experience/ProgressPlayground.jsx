import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, MoveUpRight } from 'lucide-react';
import { demoApps } from './usePhoneDemo';
import { playSound } from './sound';

const preview = [
  { title: 'Anify 1.1.6', targetApp: 'Anify', progress: 75, description: 'PC Remote, Dual Screen, local File Transfer, and the next round of widget refinements.', eta: 'Under development', appIcon: demoApps[0].icon },
  { title: 'Aniset 2.0', targetApp: 'Aniset', progress: 65, description: 'New anime presets, dynamic live wallpaper setups, and expanded launcher compatibility.', eta: 'Active development', appIcon: demoApps[2].icon },
  { title: 'Milky Launcher', targetApp: 'Milky Launcher', progress: 95, description: 'A quiet, native Jetpack Compose launcher. Co-developed with Krishna Vishwakarma.', eta: '19 November 2026', appIcon: demoApps[1].icon },
];

export default function ProgressPlayground({ page = false, items, onSuggest }) {
  const [selected, setSelected] = useState(0);
  const entries = items || preview;
  const active = entries[selected];
  const Heading = page ? 'h1' : 'h2';
  const move = (event) => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--lab-x', `${((event.clientX - rect.left) / rect.width - 0.5) * 9}deg`);
    event.currentTarget.style.setProperty('--lab-y', `${-((event.clientY - rect.top) / rect.height - 0.5) * 7}deg`);
  };
  return <section className={`progress-playground ${page ? 'progress-playground--page' : ''}`} aria-labelledby={page ? 'progress-page-title' : 'progress-title'}>
    <div className="progress-playground__intro"><span className="studio-eyebrow"><i /> THE STUDIO NEVER STANDS STILL</span><Heading id={page ? 'progress-page-title' : 'progress-title'}>Good things<br />are <em>taking shape.</em></Heading><p>A look inside the workbench.<br />Pick a project. See what’s coming.</p><div className="progress-picks" role="group" aria-label="Explore ongoing projects">{entries.map((item,index) => <button type="button" key={item.title} aria-pressed={index === selected} className={index === selected ? 'is-selected' : ''} onClick={() => { setSelected(index); playSound('tap'); }}><span>0{index + 1}</span>{item.targetApp || item.title}<MoveUpRight size={15} /></button>)}</div>{page ? <button className="studio-text-link" type="button" onClick={onSuggest}>Add your idea <ArrowUpRight size={17} /></button> : <NavLink to="/roadmap" className="studio-text-link">Inside the public roadmap <ArrowUpRight size={17} /></NavLink>}</div>
    <div className="progress-lab" onPointerMove={move} onPointerLeave={(event) => { event.currentTarget.style.setProperty('--lab-x','0deg'); event.currentTarget.style.setProperty('--lab-y','0deg'); }}><div className="progress-lab__grid" aria-hidden="true" /><span className="progress-lab__corner">SKDEV / THE WORKBENCH</span><span className="progress-lab__signal"><i /> IN MOTION</span><div className="progress-lab__orbit" aria-hidden="true"><i /><i /><i /></div><div className="progress-artifact" key={active.title}><div className="progress-artifact__top"><span>WORK IN PROGRESS</span><MoveUpRight size={15} /></div><div className="progress-artifact__icon"><img src={active.appIcon || demoApps.find((app) => app.name.startsWith(active.targetApp))?.icon} alt="" width="60" height="60" /><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54" /><circle cx="60" cy="60" r="54" style={{ '--progress-offset': 339.3 * (1 - active.progress / 100) }} /></svg></div><h3>{active.title.replace(/ — .+/, '')}</h3><p>{active.description}</p><div className="progress-artifact__bar" role="progressbar" aria-label={`${active.targetApp} development progress`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={active.progress}><span style={{ transform: `scaleX(${active.progress / 100})` }} /></div><div className="progress-artifact__bottom"><span>{active.eta}</span><strong>{active.progress}%</strong></div></div><span className="progress-lab__foot">FROM THE PUBLIC ROADMAP · ALWAYS EVOLVING</span></div>
  </section>;
}
