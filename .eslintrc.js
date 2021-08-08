module.exports = {
  root: true,
  extends: ['@react-native-community', 'airbnb-typescript/base'],
  rules: {
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: '*', next: 'break'},
      {blankLine: 'always', prev: '*', next: 'continue'},
      {blankLine: 'always', prev: '*', next: 'function'},
      {blankLine: 'always', prev: '*', next: 'block'},
    ],
    'lines-around-comment': [
      2,
      {
        beforeBlockComment: true,
      },
    ],
    'no-console': 1,
    'no-use-before-define': [2, {functions: false}],
    'no-param-reassign': [
      'error',
      {props: true, ignorePropertyModificationsFor: ['state']},
    ],
  },
};
