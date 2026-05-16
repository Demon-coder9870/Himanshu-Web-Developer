import Head from 'next/head';
import { profile } from '@/pages/index';

const SEO = ({ title = '', description = '', image = '', url = '' }) => {
  const pageTitle = title ? `${title} | ${profile.name}` : profile.name;
  const pageDescription = description || profile.summary;
  const pageImage = image || '/og-image.png';
  const pageUrl = url || 'https://himanshuverma.dev';

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
