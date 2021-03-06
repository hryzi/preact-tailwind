import CopyWebpackPlugin from 'copy-webpack-plugin';
import tailwind from 'preact-cli-tailwind';

const preactCliSwPrecachePlugin = require('preact-cli-sw-precache');

export default function (config, env, helpers) {

  config = tailwind(config, env, helpers);

  // copy all static assets files to server root dir...
  config.plugins.push( new CopyWebpackPlugin([{ context: `${__dirname}/src/assets`, from: `*.*` }]) );
  // app cache configs...
  const precacheConfig = {
    staticFileGlobs: [
      '/',
      'build/*',
    ],
    runtimeCaching: [{
      urlPattern: /\//,
      handler: 'networkFirst'
    },{
      urlPattern: /\//,
      handler: 'networkOnly'
    }],
    stripPrefix: 'build/',
    navigateFallback: 'index.html',
    filename: 'sw.js',
    clientsClaim: true,
    skipWaiting: true,
  };

  return preactCliSwPrecachePlugin(config, precacheConfig);
}