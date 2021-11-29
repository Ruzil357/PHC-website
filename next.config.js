module.exports = {
  async headers() {
    return [
      {
        source: '/(.*).jpg',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=180, stale-while-revalidate=180',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=180, stale-while-revalidate=180',
          },
        ],
      },
    ]
  },
  reactStrictMode: true
}
