/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'out',
   images: {
    loader: 'akamai',
    path: '',
  },
  future: {
    excludeDefaultMomentLocales: true
  },

}

module.exports = nextConfig
