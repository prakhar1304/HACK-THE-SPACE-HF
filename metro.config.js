const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const extraNodeModules = require('node-libs-browser');


const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    extraNodeModules,

    assetExts: [
      ...defaultConfig.resolver.assetExts,
      'obj', 'mtl', 'JPG', 'vrx', 'hdr', 'gltf', 'glb', 'bin', 'arobject', 'gif',
    ], 
  },

 
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
