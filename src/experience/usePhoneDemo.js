import { useCallback, useState } from 'react';
import { appsData } from '../data/appsData';
import { playSound } from './sound';

export const demoApps = appsData.filter((app) => app.id !== 'gwalls');
export const demoCount = (appId) => appId === 'aniset' ? 3 : appId === 'milky-launcher' ? 2 : (demoApps.find((app) => app.id === appId)?.screenshots?.length || 1);

export default function usePhoneDemo(initialApp = 'anify') {
  const [demo, setDemo] = useState({ appId: initialApp, index: 0, view: 'app' });
  const selectApp = useCallback((appId) => {
    setDemo({ appId, index: 0, view: 'app' });
    playSound('tap');
  }, []);
  const action = useCallback((event) => {
    setDemo((state) => {
      if (event.type === 'select') return { appId: event.appId, index: 0, view: 'app' };
      if (event.type === 'home') return { ...state, view: 'home' };
      if (event.type === 'feature') return { ...state, index: event.index, view: event.index === 1 && state.appId === 'milky-launcher' ? 'drawer' : 'app' };
      if (event.type === 'tap') {
        if (event.y > 0.94) return { ...state, view: 'home' };
        if (state.view === 'home' || state.view === 'drawer') {
          const index = Math.min(2, Math.max(0, Math.floor(event.x * 3)));
          return { appId: demoApps[index].id, index: 0, view: 'app' };
        }
        if (state.appId === 'milky-launcher') return { ...state, view: 'drawer', index: 1 };
        if (state.appId === 'anify' && event.y > 0.35 && event.y < 0.8) {
          const index = event.x < 0.5 ? 1 : 4;
          return { ...state, index, view: 'app' };
        }
      }
      const increment = event.type === 'previous' ? -1 : 1;
      const index = (state.index + increment + demoCount(state.appId)) % demoCount(state.appId);
      return { ...state, index, view: state.appId === 'milky-launcher' && index === 1 ? 'drawer' : 'app' };
    });
    playSound(event.type === 'home' ? 'tap' : 'shift');
  }, []);
  return { demo, selectApp, action, app: demoApps.find((app) => app.id === demo.appId), count: demoCount(demo.appId) };
}
