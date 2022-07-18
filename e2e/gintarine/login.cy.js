// <reference types="cypress" />

describe("Logino testavimas", () => {
  it("gintarine login testavimas", () => {
      cy.visit("https://www.gintarine.lt/");
      //reikia palaukti nes neuzloadina logino
      cy.wait(4000);
      cy.get('.user-controls__login').click();
      cy.get('.account-controls__login > form > .account-controls__inputs > #Email').type('kebabs@maildrop.cc');
      cy.get('.account-controls__login > form > .account-controls__inputs > #Password').type('kebabs1');
      cy.wait(4000)
      cy.get('.account-controls__login > form > .account-controls__btn').click();
  });

  it("Turi atsirasti mygtukas atsijungti", () => {
    cy.get('.logout').should('be.visible');
  });
})