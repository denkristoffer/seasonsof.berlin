/** @type {import('next').NextConfig} */

export default {
  experimental: {
    outputStandalone: true,
    runtime: "nodejs",
    serverComponents: true,
  },
  reactStrictMode: true,
};
