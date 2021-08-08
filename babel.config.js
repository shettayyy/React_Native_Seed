module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
    'transform-inline-environment-variables',
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
