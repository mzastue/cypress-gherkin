import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const baseUrl = Cypress.env("baseUrl");

Given(`I am on {string}`, (url) => {
  cy.visit(`${baseUrl}${url}`);
});

Then(`I am redirected to {string}`, (url) => {
  cy.url().should("eq", `${baseUrl}${url}`);
});

When("I click {string}", (label) => {
  cy.get(`button`).contains(label).click();
});

Given("I am logged as {string}", (user) => {
  const login = user === "Broker" ? "Broker3@mailinator.com" : "";
  cy.login(login, Cypress.env("userPassword"));
});

And("I am on {string} application step", (step) => {
  const stepsMap = new Map([["Product Selection", 1]]);

  cy.visit(`${baseUrl}/bp/application/4?steps=${stepsMap.get(step)}`);
});
