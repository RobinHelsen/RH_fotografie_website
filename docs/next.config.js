module.exports = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};
