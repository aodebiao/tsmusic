import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { parser } from 'typescript-eslint'
export default [
    {
        files:['./*.js','./src/**/*.jsx','./src/**/*.tsx','./src/**/*.ts','./src/**/*.js'],
        languageOptions: {
            globals: globals.browser,
            parser: parser,
            ecmaVersion: 'latest',
            sourceType: 'module',

        },
      rules: {
        "@typescript-eslint/no-var-requires":'off',
        "@typescript-eslint/no-explicit-any":'off',
      },

        plugins: ['react', 'eslint:recommended',
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended'],

    },
]
