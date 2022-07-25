// <reference types="cypress" />

describe("Logino test", () => {
  it("testing login within site", () => {
      cy.visit("https://www.gintarine.lt/");
      //waiting for page to load
      cy.wait(4000);
      cy.get('.user-controls__login').click();
      cy.get('.account-controls__login > form > .account-controls__inputs > #Email').type('kebabs@maildrop.cc');
      cy.get('.account-controls__login > form > .account-controls__inputs > #Password').type('kebabs1');
      cy.wait(4000)
      cy.get('.account-controls__login > form > .account-controls__btn').click();
  });

  it("Logout should be visible", () => {
    cy.get('.logout').should('be.visible');
  });
})