import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['picsum.photos', 'images.unsplash.com'],
  },
};

export default nextConfig;
