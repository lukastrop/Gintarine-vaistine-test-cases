/// <reference types="cypress" />


describe("gintarine lt paieskos testavimas", () => {
  it("turi atidaryti produkta rezultatuose", () => {
  //cypress code
  cy.visit("https://www.gintarine.lt/")
 
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});


})