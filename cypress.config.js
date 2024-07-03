const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hmo7je",
  e2e: {
    setupNodeEvents(on, config) {
      {
        require('@cypress/code-coverage/task')(on, config);
        require("./cypress/plugins/index.js")(on, config);
        return config
      }
    },
    specPattern: "cypress/integration/*{.feature,.cy.js}",
  },
});
