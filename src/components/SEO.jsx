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
  const width = isDefaultImage ? '512' : '1200';
  const height = isDefaultImage ? '512' : '630';
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
      <meta property="og:image:width" content={width} />
      <meta property="og:image:height" content={height} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@skdev29" />
      <meta name="twitter:creator" content="@skdev29" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
