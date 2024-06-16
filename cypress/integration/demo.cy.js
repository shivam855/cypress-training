// const { invoke } = require("cypress/types/lodash");

describe("Tool tip feature", () => {
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log('Uncaught Exception:', err.message);
      return false;
    });
  });
  it("visit local host and validate the tool tip", () => {
    cy.visit("http://127.0.0.1:5500/index.html",{ timeout: 100000 });
    cy.get('div.tooltip').realHover('mouse');
    cy.contains('This is a tooltip with text!').should('be.visible')
  });
});
