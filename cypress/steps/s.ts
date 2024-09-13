const {Given } = require("cypress-cucumber-preprocessor/steps");

Given('I am user', () => {
    cy.visit('pp');
})