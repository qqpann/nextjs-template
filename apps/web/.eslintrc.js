module.exports = {
  extends: ['custom', 'next', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'sibling', 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: '{react,react-dom/**,react-router-dom,next,next/**}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'no-restricted-imports': ['error', { patterns: ['../'] }],
  },
}
