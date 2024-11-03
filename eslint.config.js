import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      '@typescript-eslint': tseslint,
    },
  },
  {
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginImport.configs.recommended,
  pluginJsxA11y.configs.recommended,
  eslintConfigPrettier,
  prettierRecommended,
  {
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
        },
      ],
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img', 'object', 'area', 'input[type="image"]'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/anchor-is-valid': [
        'warn',
        {
          components: ['Link'],
          specialLink: ['to'],
        },
      ],
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': [
        'warn',
        {
          usePrettierrc: true,
        },
      ],
    },
  },
];
