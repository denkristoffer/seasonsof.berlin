/** @type {import('next').NextConfig} */
export default {
  headers: async function () {
    return [
      {
        source: "/",
        headers: [
          {
            key: "strict-transport-security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};
