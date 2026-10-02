import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import react from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // Vendored libraries and build output are not ours to lint.
  { ignores: ['dist/', 'node_modules/', 'public/vendor/', 'playwright-report/', 'test-results/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...react.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
  },
  {
    files: ['**/*.{ts,tsx}'],
    // The new JSX transform needs no React import in scope.
    ...react.configs.flat['jsx-runtime'],
  },
  {
    languageOptions: { globals: { ...globals.node } },
    rules: {
      // TypeScript already checks props; these pages are server-rendered HTML.
      'react/prop-types': 'off',
    },
  },
  // Turns off rules that would fight Prettier's formatting. Keep last.
  prettier,
)
