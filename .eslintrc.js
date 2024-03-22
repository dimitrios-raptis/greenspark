module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jest/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true,
        "jest": true
      },
      "files": [
        ".eslintrc.{js,cjs}",
        "**/*.spec.js",
        "**/*.spec.jsx"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "jest"
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};