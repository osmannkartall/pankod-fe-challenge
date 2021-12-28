module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  "env": {
    "jest/globals": true
  },
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    "plugin:import/errors",
    "plugin:import/warnings",
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    "next",
  ],
  rules: {
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "@next/next/no-img-element": "off",
  },
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ['node_modules', 'src/'],
      }
    }
  },
};