import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
<<<<<<< HEAD
      "@typescript-eslint/no-unused-vars": 'off',
      "@typescript-eslint/no-unused-expressions": 'off',
      "@typescript-eslint/no-explicit-any": 'off',
      "@typescript-eslint/no-implicit-any": 'off',
=======
>>>>>>> 7b858b62a5f44deb9d0d7c874a49897957daa064
    },
  },
)
