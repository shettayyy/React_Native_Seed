module.exports = {
  root: true,
  extends: ['standard', '@react-native-community'],
  rules: {
    'prefer-const': 2,
    'no-var': 2,
    'no-new-object': 2,
    'object-shorthand': 2,
    'no-useless-rename': 2,
    'no-prototype-builtins': 2,
    'no-array-constructor': 2,
    'dot-notation': 0,
    semi: 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: '*', next: 'continue' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'block' },
    ],
    'lines-around-comment': [
      2,
      {
        beforeLineComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowObjectEnd: true,
      },
    ],
    'no-console': 1,
    'no-use-before-define': [2, { functions: false }],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
