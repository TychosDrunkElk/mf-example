module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['i.imgur.com']
  },
  webpack(config, options) {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        remoteType: 'var',
        remotes: {
          exampleRemote: 'exampleRemote',
        },
        shared: {
          react: {
            eager: true,
            singleton: true,
            requiredVersion: false,
          },
        },
      }),
    );
    config.module.rules.push({
      test: /pages\/_app.[jt]sx?/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });
    return config;
  }
}
