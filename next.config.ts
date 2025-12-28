import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/user-manage/:path*',
        destination: '/?redirect=unauthorized',
        permanent: false,
      },
      {
        source: '/company-manage/:path*',
        destination: '/?redirect=unauthorized',
        permanent: false,
      },
      {
        source: '/job/apply/:path*',
        destination: '/?redirect=unauthorized',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
