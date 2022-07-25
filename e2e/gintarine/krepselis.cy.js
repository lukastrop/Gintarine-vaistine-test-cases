// <reference types="cypress" />

describe("add tu cart function test", () => {
  it("add to cart", () => {
      cy.visit("https://www.gintarine.lt/acc-long-600-mg-snypsciosios-tabletes-n10");
      cy.wait(3000)
      
      // 5 times press of cart button
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();
      cy.wait(1000);
      cy.get('#addToCart').click();

      


  });

  it("pop up", () => {
    cy.get('.notification').should('be.visible');
  });
  
  it("cart function via changing the quantity of product", () => {
    cy.visit("https://www.gintarine.lt/acc-long-600-mg-snypsciosios-tabletes-n10");
  cy.wait(1000)
  cy.get('#addtocart_21025_EnteredQuantity').type(8);
  cy.get('#addToCart').click();
  cy.get('.notification').should('be.visible');
  });
})
