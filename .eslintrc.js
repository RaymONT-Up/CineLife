/* eslint-disable linebreak-style */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb', 'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react', '@typescript-eslint'],

  rules: {
    //
    // 'linebreak-style': [2, 'windows'],

    // Отступы
    'react/jsx-indent': [2, 2],

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'max-len': [2, { code: 110, ignoreComments: true }],

    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'import/order': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-props-no-spreading': 'warn',

    'react/no-unescaped-entities': 'off',
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
  },

  globals: {
    __IS_DEV__: true,
  },

  ignorePatterns: ['node_modules/'],
};
