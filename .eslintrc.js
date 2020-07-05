module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    "ecmaVersion": 9,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
    }
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "semi": [2, 'always'],
    "quotes": [2, 'double'],
    "object-curly-spacing": [2, 'always'],
    "array-bracket-spacing": [2, 'always'],
    "no-multi-spaces": [2],
    "no-trailing-spaces": [2],
    "no-multiple-empty-lines": [2],
    "indent": [2, 2],
  }
};
