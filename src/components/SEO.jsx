import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://skdev.psatyakiran.in';
const DEFAULT_IMAGE = `${BASE_URL}/android-chrome-512x512.png`;
const SITE_NAME = 'SKDev';
const DEFAULT_TITLE = 'SKDev — Android Apps, Personalization & Productivity Suites';
const DEFAULT_DESC =
  'Official portfolio of indie Android developer Satya Kiran. Discover Anify (Sticker Studio, widgets & focus lock), Aniset (Anime KWGT & KLWP), and public roadmap.';
const DEFAULT_KEYWORDS =
  'skdev, satyakiran, anify, aniset, sticker studio, kwgt widgets, klwp live wallpapers, android 16, focus lock, blockit, android personalization, indie app developer';

/**
 * SEO component — inject per-page <head> meta tags.
 *
 * @param {string}  title       - Page title (appended with " | SKDev")
 * @param {string}  description - Meta description
 * @param {string}  keywords    - Meta keywords string
 * @param {string}  canonical   - Canonical URL path (e.g. "/apps/aniset")
 * @param {string}  image       - Absolute or relative OG image URL
 * @param {string}  type        - OG type (default "website")
 * @param {object}  jsonLd      - Optional JSON-LD structured data object
 */
export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const canonicalUrl = `${BASE_URL}${canonical}`;

  let ogImage = image;
  if (ogImage && !ogImage.startsWith('http://') && !ogImage.startsWith('https://')) {
    ogImage = ogImage.startsWith('/') ? `${BASE_URL}${ogImage}` : `${BASE_URL}/${ogImage}`;
  }

  const isDefaultImage = image === DEFAULT_IMAGE;
  const isWebp = ogImage?.toLowerCase().includes('.webp');
  const isPng = ogImage?.toLowerCase().includes('.png');
  const imageType = isWebp ? 'image/webp' : isPng ? 'image/png' : 'image/jpeg';
  const width = isDefaultImage ? '512' : '1200';
  const height = isDefaultImage ? '512' : '672';
  const twitterCard = isDefaultImage ? 'summary' : 'summary_large_image';

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Satyakiran" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:url" content={ogImage} />
      {ogImage?.startsWith('https://') && (
        <meta property="og:image:secure_url" content={ogImage} />
      )}
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content="2026-09-09T20:00:00+05:30" />
      <link rel="image_src" href={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@skdev29" />
      <meta name="twitter:creator" content="@skdev29" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
