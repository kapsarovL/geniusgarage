/** @type {import('next').NextConfig} */
const nextConfig = {
  // Shared workspace packages ship raw TypeScript; Next compiles them here
  // instead of requiring each package to run its own build step.
  transpilePackages: ['@geniusgarage/ui'],
}

module.exports = nextConfig
