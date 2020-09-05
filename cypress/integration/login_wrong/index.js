import { When, Then } from "cypress-cucumber-preprocessor/steps";

/*
  Given I am on Login page
  When I type broker login
  And I provide password for broker
  When I click login button
  Then I can see logged area
*/

const baseUrl = Cypress.env("baseUrl");

Given(`I am on Login page`, () => {
  cy.visit(`${baseUrl}/bp/login`);
});

When("I type broker login", () => {
  cy.get(`#username`).type("Broker3@mailinator.com");
});

When("I provide password for broker", () => {
  cy.get(`#password`).type(Cypress.env("userPassword"));
});

When("I click login button", () => {
  cy.get("button[type='submit']").click();
});

Then("I can see logged area", () => {
  cy.url().should("eq", `${baseUrl}/bp/dashboard`);
});
