module.exports = {
  "root": true,
  "parser": "babel-eslint",

  "extends": ["eslint:recommended", 'standard'],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "jsx": false,
      "experimentalObjectRestSpread": true
    }
  },

  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },

  "plugins": [
    "flowtype",
    "html"
  ],

  "globals": {
    "define": true,
    "make": true,
    "use": true
  },

  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  },

  "rules": {
    "strict": ["error", "global"],
    "no-unused-vars": ["error", { "vars": "all", "args": "all", "caughtErrors": "none" }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "camelcase": ["error", { "properties": "always" }],
    "consistent-return": "error",
    "arrow-spacing": "error",
    "arrow-parens": 0,
    "generator-star-spacing": ["error", "none"],
    "arrow-body-style": ["error", "as-needed"],
    "semi": ["error", "always"],
    "no-confusing-arrow": ["error", { "allowParens": false }],
    "no-constant-condition": "error",
    "no-labels": "error",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "func-style": "off",
  }
};
