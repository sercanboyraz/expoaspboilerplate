module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
    ],
    // transformIgnorePatterns: ["node_modules/(?!(react-native|react-native-screens|react-native-reanimated)/)"],
  };
};
