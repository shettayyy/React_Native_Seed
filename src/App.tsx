/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  ThemedComponentProps,
  ThemeType,
  withStyles,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import theme from './theme/theme.json';
import mapping from './theme/mapping.json';
// import Counter from './pages/Counter/Counter';
import Dogs from './pages/Dogs/Dogs';
import store from './store';

const BaseApp = (props: ThemedComponentProps) => (
  <SafeAreaView style={props.eva!.style!.safeAreaBg}>
    <StatusBar
      barStyle="light-content"
      networkActivityIndicatorVisible
      showHideTransition="fade"
    />

    <Dogs />
  </SafeAreaView>
);

const ThemedBaseApp = withStyles(BaseApp, (evaTheme: ThemeType) => ({
  safeAreaBg: {
    backgroundColor: evaTheme['color-basic-900'],
  },
}));

const App = () => {
  return (
    <Provider store={store}>
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          {...eva}
          theme={{ ...eva.dark, ...theme }}
          customMapping={mapping}>
          <ThemedBaseApp />
        </ApplicationProvider>
      </>
    </Provider>
  );
};

export default App;
