import skdevLogo from '../assets/skdev-penguin-logo.webp';

export default function BrandMark({ className = '' }) {
  return <span className={`brand-mark ${className}`} aria-hidden="true">
    <img className="brand-mark__layer brand-mark__penguin" src={skdevLogo} alt="" draggable="false" />
    <img className="brand-mark__layer brand-mark__signature" src={skdevLogo} alt="" draggable="false" />
  </span>;
}
