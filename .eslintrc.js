const { eslintTS, deepmerge } = require('@ice/spec');

module.exports = deepmerge(eslintTS, {
  rules: {
    "jsx-a11y/html-has-lang": 0,
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/no-var-requires": 0,
    "class-methods-use-this": 1,
  }
});
