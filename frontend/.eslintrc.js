module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'react/jsx-filename-extension': 0,
    'indent': ['error', 2],
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
  },
  globals: {
    document: 1,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      'jsx': true,
      'modules': true
    }
  },
};