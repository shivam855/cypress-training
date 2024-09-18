describe('use cypress social login plugin or any other way of logging in to web application using Google!', () => {
  it('login to the website by using google', () => {
    cy.visit('https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Ffriends');
    // cy.contains('button','Log in / Sign up').click().wait(1000);
  });
});



