import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Pause, Play, RotateCcw, Trophy } from 'lucide-react';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { BOARD_SIZE, DIRECTIONS, createSnakeGame, queueDirection, snakeStepTime, stepSnake } from './snakeEngine';
import { playSound } from './sound';

const BEST_KEY = 'skdev-snake-best';
const KEYS = { ArrowUp: 'up', w: 'up', ArrowRight: 'right', d: 'right', ArrowDown: 'down', s: 'down', ArrowLeft: 'left', a: 'left' };
const offset = (BOARD_SIZE - 1) / 2;

function SnakeScene({ game }) {
  const host = useRef(null);
  const live = useRef({ game, previous: game.body, changed: performance.now() });
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const previous = live.current;
    const moved = previous.game.body !== game.body;
    live.current = { game, previous: moved ? previous.game.body : previous.previous, changed: moved ? performance.now() : previous.changed };
  }, [game]);

  useEffect(() => {
    const element = host.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' }); }
    catch { setFallback(true); return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.domElement.setAttribute('aria-hidden', 'true');
    element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(37, 1, 0.1, 100);
    camera.position.set(0, 19.5, 17.5); camera.lookAt(0, 0, 0);
    const light = new THREE.DirectionalLight('#ffffff', 4.2);
    light.position.set(-6, 15, 8); light.castShadow = true;
    light.shadow.mapSize.set(1024, 1024);
    Object.assign(light.shadow.camera, { left: -11, right: 11, top: 11, bottom: -11, near: 1, far: 40 });
    light.shadow.camera.updateProjectionMatrix();
    light.shadow.normalBias = 0.04;
    const fill = new THREE.DirectionalLight('#c6b5f7', 2.3); fill.position.set(6, 6, -5);
    scene.add(light, fill, new THREE.AmbientLight('#ffffff', 1.7));

    const board = new THREE.Mesh(new RoundedBoxGeometry(14.8, 0.5, 14.8, 3, 0.22), new THREE.MeshStandardMaterial({ color: '#303d31', roughness: 0.7 }));
    board.position.y = -0.28; board.receiveShadow = true; scene.add(board);
    const grid = new THREE.GridHelper(14, 14, '#75886a', '#576d50');
    grid.position.y = -0.015; grid.material.transparent = true; grid.material.opacity = 0.5; scene.add(grid);
    const railGeometry = new RoundedBoxGeometry(14.5, 0.16, 0.14, 2, 0.06);
    const railMaterial = new THREE.MeshStandardMaterial({ color: '#8caa72', roughness: 0.5 });
    for (let index = 0; index < 4; index++) {
      const rail = new THREE.Mesh(railGeometry, railMaterial);
      if (index < 2) rail.position.set(0, 0.025, index ? 7.16 : -7.16);
      else { rail.rotation.y = Math.PI / 2; rail.position.set(index === 2 ? -7.16 : 7.16, 0.025, 0); }
      scene.add(rail);
    }
    const segmentGeometry = new RoundedBoxGeometry(0.84, 0.72, 0.84, 3, 0.2);
    const headMaterial = new THREE.MeshStandardMaterial({ color: '#e7ffa5', roughness: 0.32, metalness: 0.08 });
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: '#b9e57d', roughness: 0.4, metalness: 0.08 });
    const segments = Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
      const group = new THREE.Group();
      const mesh = new THREE.Mesh(segmentGeometry, index === 0 ? headMaterial : bodyMaterial);
      mesh.castShadow = true; group.add(mesh); group.visible = false; scene.add(group); return group;
    });
    const eyeGeometry = new THREE.SphereGeometry(0.12, 12, 8), pupilGeometry = new THREE.SphereGeometry(0.06, 10, 8);
    const eyeMaterial = new THREE.MeshStandardMaterial({ color: '#ffffff' }), pupilMaterial = new THREE.MeshStandardMaterial({ color: '#20261d' });
    [-1, 1].forEach((side) => {
      const eye = new THREE.Mesh(eyeGeometry, eyeMaterial); eye.position.set(0.24, 0.36, 0.22 * side);
      const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial); pupil.position.set(0.29, 0.435, 0.22 * side);
      segments[0].add(eye, pupil);
    });
    const food = new THREE.Group();
    const fruit = new THREE.Mesh(new THREE.IcosahedronGeometry(0.44, 1), new THREE.MeshStandardMaterial({ color: '#c5afff', roughness: 0.3, metalness: 0.2, emissive: '#7058ba', emissiveIntensity: 0.3 }));
    fruit.castShadow = true; food.add(fruit);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.64, 0.035, 8, 40), new THREE.MeshBasicMaterial({ color: '#c5afff' }));
    halo.rotation.x = Math.PI / 2; halo.position.y = -0.27; food.add(halo); scene.add(food);
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true, frame, lastDraw = 0;
    const resize = () => {
      const { width, height } = element.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.position.set(0, 19.5, 17.5).multiplyScalar(Math.max(1, 0.95 / camera.aspect));
      camera.lookAt(0, 0, 0); camera.updateProjectionMatrix();
    };
    const observer = new ResizeObserver(resize); observer.observe(element); resize();
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; }); intersection.observe(element);
    const draw = (time) => {
      frame = requestAnimationFrame(draw);
      if (!visible || document.hidden || time - lastDraw < (live.current.game.status === 'running' ? 15 : 50)) return;
      lastDraw = time;
      const { game: current, previous, changed } = live.current;
      const fraction = current.status === 'running' && !media.matches ? Math.min(1, (time - changed) / snakeStepTime(current.score)) : 1;
      segments.forEach((segment, index) => {
        const point = current.body[index]; segment.visible = Boolean(point);
        if (!point) return;
        const before = previous[index] || previous.at(-1) || point;
        segment.position.set(THREE.MathUtils.lerp(before.x, point.x, fraction) - offset, 0.4, THREE.MathUtils.lerp(before.z, point.z, fraction) - offset);
        segment.rotation.y = index === 0 ? Math.atan2(-DIRECTIONS[current.direction].z, DIRECTIONS[current.direction].x) : 0;
      });
      food.visible = Boolean(current.food);
      if (current.food) {
        food.position.set(current.food.x - offset, 0.63 + (media.matches ? 0 : Math.sin(time / 370) * 0.1), current.food.z - offset);
        if (!media.matches) fruit.rotation.y = time / 1000;
      }
      renderer.render(scene, camera);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame); observer.disconnect(); intersection.disconnect();
      const geometries = new Set(), materials = new Set();
      scene.traverse((object) => {
        if (object.geometry) geometries.add(object.geometry);
        if (object.material) (Array.isArray(object.material) ? object.material : [object.material]).forEach((material) => materials.add(material));
      });
      geometries.forEach((geometry) => geometry.dispose()); materials.forEach((material) => material.dispose());
      light.shadow.dispose(); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
    };
  }, []);

  return <div className="snake-scene" ref={host}>{fallback && <div className="snake-flat-board" aria-hidden="true">{Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
    const x = index % BOARD_SIZE, z = Math.floor(index / BOARD_SIZE);
    return <i key={index} className={game.body.some((part) => part.x === x && part.z === z) ? 'is-snake' : game.food?.x === x && game.food?.z === z ? 'is-food' : ''} />;
  })}</div>}</div>;
}

export default function SnakeGame() {
  const [game, setGame] = useState(createSnakeGame);
  const [best, setBest] = useState(() => { try { return Math.max(0, Number(localStorage.getItem(BEST_KEY)) || 0); } catch { return 0; } });
  const root = useRef(null);
  const stage = useRef(null);
  const live = useRef(game);
  useEffect(() => { live.current = game; }, [game]);
  const pause = useCallback(() => setGame((current) => current.status === 'running' ? { ...current, status: 'paused' } : current), []);
  const start = () => {
    setGame((current) => current.status === 'paused' ? { ...current, status: 'running' } : { ...createSnakeGame(), status: 'running' });
    stage.current?.focus({ preventScroll: true }); playSound('tap');
  };
  useEffect(() => {
    if (game.status !== 'running') return;
    let frame, last = performance.now(), elapsed = 0;
    const tick = (time) => {
      elapsed += Math.min(time - last, 100); last = time;
      const duration = snakeStepTime(live.current.score);
      if (elapsed >= duration) { elapsed %= duration; setGame((current) => stepSnake(current)); }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [game.status]);
  useEffect(() => {
    const visibility = () => { if (document.hidden) pause(); };
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('blur', pause);
    const observer = new IntersectionObserver(([entry]) => { if (entry.intersectionRatio < 0.4) pause(); }, { threshold: [0, 0.4] });
    observer.observe(root.current);
    return () => { document.removeEventListener('visibilitychange', visibility); window.removeEventListener('blur', pause); observer.disconnect(); };
  }, [pause]);
  useEffect(() => {
    if (game.score === 0) return;
    playSound('shift');
    setBest((previous) => Math.max(previous, game.score));
  }, [game.score]);
  useEffect(() => { try { localStorage.setItem(BEST_KEY, String(best)); } catch { /* A private session can still play. */ } }, [best]);
  const keyDown = (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey || event.target.closest('button')) return;
    const direction = KEYS[event.key] || KEYS[event.key.toLowerCase()];
    if (direction) { event.preventDefault(); setGame((current) => queueDirection(current, direction)); }
    else if (event.code === 'Space' || event.key === 'Enter') { event.preventDefault(); if (game.status === 'running') pause(); else start(); }
    else if (event.key.toLowerCase() === 'r') { event.preventDefault(); setGame({ ...createSnakeGame(), status: 'running' }); }
    else if (event.key === 'Escape') { event.preventDefault(); pause(); }
  };
  const playing = game.status === 'running';
  const title = { ready: 'Pocket Snake.', paused: 'Take a breath.', over: 'One more round?', won: 'You filled the world.' }[game.status];
  return <div className="snake-experience" ref={root} onKeyDown={keyDown} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) pause(); }}>
    <div className="snake-stage" ref={stage} role="application" tabIndex={0} aria-label="3D snake game. Arrow keys or WASD to steer. Space to pause, R to restart. Collect purple gems and avoid the walls and your tail.">
      <SnakeScene game={game} />
      <div className="snake-hud"><span><small>SCORE</small><strong>{String(game.score).padStart(3, '0')}</strong></span><span><small><Trophy size={11} /> PERSONAL BEST</small><strong>{String(best).padStart(3, '0')}</strong></span></div>
      {!playing && <div className="snake-overlay"><div><span>SKDEV / A SMALL DETOUR</span><h2>{title}</h2><p>{game.status === 'ready' ? 'Collect the gems. Grow your curiosity.' : game.status === 'paused' ? 'Your next move can wait.' : `You scored ${game.score}. There’s always another way.`}</p><button type="button" className="studio-button studio-button--dark" onClick={start}><Play size={14} />{game.status === 'paused' ? 'Resume game' : game.status === 'ready' ? 'Play snake' : 'Play again'}</button></div></div>}
    </div>
    <div className="snake-controls"><div className="snake-controls__hint"><span>{playing ? 'YOU’RE IN CONTROL' : 'YOUR ARCADE. YOUR PACE.'}</span><p>↑ ↓ ← → or WASD <b>·</b> Space to pause</p></div><div className="snake-controls__actions"><button type="button" onClick={playing ? pause : start} aria-label={playing ? 'Pause snake game' : game.status === 'paused' ? 'Resume snake game' : 'Start snake game'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button><button type="button" aria-label="Restart snake game" onClick={() => { setGame({ ...createSnakeGame(), status: 'running' }); stage.current?.focus({ preventScroll: true }); playSound('tap'); }}><RotateCcw size={16} /></button></div></div>
    <div className="snake-direction-pad" role="group" aria-label="Steer the snake">{[['up',ArrowUp],['left',ArrowLeft],['down',ArrowDown],['right',ArrowRight]].map(([direction,Icon]) => <button type="button" aria-label={`Steer ${direction}`} key={direction} onClick={() => setGame((current) => queueDirection(current, direction))}><Icon size={16} /></button>)}</div>
    <p className="snake-announcement" role="status">{game.status === 'over' || game.status === 'won' ? `Game ${game.status === 'won' ? 'won' : 'over'}. Score ${game.score}.` : game.status === 'paused' ? 'Game paused.' : ''}</p>
  </div>;
}
