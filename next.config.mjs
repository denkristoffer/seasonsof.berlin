/** @type {import('next').NextConfig} */

export default {
  experimental: {
    outputStandalone: true,
  },

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
  reactStrictMode: true,
};
