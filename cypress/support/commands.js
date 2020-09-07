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
Cypress.Commands.add("login", (login, password) => {
  cy.visit(`${Cypress.env("baseUrl")}/bp/login`);
  cy.get(`input#username`).type(login);
  cy.get(`input#password`).type(password);
  cy.get(`button[type=submit]`).click();

  cy.request({
    url: "http://localhost:8001/api/v1/auth/jwt/obtain-token",
    method: "POST",
    body: {
      username: login,
      password: password,
    },
  });
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
