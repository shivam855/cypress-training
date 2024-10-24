const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hmo7je",
  e2e: {
    setupNodeEvents(on, config) {
      { return require('./cypress/plugins/index.js')(on, config) }
    },
    specPattern: "cypress/integration/*{.feature,.cy.js}",
  },
});
