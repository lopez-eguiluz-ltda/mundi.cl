import js from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import astroPlugin from 'eslint-plugin-astro'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import oxlintPlugin from 'eslint-plugin-oxlint'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: [
      'node_modules/',
      'dist/',
      'public/',
      '.cache/',
      'build/',
      '.vercel/',
      '.netlify/',
      '.astro/',
      '.agents/',
      '.claude/',
    ],
  },

  js.configs.recommended,

  // Astro (includes parser + recommended rules for .astro files)
  ...astroPlugin.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      'no-undef': 'off',
    },
  },

  // TypeScript with type-aware rules, scoped to TS files only
  ...tsPlugin.configs['flat/recommended-type-checked'].map(conf => ({
    ...conf,
    files: ['**/*.{ts,tsx}'],
  })),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/triple-slash-reference': 'off',
      // Warn instead of error for gradual adoption of strict type-checked rules
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },

  // React + React Hooks (JSX/TSX files only)
  {
    files: ['**/*.{tsx,jsx}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off', // React 17+ JSX transform
      'react/prop-types': 'off', // TypeScript handles prop types
    },
  },

  // OxLint: auto-disable ESLint rules already covered by oxlint
  ...oxlintPlugin.configs['flat/recommended'],

  // Prettier (last — overrides any formatting rules above)
  prettierConfig,
]
