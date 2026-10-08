const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the workspace root so Turbopack doesn't have to infer it from the
  // lockfile and pnpm-workspace.yaml, which it flags as ambiguous. Resolved
  // from __dirname so it stays correct on any machine and in CI.
  turbopack: {
    root: path.join(__dirname, '../..'),
  },
}

module.exports = nextConfig
