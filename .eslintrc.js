module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:tailwindcss/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'global.d.ts',
    'jest.base.config.ts',
    'tsconfig.json',
  ],
  rules: {
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'block', next: 'return' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
    ],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        semi: false,
        singleQuote: true,
        printWidth: 80,
        tabWidth: 2,
        trailingComma: 'all',
        parser: 'typescript',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        quoteProps: 'as-needed',
        plugins: [
          'prettier-plugin-tailwindcss',
          'prettier-plugin-organize-imports',
        ],
        fileInfoOptions: {
          withNodeModules: true,
          module: true,
          exclude: ['node_modules/**', '**/__tests__/**', '**/__mocks__/**'],
        },
        htmlWhitespaceSensitivity: 'ignore',
        embeddedLanguageFormatting: 'auto',
        requireConfig: true,
        singleAttributePerLine: false,
      },
    ],

    'unused-imports/no-unused-imports': 'error',
    'no-duplicate-imports': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-generic-constructors': 'error',
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-duplicate-type-constituents': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    'no-return-await': 'off',
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-unbound-method': ['off', { 'ignore-static': true }],
    '@typescript-eslint/unbound-method': ['off'],
    '@typescript-eslint/no-floating-promises': 'off',
    eqeqeq: ['error', 'always'],
    'no-console': 'error',
    '@typescript-eslint/unified-signatures': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['PascalCase'], // Para clases y componentes
      },
      {
        selector: 'variable',
        format: ['PascalCase', 'UPPER_CASE'], // Variables y constantes
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase'], // Parámetros de función
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase', 'UPPER_CASE', 'snake_case'], // Propiedades privadas
        leadingUnderscore: 'allow',
      },
      {
        selector: 'memberLike',
        modifiers: ['public'],
        format: ['camelCase', 'UPPER_CASE', 'snake_case'], // Propiedades públicas
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'], // Interfaces y tipos
      },
      {
        selector: 'enumMember',
        format: ['UPPER_CASE'], // Miembros de enumeraciones
      },
      {
        selector: 'objectLiteralMethod',
        format: ['camelCase'], // Métodos de literales de objeto
      },
      {
        selector: 'objectLiteralProperty',
        format: ['camelCase', 'UPPER_CASE', 'snake_case'], // Propiedades de literales de objeto
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeProperty',
        format: ['camelCase', 'UPPER_CASE', 'snake_case'], // Propiedades de tipos
        leadingUnderscore: 'allow',
      },
    ],
    'no-magic-numbers': [
      'warn',
      {
        ignore: [0, 1], // Permitir 0 y 1
        ignoreArrayIndexes: true,
        enforceConst: true,
      },
    ],
    'consistent-return': 'error', // Asegura que todas las funciones devuelvan un valor o no
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }], // Limitar líneas vacías
    'prefer-const': 'error', // Preferir const sobre let donde sea posible
    'react/jsx-boolean-value': ['error', 'never'], // No usar valor booleano en JSX
    'react/jsx-fragments': ['error', 'syntax'], // Usar fragmentos de JSX
    'react/jsx-no-bind': ['error', { allowFunctions: true }], // No usar .bind en JSX
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal'],
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
}
