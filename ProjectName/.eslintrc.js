module.exports = {
  root: true,
  extends: ['@react-native', 'eslint-config-prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  rules: {
    // General Rules
    'no-console': 'warn',
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    'spaced-comment': 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'no-shadow': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-use-before-define': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'lines-between-class-members': 'off',
    'arrow-body-style': ['error', 'as-needed'],

    // Typescript rules
    '@typescript-eslint/no-explicit-any': 'error',

    // React Plugin
    // The following rules are made available via `eslint-plugin-react`.
    'react/destructuring-assignment': ['warn', 'always', { ignoreClassFields: true }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/jsx-filename-extension': 'off',

    // React-Hooks Plugin
    // The following rules are made available via `eslint-plugin-react-hooks`
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    // "react-hooks/exhaustive-deps": "off", // Checks effect dependencies

    // React-Native Plugin
    // The following rules are made available via `eslint-plugin-react-native`
    'react-native/no-inline-styles': 'warn',
    'react-native/no-raw-text': 'warn',

    // Import Rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index'],
        pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-unresolved': ['error', { caseSensitive: false }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
