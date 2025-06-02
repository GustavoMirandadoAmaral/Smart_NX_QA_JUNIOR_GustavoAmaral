const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    setupNodeEvents(on, config) {
      addCucumberPreprocessorPlugin(on, config, {
        stepDefinitions: [
          'cypress/e2e/features/login/*.js',
          'cypress/e2e/features/pesquisaModuloPIM/*.js',
          'cypress/e2e/features/telaModuloPIM/*.js'
        ]
      });
      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});