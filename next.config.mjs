/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1h6mQtcOvpqU4aYJPUJd-CPqKgfqpwYXy/view?usp=sharing',
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
};

export default nextConfig;
