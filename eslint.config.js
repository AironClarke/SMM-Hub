import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports' }
      ],
      quotes: ['error', 'single'],
      'max-lines': ['error', 90],
      'array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 5
        }
      ],
      'max-len': ['error', { code: 90 }]
    }
  },

    // Ignored files/folders
    {
      ignores: []
    }
];