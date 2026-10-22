import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { appsData } from '../data/appsData';

const showcaseApps = appsData.filter((app) => app.id !== 'gwalls');

export default function ProductShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  const activeApp = showcaseApps[activeIndex];
  const activeImage = activeApp.previewBanner || activeApp.banner || activeApp.screenshot;

  const selectApp = (index) => {
    setActiveIndex(index);
    setShowHint(false);
  };

  const stepApp = (direction) => {
    const nextIndex = (activeIndex + direction + showcaseApps.length) % showcaseApps.length;
    selectApp(nextIndex);
  };

  return (
    <div
      className="product-showcase"
      role="region"
      aria-label="Featured application previews"
      onPointerEnter={() => setShowHint(false)}
      onFocus={() => setShowHint(false)}
    >
      <div className="product-showcase__frame">
        <NavLink
          className="product-showcase__image-link"
          to={`/apps/${activeApp.id}`}
          aria-label={`Open ${activeApp.name} details`}
        >
          <img
            key={activeApp.id}
            src={activeImage}
            alt={`${activeApp.name} preview`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </NavLink>

        <div className="product-showcase__navigation" role="group" aria-label="Browse app previews">
          <button type="button" aria-label="Previous app preview" onClick={() => stepApp(-1)}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button type="button" aria-label="Next app preview" onClick={() => stepApp(1)}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="product-showcase__caption">
          <img src={activeApp.icon} alt="" width="38" height="38" decoding="async" />
          <span className="product-showcase__caption-title">
            <strong>{activeApp.name}</strong>
            <small>{activeApp.shortDesc}</small>
          </span>
          <span className="product-showcase__caption-index" aria-hidden="true">
            {String(activeIndex + 1).padStart(2, '0')} / {String(showcaseApps.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div
        className="product-showcase__progress"
        role="progressbar"
        aria-label="App preview position"
        aria-valuemin={1}
        aria-valuemax={showcaseApps.length}
        aria-valuenow={activeIndex + 1}
      >
        <span style={{ transform: `scaleX(${(activeIndex + 1) / showcaseApps.length})` }} />
      </div>

      <div className="product-showcase__controls" role="group" aria-label="Choose an app preview">
        {showcaseApps.map((app, index) => (
          <button
            key={app.id}
            type="button"
            aria-pressed={index === activeIndex}
            className={index === activeIndex ? 'is-active' : ''}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            onClick={() => selectApp(index)}
          >
            {app.name.replace(/\s+\(.+\)$/, '')}
          </button>
        ))}
      </div>

      <p className="product-showcase__hint" hidden={!showHint} aria-hidden="true">
        Hover to preview · click to open
      </p>

      <NavLink className="product-showcase__link text-link" to={`/apps/${activeApp.id}`}>
        Explore {activeApp.name} <ArrowUpRight size={16} aria-hidden="true" />
      </NavLink>
    </div>
  );
}
