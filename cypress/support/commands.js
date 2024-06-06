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

Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  if (email) {
    cy.get("#mail").type(email);
  }
  if (password) {
    cy.get("#pass").type(password);
  }
  cy.contains("Submit").click();
});

Cypress.Commands.add("fillingForm", (title, description, authors) => {
  cy.contains("Add new").click();
  if (title) {
    cy.get("#title").type(title);
  }
  if (description) {
    cy.get("#description").type(description);
  }
  if (authors) {
    cy.get("#authors").type(authors);
  }
});

Cypress.Commands.add("fillingForm", (title, description, authors) => {
  cy.contains("Add new").click();
  if (title) {
    cy.get("#title").type(title);
  }
  if (description) {
    cy.get("#description").type(description);
  }
  if (authors) {
    cy.get("#authors").type(authors);
  }
});

Cypress.Commands.add("addBooks", () => {
  cy.contains("Submit").click();
});

Cypress.Commands.add("checkBox", () => {
  cy.get("#favorite").click();
});

Cypress.Commands.add("validation", (selector) => {
  cy.get(selector).then((elements) => {
    expect(elements[0].checkValidity()).to.be.false;
    expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
  });
});
