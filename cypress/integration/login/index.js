import { When } from "cypress-cucumber-preprocessor/steps";

When(`I provide {string} as {string}`, (label, value) => {
  const val = value === "Password" ? Cypress.env("userPassword") : value;
  cy.get(`input#${label.toLowerCase()}`).type(val);
});
