/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix:  process.env.DOMAIN || undefined ,
   images: {
    loader: 'akamai',
    path: '',
  },
  future: {
    excludeDefaultMomentLocales: true
  },

}

module.exports = nextConfig

