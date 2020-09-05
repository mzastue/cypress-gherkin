import { Given } from "cypress-cucumber-preprocessor/steps";

const baseUrl = Cypress.env("baseUrl");

Given(`I am on {string}`, (url) => {
  console.log(Cypress.env());
  cy.visit(`${baseUrl}${url}`);
});

Then(`I am redirected to {string}`, (url) => {
  cy.url().should("eq", `${baseUrl}${url}`);
});

When("I click {string}", (label) => {
  cy.get(`button`).contains(label).click();
});
