# React Native Seed

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used as a base to build your a mobile application (iOS and android).

The starter kit provides you with the modern tools for building apps, improves developer efficiency and tries the best to uphold consistent code quality. The architecture has been configured observing the common patterns adopted by the react native community.

## Add Shields

Coming soon - Shields/badges from shields.io

## Getting Started

- [Usage](#usage)
- [Tools and Libraries](#tools-and-libraries)
- [Path resolver](#path-resolver)
- [Global Types](#global-types)
- [Debugging](#debugging)
- [Linting](#linting)
- [Release History](#release-history)
- [Contributing](#contributing)
- [Author](#author)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)
- [Coming Soon](#coming-soon)

## Usage

- Install [Node.js](https://nodejs.org/en/). Follow the installation steps for your respective operating system from the [official documentation](https://nodejs.org/en/). Make sure you install the **LTS** version of Node.
- Refer to the [Environment Setup](https://reactnative.dev/docs/environment-setup) doc to set up react native on your system
- You can download the boilerplate in 2 ways:
  - Use it as a template by clicking `Use Template` green button which can be found on the top right corner next to the `Clone` dropdown on the repositories GitHub page
  - Clone the project - `git clone https://github.com/rashtay/react_native_beej.git <your project name>`. Remove the previous git history: - `rm -rf .git/`.
- Add the npm dependencies by running - `yarn install`
- Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name - `$ npx react-native-rename <newName>`. This isn't full proof. Search for `react_native_seed` in your project folder using VSCode's search found on the left hand toolbar and replace it with name you passed to `react-native-rename` a.k.a `<newName>`. Do check the _android/app/src/main/java_ folder. It would have the `react_native_seed` folder. Rename the folder to your project name.
- Run `npx pod-install`. DO NOT run it before `yarn install`
- Run `react-native run-ios`
- Start the packager with `yarn start`to verify if everything is working
- Remove the LICENSE file and the "License" section from the **README** if you're not working on an open source project
- Update the existing README.md file with the content related to your app.
- You can now create a new git repository for your project (using `git init`) and make the first commit.

## Tools and Libraries

The boilerplate has the following tools and libraries:

- [React Native](https://facebook.github.io/react-native/) to build your cross-platfotm mobile application
- [Redux toolkit](https://redux-toolkit.js.org/) redux wrapper for state management
- [React Navigation](https://reactnavigation.org/) to handle routing and navigation in the app with a default splash screen and type definitions
- [Typescript](https://www.typescriptlang.org/) for type checking and then compiling the code to plain/vanilla JavaScript
- [Husky](https://www.npmjs.com/package/husky) to add precommit and prepush hooks
- [Lint Staged](https://www.npmjs.com/package/lint-staged) to lint the currently modified file
- [Prettier](https://prettier.io/) configured for formatting
- [Reactotron](https://github.com/infinitered/reactotron) a desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.
- [React Native Dotenv](https://github.com/goatandsheep/react-native-dotenv) for setting environment variables
- [React Native AsyncStorage](https://github.com/react-native-community/async-storage) for storing data locally
- [React Native Sync Storage](https://github.com/raphaelpor/sync-storage) for accessing AsyncStorage synchronously
- [React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/docs/getting-started/what-is-ui-kitten#what-is-ui-kitten) as a UI library (something similar to Material UI for react). Refer the official documentation for more details
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/) Gesture Handler aims to replace React Native's built in touch system called Gesture Responder System.
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons) is perfect for buttons, logos and nav/tab bars. Easy to extend, style and integrate into your project.
- [React Native Bootsplash](https://github.com/zoontek/react-native-bootsplash) for setting the iOS/Android splash screen. It hasn't been set up as it would confuse the devs using the boilerplate for the 1st time. Please refer to the official documentation to learn how to set the splash screens
- [Sentry](https://sentry.io/for/react-native/) for error and performance monitoring. You'd have to initialize it with your own project keys. A utility tool has been added for capturing the exceptions

## Path resolver

- Let's say you have `product.js` file in `src/components/product/` and you want to import `utils/string.js`.
- So, instead of importing the file present in like `../../utils/string.js`, you can import it like `utils/string`.
- All the aliases can be found in `babel.config.js` and `tsconfig.json`.
- If you want to add/remove aliases, make sure you add/remove to/from both the files

## Global types

- We have a `types` folder placed in the root.
- You can add your globals types being used across the project and third party module declarations that currently doesn't have typescript support in this folder.

## Debugging

- [Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) has been added for debugging the application. Download [Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/installing.md). If are using an Android device or emulator run the following command to make sure it can connect to Reactotron:

```
adb reverse tcp:9090 tcp:9090
```

- To log data to the Reactotron console, use `tronlog`. **PLEASE NOTE**, your project should not consist of any `tronlog`. Use it to log the values, review it and remove it from the code. You'd see an error if you don't remove it.
- You can benchmark functions to find bottleneck. Follow [benchmark](https://github.com/infinitered/reactotron/blob/master/docs/plugin-benchmark.md) guide. The plugin has already been configured.
- Refer to the official documentation for [debugging react native application](https://reactnative.dev/docs/debugging)

## Linting

The project comes preconfigured with `eslint` and `prettier` . I've added support for `react` and `typescript` linting. I have listed the additional packages being used for linting:

- eslint-plugin-standard
- eslint-plugin-import
- eslint-config-prettier

The eslint, prettier and typescript configuration files have been updated to accomodate the additional plugins.

I have made sure you cannot push the code if there are any lint or [type related](https://github.com/okonet/lint-staged/issues/468#issuecomment-605102567) issues.

## Release History

- Coming soon

## Contributing

React Native Seed welcomes contributions to our open source project. When contributing, please follow the [Contributing](https://github.com/rashtay/React_Native_Seed/blob/main/CONTRIBUTING.md) guide.

## Author

- [Rahul Shetty](https://github.com/rashtay)

## FAQ

If you run into any issues, go through the [F.A.Q.](https://github.com/rashtay/React_Native_Seed/blob/main/FAQ.md) file. Amongst other things, this document contains information about common issues.

## Support

- If any information is missing from the [README](https://github.com/rashtay/React_Native_Seed/blob/main/README.md) file, want to raise a feature request or report any bug, please create a new [issue](https://github.com/rashtay/React_Native_Seed/issues) with appropriate labels.

## License

For licensing information, go through [License](https://github.com/rashtay/React_Native_Seed/blob/main/LICENSE) file.

## Coming Soon

- Integrate https://github.com/DylanVann/react-native-fast-image
- Enable Hermes
- Add React Native Reanimated for animations
- https://typedoc.org/guides/installation/
