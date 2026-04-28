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
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
