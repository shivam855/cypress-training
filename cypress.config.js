const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    // specPattern: "cypress/integration/*{.feature,.cy.js}",
    specPattern: "cypress/integration/*.feature",
  },
});
