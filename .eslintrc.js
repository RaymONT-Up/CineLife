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

  plugins: ['react', '@typescript-eslint', 'react-hooks'],

  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies

    // Отступы
    'react/jsx-indent': [2, 2],

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', 'ts'] },
    ],
    'max-len': [2, { code: 135, ignoreComments: true }],

    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
    'import/order': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'react/no-array-index-key': 'warn',
    eqeqeq: 'warn',

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

    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'react/jsx-no-useless-fragment': 'off',
  },

  globals: {
    __IS_DEV__: true,
  },

  ignorePatterns: ['node_modules/'],
};
