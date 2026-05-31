import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://skdev.psatyakiran.in';
const DEFAULT_IMAGE = `${BASE_URL}/android-chrome-512x512.png`;
const SITE_NAME = 'skdev';
const DEFAULT_TITLE = 'skdev — Crafting Digital Experiences';
const DEFAULT_DESC =
  'Indie developer crafting clean, practical apps focused on performance and real user needs. Explore apps like Aniset, Anify, and Gwalls.';

/**
 * SEO component — inject per-page <head> meta tags.
 *
 * @param {string}  title       - Page title (appended with " | skdev")
 * @param {string}  description - Meta description
 * @param {string}  canonical   - Canonical URL path (e.g. "/apps/aniset")
 * @param {string}  image       - Absolute OG image URL
 * @param {string}  type        - OG type (default "website")
 * @param {object}  jsonLd      - Optional JSON-LD structured data object
 */
export default function SEO({
  title,
  description = DEFAULT_DESC,
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

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
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
