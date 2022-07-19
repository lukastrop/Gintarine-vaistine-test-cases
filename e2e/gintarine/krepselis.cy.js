// <reference types="cypress" />

describe("krepselio funkcijos testavimas", () => {
  it("dedam preke i krepesli", () => {
      cy.visit("https://www.gintarine.lt/acc-long-600-mg-snypsciosios-tabletes-n10");
      cy.wait(3000)
      
      // dėsim prekę 5 kartus spaudžiant mygtuka
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.get('.notification').should('be.visible')
      


  });

  it("pop up", () => {
    cy.get('.notification').should('be.visible');
  });
  
  it("pakeisime kieki ir spausime i krepsa", () => {
    cy.visit("https://www.gintarine.lt/acc-long-600-mg-snypsciosios-tabletes-n10");
  cy.wait(1000)
  cy.get('#addtocart_21025_EnteredQuantity').type(8);
  cy.get('#addToCart').click();
  cy.get('.notification').should('be.visible');
  });
})
