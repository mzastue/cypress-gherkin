import { When, Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} toggle`, (label) => {
  cy.get(`label`).contains(label).should("be.visible");
});

Then(`I see toggle options:`, (list) => {
  const radioButtons = cy.get(".radio-buttons");
  console.log(list);
  list.rawTable.map((item) => {
    radioButtons.get(".checkbox-buttons__button").should("contain", item);
  });
});

When("I click on {string} radio button", (button) => {
  cy.get(".checkbox-buttons__button").contains(button).click();
});

Then("I see products for {string} in table", (loanPurpose) => {
  const expectedItemsCountMap = new Map([
    ["Purchase", 3],
    ["Remortgage", 3],
  ]);
  cy.get("table")
    .get("tbody")
    .get("tr.row__selectable")
    .should("have.length", expectedItemsCountMap.get(loanPurpose));
});
