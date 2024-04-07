const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com',
                port: '',
            }
        ]
    }
}

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/redirectRoute',
          permanent: true,
        },
      ]
    },
  }

module.exports = withNextIntl(nextConfig);

