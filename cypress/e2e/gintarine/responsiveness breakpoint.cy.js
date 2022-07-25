// <reference types="cypress" />


describe("responsiveness breakpoint test", () => {
  it("the css grid template changes the number of columns", function () {
    //Desktop version 3 columns by default
    cy.visit("https://www.gintarine.lt/akcijos-4")

    // Cypress does not recognize the selector "p::before"
    // because the jQuery engine does not support them
    // so we get the content through the computed style
    // see https://codepen.io/chriscoyier/pen/Pzzawj
    cy.window().then((win) => {
      cy.get('.category-products__cards').then(($el) => {
            .filter((k, el) => {
        const color = window.getComputedStyle(el).grid - template - columns
        return color === 
          })
        })    })


        it("mobile kiek stulpeliu ", function () {
          //mobile 2 products
          cy.viewport('iphone-6')
          cy.get('.category-products__cards').should('have.css', 'grid-template-columns', '163.333px 163.333px')

        })

