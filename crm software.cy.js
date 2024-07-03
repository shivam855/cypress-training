describe('FreeCRM Sign Up with Email Only', () => {
  it('should allow a user to sign up using only an email address', () => {
    // Visit FreeCRM website
    cy.visit('https://freecrm.com/');
    cy.contains('Sign Up').click();
    cy.origin('https://api.cogmento.com',() => {
      cy.get('[placeholder="Email address"]').type('s.jyoshna007@gmail.com'); 
    })

    
    // Fill in the email addresses
    
    
    
    // Submit the form
    //cy.get('button[type="submit"]').click();
    
    // Verify the confirmation message
    //cy.contains("ui message").should('be.visible');
  });
});
