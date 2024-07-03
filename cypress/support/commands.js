// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import locator from "../pages/loc";

// cypress/support/commands.js
// cypress/support/commands.js
// cypress/support/commands.js
// cypress/support/commands.js
// cypress/support/commands.js
Cypress.Commands.add('runBackstop', (action, url) => {
  cy.task('updateBackstopConfig', url).then(() => {
    cy.exec(`npx backstop ${action}`).then((result) => {
      cy.log(result.stdout);
      if (result.stderr) {
        throw new Error(result.stderr);
      }
    }).then(() => {
      cy.task('resetBackstopConfig');
    });
  });
});





Cypress.Commands.add("Login", (url, user, pass) => {
  cy.visit(url);
  locator.getLocator("userName").type(user);
  locator.getLocator("password").type(pass);
  locator.getLocator("submitBtn").contains("Login").click();
  cy.contains("h6", "Dashboard").should("be.visible");
});
