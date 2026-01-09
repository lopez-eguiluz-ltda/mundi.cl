const eslint = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const astroPlugin = require('eslint-plugin-astro');
const eslintConfigPrettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
  // Global ignores
  {
    ignores: [
      'node_modules/',
      'dist/',
      'public/',
      '.cache/',
      'build/',
      '.vercel/',
      '.netlify/',
      '.astro/'
    ]
  },

  // Base ESLint recommended rules
  eslint.configs.recommended,

  // Astro flat config (includes parser and rules for .astro files)
  ...astroPlugin.configs['flat/recommended'],

  // Astro files overrides
  {
    files: ['**/*.astro'],
    rules: {
      'no-undef': 'off' // TypeScript/Astro handles this
    }
  },

  // TypeScript/JavaScript files
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'no-unused-vars': 'off',
      'no-undef': 'off', // TypeScript handles this
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/triple-slash-reference': 'off' // Allow in .d.ts files
    }
  },

  // Prettier config (must be last to override formatting rules)
  eslintConfigPrettier
];
