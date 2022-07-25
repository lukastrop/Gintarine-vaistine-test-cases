// <reference types="cypress" />


describe("responsiveness breakpoint", () => {
  it("Desktope kiek stulpeliu turi CSS grid atributas", function () {
    //Desktope 3 produktai
    cy.visit("https://www.gintarine.lt/akcijos-4")
    cy.get('.category-products__cards').should('have.css', 'grid-template-columns', '213.698px 213.698px 213.715px')
    });

    it("mobile kiek stulpeliu ", function () {
    //mobile 2 produktai
  cy.viewport('iphone-6')
    cy.get('.category-products__cards').should('have.css', 'grid-template-columns', '163.333px 163.333px')

    
    });
   });
 

