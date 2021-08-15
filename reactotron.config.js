import Reactotron, {
  networking,
  openInEditor,
  trackGlobalErrors,
} from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(networking())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

if (__DEV__) {
  // eslint-disable-next-line no-console
  console.tron = (...args) => {
    Reactotron.display({
      name: 'TRON',
      value: args,
      preview: args.length > 1 ? JSON.stringify(args) : args[0],
    });
  };
}
