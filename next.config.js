/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/how', destination: '/how-it-works', permanent: true },
      // cover accidental caps or variants
      { source: '/How', destination: '/how-it-works', permanent: true },
      { source: '/How-It-Works', destination: '/how-it-works', permanent: true },
      { source: '/how-it-works/', destination: '/how-it-works', permanent: true },
    ];
  },
};

module.exports = nextConfig;
