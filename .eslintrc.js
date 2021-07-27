'use strict';

// @TODO this can be removed once `trailingComma` is enabled upstream by default
const prettierTrailingComma = {
  'prettier/prettier': [
    'error',
    require('@clark/prettier-config/trailing-comma'),
  ],
};

const ruleOverrides = {
  ...prettierTrailingComma,
};

module.exports = {
  root: true,
  extends: ['@clark'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    ...ruleOverrides,
  },
  overrides: [
    {
      files: ['app/**/*.js'],
      extends: '@clark/ember',
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon-test-support/**/*.js', 'tests/**/*.js'],
      excludedFiles: ['tests/dummy/config/**/*.js'],
      extends: '@clark/ember/test',
      rules: { ...ruleOverrides },
    },
    {
      files: ['addon-test-support/**/*.js'],
      rules: {
        'qunit/no-commented-tests': 'off',
      },
    },
    {
      files: [
        './*.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
      ],
      extends: '@clark/node',
      rules: { ...ruleOverrides },
    },
  ],
};
