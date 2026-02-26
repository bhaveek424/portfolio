/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/18P_itUpV6z6pzd9D3PY-J1oOMknVqiZU/view?usp=sharing',
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
