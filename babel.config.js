module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          pages: './src/pages',
          features: './src/features',
          hooks: './src/hooks',
          routes: './src/routes',
          store: './src/store',
          theme: './src/theme',
          utils: './src/utils',
          constants: './src/constants',
        },
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
