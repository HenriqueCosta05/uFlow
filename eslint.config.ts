import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js },
        extends: ['js/recommended'],
        languageOptions: { globals: globals.browser },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    eslintPluginUnicorn.configs.recommended,
    {
        plugins: { prettier: eslintPluginPrettier },
    },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'unicorn/prevent-abbreviations': 'off',
            'unicorn/filename-case': 'off',
            'unicorn/prefer-export-from': 'off',
        },
    },
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
    },
])
