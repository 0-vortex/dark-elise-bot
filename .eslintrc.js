module.exports = {
  ignorePatterns: [
    'build/*',
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  env: {
    node: true,
    es2020: true,
    mocha: true,
  },
  parserOptions: {
    ecmaFeatures: {
      globalReturn: true,
      impliedStrict: true,
    },
  },
  rules: {
    // airbnb scope overrides
    'class-methods-use-this': 'off',

    // prettier replacement rules
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      comments: 300,
    }],
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single', {
      allowTemplateLiterals: true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'linebreak-style': 0,
    'array-bracket-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'object-property-newline': 'error',
    'no-param-reassign': 0,
    'consistent-return': 0,
  },
};
