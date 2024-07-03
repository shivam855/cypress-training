// // const { invoke } = require("cypress/types/lodash");

// describe("Tool tip feature", () => {
//   before(() => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//       console.log('Uncaught Exception:', err.message);
//       return false;
//     });
//   });
  
//   // it("visit local host and validate the tool tip", () => {
//   //   cy.visit("https://stage.naas.maersk.com/dashboard");
//   // });


// });

// cypress/integration/sample_test.js
// cypress/integration/sample_test.js
// cypress/integration/sample_test.js
// cypress/integration/sample_test.js
describe('Visual Regression Testing with BackstopJS', () => {
  it('Should match the visual baseline', () => {
    cy.visit('https://github.com/garris/BackstopJS');
    cy.url().then((url) => {
      cy.wait(2000)
      cy.runBackstop('test', url);
    });
  });
});



