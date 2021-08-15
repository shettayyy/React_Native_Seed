/**
 * @format
 */

import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  import('./reactotron.config.js');
}

if (process.env.ENABLE_STORYBOOK === 'true') {
  import('./storybook').then(StorybookUI =>
    AppRegistry.registerComponent(appName, () => StorybookUI.default),
  );
} else {
  AppRegistry.registerComponent(appName, () => App);
}
