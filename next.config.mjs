import { env } from "./src/env/server.mjs";

/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1lcke4KBI_ZE3bpUGHPHdWAz1Jh7q-M-1/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/bhaveek424',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/bhaveek',
        permanent: true,
      }
    ]
  },
});
