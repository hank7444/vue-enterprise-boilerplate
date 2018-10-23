module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script',
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#bulb-rules
    'plugin:vue/recommended',
  ],
  overrides: [
    {
      files: ['src/**/*', 'tests/unit/**/*', 'tests/e2e/**/*'],
      excludedFiles: 'app.config.js',
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: {
        browser: true,
      },
    },
    {
      files: ['**/*.unit.js'],
      parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
      },
      env: { jest: true },
      globals: {
        mount: false,
        shallowMount: false,
        shallowMountView: false,
        createComponentMocks: false,
        createModuleStore: false,
      },
    },
  ],
}
