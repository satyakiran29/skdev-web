import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { demoApps } from './usePhoneDemo';

const W = 720, H = 1560;
const crop = { x: 0.196, y: 0.187, width: 0.65, height: 0.765 };
function round(context, x, y, width, height, radius, fill) {
  context.fillStyle = fill;
  context.beginPath(); context.roundRect(x, y, width, height, radius); context.fill();
}
function cover(context, image, x, y, width, height, source) {
  if (!image?.complete || !image.naturalWidth) return;
  const sx = source ? image.naturalWidth * source.x : 0;
  const sy = source ? image.naturalHeight * source.y : 0;
  const sw = source ? image.naturalWidth * source.width : image.naturalWidth;
  const sh = source ? image.naturalHeight * source.height : image.naturalHeight;
  const ratio = Math.max(width / sw, height / sh);
  const visibleW = width / ratio, visibleH = height / ratio;
  context.drawImage(image, sx + (sw - visibleW) / 2, sy + (sh - visibleH) / 2, visibleW, visibleH, x, y, width, height);
}

function drawScreen(context, demo, images) {
  const app = demoApps.find((item) => item.id === demo.appId) || demoApps[0];
  const label = app.name.replace(/\s*\(.+\)/, '');
  context.clearRect(0, 0, W, H);
  context.fillStyle = '#12131a'; context.fillRect(0, 0, W, H);
  context.textBaseline = 'top'; context.textAlign = 'left';
  if (demo.view === 'home' || demo.view === 'drawer') {
    const background = demoApps.find((item) => item.id === 'milky-launcher').screenshots[0];
    cover(context, images.get(background), 0, 0, W, H);
    context.fillStyle = demo.view === 'drawer' ? '#11151af5' : '#11151a45'; context.fillRect(0, 0, W, H);
    context.fillStyle = '#ffffff'; context.font = '500 29px Arial'; context.fillText('9:41', 42, 30);
    context.font = '500 64px Arial'; context.fillText(demo.view === 'drawer' ? 'Your apps.' : 'Make it yours.', 45, 140);
    context.font = '25px Arial'; context.fillStyle = '#ffffffb0'; context.fillText('A little preview of the SKDev world', 45, 225);
    round(context, 30, demo.view === 'drawer' ? 340 : 1060, 660, 255, 38, '#1c2125d9');
    demoApps.forEach((item, index) => {
      const x = 75 + index * 220, y = demo.view === 'drawer' ? 380 : 1100;
      round(context, x, y, 130, 130, 32, '#f5f5ed');
      const icon = images.get(item.icon);
      if (icon?.complete && icon.naturalWidth) context.drawImage(icon, x + 14, y + 14, 102, 102);
      context.fillStyle = '#f8faf4'; context.font = '25px Arial'; context.textAlign = 'center';
      context.fillText(item.id === 'milky-launcher' ? 'Milky' : item.name.split(' ')[0], x + 65, y + 151);
    });
    context.textAlign = 'center'; context.fillStyle = '#ffffffb0'; context.font = '24px Arial';
    context.fillText('Tap an app to explore', 360, demo.view === 'drawer' ? 690 : 1400);
  } else if (app.id === 'anify') {
    const source = app.screenshots[demo.index % app.screenshots.length];
    const image = images.get(source);
    if (image?.complete && image.naturalWidth) cover(context, image, 0, 0, W, H, crop);
    else { context.fillStyle = '#f0f0ec'; context.font = '52px Arial'; context.fillText('Anify', 45, 140); }
    round(context, 95, 1420, 530, 68, 34, '#131619ed');
    context.fillStyle = '#d8fa86'; context.font = '23px Arial'; context.textAlign = 'center';
    context.fillText('Tap a feature · explore the screenshots', 360, 1441);
  } else if (app.id === 'milky-launcher') {
    cover(context, images.get(app.screenshots[0]), 0, 0, W, H);
    round(context, 115, 1385, 490, 62, 31, '#1b2025e8');
    context.fillStyle = '#f3f4ed'; context.font = '24px Arial'; context.textAlign = 'center'; context.fillText('Tap or swipe up to open the app drawer', 360, 1404);
  } else {
    const colors = [['#d8fa86', '#20291d'], ['#c7b8f7', '#211e2c'], ['#a7dce6', '#17282c']][demo.index % 3];
    context.fillStyle = colors[1]; context.fillRect(0, 0, W, H);
    context.fillStyle = '#f4f5ed'; context.font = '26px Arial'; context.textAlign = 'left'; context.fillText('9:41', 40, 32);
    context.font = '500 60px Arial'; context.fillText('Aniset', 42, 145);
    context.font = '25px Arial'; context.fillStyle = '#ffffffb0'; context.fillText('A home screen with character.', 42, 225);
    round(context, 40, 330, 640, 410, 42, colors[0]);
    context.fillStyle = colors[1]; context.font = '500 137px Arial'; context.fillText('09:41', 75, 390);
    context.font = '28px Arial'; context.fillText('MAKE SPACE FOR YOUR STYLE.', 82, 575);
    context.fillText(['CALM / FOREST', 'DREAM / LAVENDER', 'FLOW / ICE'][demo.index % 3], 82, 655);
    round(context, 40, 790, 640, 430, 38, '#ffffff15');
    context.save(); context.beginPath(); context.roundRect(58, 808, 604, 394, 28); context.clip();
    cover(context, images.get(app.screenshot), 58, 808, 604, 394); context.restore();
    context.fillStyle = '#ffffffb0'; context.font = '24px Arial'; context.textAlign = 'center';
    context.fillText('Illustrative preset demo', 360, 1280);
    round(context, 120, 1360, 480, 75, 38, colors[0]); context.fillStyle = colors[1]; context.font = '28px Arial'; context.fillText('Tap to try another palette ↗', 360, 1383);
  }
  context.textAlign = 'center'; context.fillStyle = '#ffffffc0'; context.font = '18px Arial';
  context.fillText('INTERACTIVE PREVIEW', 360, 1499);
  round(context, 260, 1535, 200, 7, 4, '#ffffffd0');
  context.textAlign = 'left';
  return label;
}

export default function PhoneScene({ demo, onAction, onReady, paused = false }) {
  const host = useRef(null);
  const current = useRef({ demo, onAction, paused });
  const repaint = useRef(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => { current.current = { demo, onAction, paused }; repaint.current?.(); }, [demo, onAction, paused]);
  useEffect(() => {
    const element = host.current;
    let renderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' }); }
    catch { setFallback(true); onReady?.(); return; }
    let alive = true;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0, 0); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
    renderer.domElement.setAttribute('aria-hidden', 'true'); element.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 40); camera.position.set(0, 0, 8.6);
    const pmrem = new THREE.PMREMGenerator(renderer), room = new RoomEnvironment();
    const environment = pmrem.fromScene(room, 0.04); scene.environment = environment.texture; room.dispose(); pmrem.dispose();
    const key = new THREE.DirectionalLight('#ffffff', 4); key.position.set(3, 5, 5);
    const rim = new THREE.DirectionalLight('#baa6ef', 3); rim.position.set(-4, 2, -2); scene.add(key, rim, new THREE.AmbientLight('#ffffff', 1));
    const phone = new THREE.Group(); scene.add(phone);
    const frameMaterial = new THREE.MeshPhysicalMaterial({ color: '#474b50', metalness: 0.98, roughness: 0.22, clearcoat: 1 });
    const glassMaterial = new THREE.MeshPhysicalMaterial({ color: '#080a0d', metalness: 0.35, roughness: 0.12, clearcoat: 1 });
    const frameGeometry = new RoundedBoxGeometry(2.02, 4.37, 0.22, 5, 0.23);
    const frameMesh = new THREE.Mesh(frameGeometry, frameMaterial); phone.add(frameMesh);
    const glassGeometry = new RoundedBoxGeometry(1.95, 4.29, 0.08, 5, 0.215);
    const glass = new THREE.Mesh(glassGeometry, glassMaterial); glass.position.z = 0.12; phone.add(glass);
    const screenCanvas = document.createElement('canvas'); screenCanvas.width = W; screenCanvas.height = H;
    const context = screenCanvas.getContext('2d');
    const screenTexture = new THREE.CanvasTexture(screenCanvas); screenTexture.colorSpace = THREE.SRGBColorSpace; screenTexture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
    const shape = new THREE.Shape();
    const sw = 1.82, sh = 4.08, sr = 0.17, left = -sw / 2, bottom = -sh / 2;
    shape.moveTo(left + sr, bottom); shape.lineTo(left + sw - sr, bottom); shape.quadraticCurveTo(left + sw, bottom, left + sw, bottom + sr); shape.lineTo(left + sw, bottom + sh - sr); shape.quadraticCurveTo(left + sw, bottom + sh, left + sw - sr, bottom + sh); shape.lineTo(left + sr, bottom + sh); shape.quadraticCurveTo(left, bottom + sh, left, bottom + sh - sr); shape.lineTo(left, bottom + sr); shape.quadraticCurveTo(left, bottom, left + sr, bottom);
    const screenGeometry = new THREE.ShapeGeometry(shape, 16);
    const positions = screenGeometry.attributes.position;
    const uvs = new Float32Array(positions.count * 2);
    for (let i = 0; i < positions.count; i++) { uvs[i * 2] = (positions.getX(i) + sw / 2) / sw; uvs[i * 2 + 1] = (positions.getY(i) + sh / 2) / sh; }
    screenGeometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    const screenMaterial = new THREE.MeshBasicMaterial({ map: screenTexture, toneMapped: false });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial); screen.position.z = 0.169; phone.add(screen);
    const cameraGeometry = new THREE.SphereGeometry(0.046, 16, 12);
    const cameraMaterial = new THREE.MeshPhysicalMaterial({ color: '#030409', metalness: 0.4, roughness: 0.1 });
    const lens = new THREE.Mesh(cameraGeometry, cameraMaterial); lens.position.set(0, 1.91, 0.178); lens.scale.z = 0.18; phone.add(lens);
    const buttonGeometry = new RoundedBoxGeometry(0.045, 0.5, 0.08, 2, 0.018);
    const power = new THREE.Mesh(buttonGeometry, frameMaterial); power.position.set(1.02, 0.4, 0); phone.add(power);
    const volume = new THREE.Mesh(buttonGeometry, frameMaterial); volume.position.set(-1.02, 0.7, 0); phone.add(volume);
    const orbitGeometry = new THREE.TorusGeometry(2.6, 0.006, 6, 100);
    const orbitMaterial = new THREE.MeshBasicMaterial({ color: '#6a7e61', transparent: true, opacity: 0.18 });
    const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial); orbit.rotation.set(0.9, 0.5, -0.3); orbit.position.z = -0.6; scene.add(orbit);
    const badgeGeometry = new RoundedBoxGeometry(0.58, 0.58, 0.1, 3, 0.1);
    const badgeMaterial = new THREE.MeshPhysicalMaterial({ color: '#f5f6ed', metalness: 0.15, roughness: 0.22, clearcoat: 1 });
    const badgeGroups = [], badgeTextures = [], badgePlanes = [];
    const iconLoader = new THREE.TextureLoader();
    demoApps.forEach((app, index) => {
      const group = new THREE.Group(), base = new THREE.Mesh(badgeGeometry, badgeMaterial); group.add(base);
      const texture = iconLoader.load(app.icon); texture.colorSpace = THREE.SRGBColorSpace; badgeTextures.push(texture);
      const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, toneMapped: false }); badgePlanes.push(material);
      const plane = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), material); plane.position.z = 0.058; group.add(plane);
      group.position.set(index === 0 ? -1.7 : 1.65, index === 0 ? 0.85 : index === 1 ? 1.4 : -1.35, -0.2);
      group.userData.baseY = group.position.y;
      group.rotation.z = index === 1 ? -0.12 : 0.15; group.userData.appId = app.id; scene.add(group); badgeGroups.push(group);
    });
    const images = new Map();
    const paint = () => { if (alive) { drawScreen(context, current.current.demo, images); screenTexture.needsUpdate = true; } };
    repaint.current = paint;
    const loadImage = (url) => new Promise((resolve) => {
      if (images.has(url)) { resolve(); return; }
      const image = new Image(); images.set(url, image);
      image.onload = () => { paint(); resolve(); }; image.onerror = resolve; image.src = url;
    });
    const urls = new Set(demoApps.flatMap((app) => [app.icon, app.screenshot, ...(app.screenshots || [])]).filter(Boolean));
    const firstApp = demoApps.find((app) => app.id === current.current.demo.appId);
    const firstImage = firstApp.screenshots?.[0] || firstApp.screenshot;
    loadImage(firstImage).then(() => { if (alive) { paint(); renderer.render(scene, camera); onReady?.(); } });
    urls.forEach((url) => { if (url !== firstImage) loadImage(url); });
    paint();
    let frame = 0, visible = true, last = 0, time = 0, dragging = false, distance = 0;
    let downX = 0, downY = 0, previousX = 0, previousY = 0, targetX = -0.32, targetY = -0.06;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const resize = () => { const width = element.clientWidth, height = element.clientHeight; if (!width || !height) return; renderer.setSize(width, height); camera.aspect = width / height; camera.position.z = camera.aspect < 0.7 ? 9.7 : 8.6; camera.updateProjectionMatrix(); };
    const size = new ResizeObserver(resize); size.observe(element); resize();
    const draw = (now) => {
      frame = 0; if (!visible || document.hidden) return;
      const delta = Math.min((now - (last || now)) / 1000, 0.04); last = now;
      if (!reduced.matches && !current.current.paused) time += delta;
      phone.rotation.y += (targetX - phone.rotation.y) * 0.07;
      phone.rotation.x += (targetY - phone.rotation.x) * 0.07;
      phone.rotation.z = -0.09 + Math.sin(time * 0.28) * 0.025;
      phone.position.y = Math.sin(time * 0.6) * 0.07;
      badgeGroups.forEach((group, index) => { group.position.y = group.userData.baseY + (reduced.matches ? 0 : Math.sin(time * 0.8 + index * 2) * 0.07); });
      renderer.render(scene, camera); frame = requestAnimationFrame(draw);
    };
    const start = () => { if (!frame && visible && !document.hidden) { last = 0; frame = requestAnimationFrame(draw); } };
    const intersection = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); }, { rootMargin: '100px' }); intersection.observe(element);
    document.addEventListener('visibilitychange', start);
    const down = (event) => { if (event.button !== 0) return; dragging = true; distance = 0; downX = previousX = event.clientX; downY = previousY = event.clientY; element.setPointerCapture(event.pointerId); };
    const move = (event) => {
      if (dragging) {
        distance = Math.hypot(event.clientX - downX, event.clientY - downY);
        if (distance > 8) { targetX = THREE.MathUtils.clamp(targetX + (event.clientX - previousX) * 0.008, -0.85, 0.85); targetY = THREE.MathUtils.clamp(targetY + (event.clientY - previousY) * 0.005, -0.4, 0.4); }
        previousX = event.clientX; previousY = event.clientY;
      } else if (!reduced.matches) {
        const rect = element.getBoundingClientRect(); targetX = -0.22 + ((event.clientX - rect.left) / rect.width - 0.5) * 0.3; targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.12;
      }
    };
    const raycaster = new THREE.Raycaster(), pointer = new THREE.Vector2();
    const up = (event) => {
      if (!dragging) return; dragging = false;
      if (distance > 8) { if (downY - event.clientY > 65 && Math.abs(event.clientX - downX) < 45) current.current.onAction({ type: 'next' }); return; }
      const rect = element.getBoundingClientRect(); pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
      raycaster.setFromCamera(pointer, camera); const hit = raycaster.intersectObjects([screen, ...badgeGroups], true)[0];
      if (hit?.object === screen) current.current.onAction({ type: 'tap', x: hit.uv.x, y: 1 - hit.uv.y });
      else if (hit) {
        let object = hit.object;
        while (object && !object.userData.appId) object = object.parent;
        if (object?.userData.appId) current.current.onAction({ type: 'select', appId: object.userData.appId });
      }
    };
    const cancel = () => { dragging = false; };
    const keyDown = (event) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.target.closest('button')) return;
      if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter','Home'].includes(event.key)) event.preventDefault();
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') current.current.onAction({ type: event.key === 'ArrowLeft' ? 'previous' : 'next' });
      else if (event.key === 'Home') current.current.onAction({ type: 'home' });
      else if (event.key === 'Enter') current.current.onAction({ type: 'next' });
      else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') targetX = THREE.MathUtils.clamp(targetX + (event.key === 'ArrowUp' ? 0.2 : -0.2), -0.85, 0.85);
    };
    element.addEventListener('pointerdown', down); element.addEventListener('pointermove', move); element.addEventListener('pointerup', up); element.addEventListener('pointercancel', cancel); element.addEventListener('keydown', keyDown); start();
    return () => {
      alive = false; repaint.current = null; cancelAnimationFrame(frame); size.disconnect(); intersection.disconnect(); document.removeEventListener('visibilitychange', start);
      element.removeEventListener('pointerdown', down); element.removeEventListener('pointermove', move); element.removeEventListener('pointerup', up); element.removeEventListener('pointercancel', cancel); element.removeEventListener('keydown', keyDown);
      [frameGeometry, glassGeometry, screenGeometry, cameraGeometry, buttonGeometry, orbitGeometry, badgeGeometry].forEach((geometry) => geometry.dispose());
      [frameMaterial, glassMaterial, screenMaterial, cameraMaterial, orbitMaterial, badgeMaterial, ...badgePlanes].forEach((material) => material.dispose());
      badgeGroups.forEach((group) => group.children[1].geometry.dispose()); badgeTextures.forEach((texture) => texture.dispose()); screenTexture.dispose(); environment.dispose();
      images.forEach((image) => { image.onload = null; image.onerror = null; }); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
    };
  }, [onReady]);
  const app = demoApps.find((item) => item.id === demo.appId);
  return <div ref={host} className="phone-scene" tabIndex={0} role="group" aria-label={`Interactive 3D phone showing ${app.name}. Drag to rotate. Tap its screen, or use left and right arrows to explore. Home key returns to the demo launcher.`} data-cursor="Try it">
    {fallback && <div className="phone-scene__fallback"><img src={app.screenshots?.[demo.index % app.screenshots.length] || app.screenshot} alt={`${app.name} interactive preview`} /><button type="button" onClick={() => onAction({ type: 'next' })}>Next preview →</button></div>}
  </div>;
}
