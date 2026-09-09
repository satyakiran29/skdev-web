import fs from 'fs';
import path from 'path';
import process from 'node:process';

const BASE_URL = 'https://skdev.psatyakiran.in';
const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.warn('dist/index.html not found, skipping static meta pages generation.');
  process.exit(0);
}

const template = fs.readFileSync(indexPath, 'utf-8');

const routes = [
  {
    path: 'apps/anify',
    title: 'Anify (Free) — Personalization & Productivity Suite for Android | SKDev',
    description: 'Give your phone a complete makeover with Anify: Ready-to-use widgets (No KWGT needed), Sticker Studio (Telegram → WhatsApp), premium KWGT packs, BlockIt focus lock, HD wallpapers & ringtones.',
    keywords: 'anify, sticker studio, telegram to whatsapp sticker, ready to use widgets, kwgt widgets, blockit, focus lock, wallpapers, ringtones, android personalization, skdev',
    canonical: `${BASE_URL}/apps/anify`,
    image: `${BASE_URL}/app_banners/anify.webp`,
    imageFallback: `${BASE_URL}/app_banners/anify.jpg`,
    imageType: 'image/webp',
    width: '1200',
    height: '672',
    alt: 'Anify — Personalization & Productivity Suite for Android',
    card: 'summary_large_image',
  },
  {
    path: 'apps/aniset',
    title: 'Aniset (Paid) — Anime KWGT & KLWP Widgets | SKDev',
    description: 'Elevate your device customization to a whole new level with Aniset: stunning KWGT and KLWP widgets bringing the vibrant and dynamic world of anime to your Android home screen.',
    keywords: 'aniset, anime kwgt, klwp widgets, anime wallpapers, android personalization, skdev',
    canonical: `${BASE_URL}/apps/aniset`,
    image: `${BASE_URL}/android-chrome-512x512.png`,
    imageType: 'image/png',
    width: '512',
    height: '512',
    alt: 'Aniset — Anime KWGT & KLWP Widgets',
    card: 'summary',
  },
];

for (const route of routes) {
  let html = template;

  // Replace title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

  // Replace description
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace keywords
  if (route.keywords) {
    html = html.replace(
      /<meta\s+name=["']keywords["']\s+content=["'][^"']*["']\s*\/?>/i,
      `<meta name="keywords" content="${route.keywords}" />`
    );
  }

  // Canonical link
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link\s+rel=["']canonical["']\s+href=["'][^"']*["']\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );
  } else {
    html = html.replace(
      /<!-- Open Graph -->/i,
      `<link rel="canonical" href="${route.canonical}" />\n  <!-- Open Graph -->`
    );
  }

  // Replace OG tags
  html = html.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta property="og:url" content="${route.canonical}" />`
  );

  // Build comprehensive image tags for WhatsApp, LinkedIn, Instagram/Meta, Twitter
  let imageMeta = `
  <!-- Primary WebP Banner for WhatsApp, LinkedIn, Instagram, Discord, Telegram -->
  <meta property="og:image" content="${route.image}" />
  <meta property="og:image:url" content="${route.image}" />
  <meta property="og:image:secure_url" content="${route.image}" />
  <meta property="og:image:type" content="${route.imageType}" />
  <meta property="og:image:width" content="${route.width}" />
  <meta property="og:image:height" content="${route.height}" />
  <meta property="og:image:alt" content="${route.alt}" />`;

  if (route.imageFallback) {
    imageMeta += `
  <!-- JPEG Fallback for legacy WhatsApp & older social crawlers -->
  <meta property="og:image" content="${route.imageFallback}" />
  <meta property="og:image:secure_url" content="${route.imageFallback}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="${route.width}" />
  <meta property="og:image:height" content="${route.height}" />
  <link rel="image_src" href="${route.imageFallback}" />`;
  } else {
    imageMeta += `\n  <link rel="image_src" href="${route.image}" />`;
  }

  // Remove original width/height tags from template first
  html = html.replace(/<meta\s+property=["']og:image:width["'][^>]*\/?>\s*/gi, '');
  html = html.replace(/<meta\s+property=["']og:image:height["'][^>]*\/?>\s*/gi, '');

  html = html.replace(
    /<meta\s+property=["']og:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    imageMeta.trim()
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta\s+name=["']twitter:card["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:card" content="${route.card}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  html = html.replace(
    /<meta\s+name=["']twitter:image["']\s+content=["'][^"']*["']\s*\/?>/i,
    `<meta name="twitter:image" content="${route.image}" />\n  <meta name="twitter:image:alt" content="${route.alt}" />`
  );

  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const outPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log(`Generated social preview page: ${route.path}/index.html`);
}
