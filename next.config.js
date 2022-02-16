/** @type {import('next').NextConfig} */

const packageInfo = require("./package.json");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        APP_VERSION: JSON.stringify(packageInfo.version),
      })
    );
    return config;
  }
}

module.exports = nextConfig
