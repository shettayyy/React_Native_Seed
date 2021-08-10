# React Native Seed

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used as a base to build your a mobile application (iOS and android).

The starter kit provides you with the modern tools for building apps, improves developer efficiency and tries the best to uphold consistent code quality. The architecture has been configured observing the common patterns adopted by the react native community.

[comment]: <> ([![NPM Version][npm-image]][npm-url])

[comment]: <> ([![Build Status][travis-image]][travis-url])

[comment]: <> ([![Downloads Stats][npm-downloads]][npm-url])

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

## Usage

- Install [Node.js](https://nodejs.org/en/). Follow the installation steps for your respective operating system from the [official documentation](https://nodejs.org/en/). Make sure you install the **LTS** version of Node.
- Refer to the [Environment Setup](https://reactnative.dev/docs/environment-setup) doc to set up react native on your system
- You can download the boilerplate in 2 ways:
  - Use it as a template by clicking `Use Template` green button which can be found on the top right corner next to the `Clone` dropdown on the repositories GitHub page
  - Clone the project - `git clone https://github.com/rashtay/react_native_beej.git <your project name>`. Remove the previous git history: - `rm -rf .git/`.
- Add the npm dependencies by running - `yarn install`
- Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name - `$ npx react-native-rename <newName>`
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
- [Prettier](https://prettier.io/), [TSLint](<[https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)>) and [ESlint](https://eslint.org/) preconfigured for React Native
- [Reactotron](https://github.com/infinitered/reactotron) a desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.
- [React Native Dotenv](https://github.com/goatandsheep/react-native-dotenv) for setting environment variables
- [React Native AsyncStorage](https://github.com/react-native-community/async-storage) for storing data locally
- [React Native Sync Storage](https://github.com/raphaelpor/sync-storage) for accessing AsyncStorage synchronously
- [React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/docs/getting-started/what-is-ui-kitten#what-is-ui-kitten) as a UI library (something similar to Material UI for react). Refer the official documentation for more details
- [Sentry](https://sentry.io/for/react-native/) for error and performance monitoring. You'd have to initialize it with your own project keys.

## Path resolver

- Let's say you have `product.js` file in `src/components/product/` and you want to import `utils/string.js`.
- So, instead of importing the file present in like `../../utils/string.js`, you can either import it like `@utils/string` or `utils/string`.
- All the aliases can be found in `babel.config.js` and `tsconfig.json`.
- If you want to add/remove aliases, make sure you add/remove to/from both the files

## Global types

- We have a types folder placed in the root. You can add your globals types being used across the project and third party module declarations that currently doesn't have typescript support in this folder.

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

I have made sure you cannot push the code if there are any lint or [type related issues](https://github.com/okonet/lint-staged/issues/468#issuecomment-605102567) issues.

## Release History

- Coming soon

## Contributing

- Coming soon

## Author

- Coming soon

## FAQ

- Coming soon

## Support

- Coming soon

## License

- Coming soon