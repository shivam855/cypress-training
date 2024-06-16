describe("Visit the website", () => {
  before(() => {
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err, runnable) => {
      console.log('Uncaught Exception:', err.message);
      // Return false to prevent the test from failing
      return false;
    });
  });
  it("visit web page", () => {
    cy.visit("https://demoqa.com/elements/text-box",{ timeout: 100000 });
    // cy.contains('[class="category-cards"]',"Elements").click({force:true}).wait(2000);
  });
});
