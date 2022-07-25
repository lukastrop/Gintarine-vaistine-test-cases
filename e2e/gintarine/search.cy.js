/// <reference types="cypress" />


describe("search function test", () => {
  it("turi atidaryti produkta rezultatuose", () => {
  //cypress code
  cy.visit("https://www.gintarine.lt/")
  cy.get(':nth-child(2) > .navigation > .search-bar > #small-search-box-form > .sn-suggest > #small-searchterms').should('be.visible').type('elevit{enter}')
  cy.get('form[data-productid="22077"] > .product > .product__title > a').contains('elevit', { matchCase: false })
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});


})