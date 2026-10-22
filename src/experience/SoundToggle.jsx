import { useSyncExternalStore } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { getSoundEnabled, playSound, setSoundEnabled, subscribeToSound } from './sound';

export default function SoundToggle() {
  const enabled = useSyncExternalStore(subscribeToSound, getSoundEnabled, () => false);
  const toggle = async () => {
    const active = await setSoundEnabled(!enabled);
    if (active) playSound('tap');
  };
  return (
    <button className={`sound-switch ${enabled ? 'is-on' : ''}`} type="button" onClick={toggle} aria-label={enabled ? 'Mute sound' : 'Enable sound'} aria-pressed={enabled}>
      {enabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
      <span>Sound {enabled ? 'on' : 'off'}</span>
      <span className="sound-switch__bars" aria-hidden="true"><i /><i /><i /><i /></span>
    </button>
  );
}
