describe("responsiveness breakpoint test", () => {
  it("the css grid template changes the number of columns", function () {
    //Desktop version 3 columns by default
    cy.visit("https://www.gintarine.lt/akcijos-4")

    cy.window().then((win) => {
      cy.get('.category-products__cards').then(($el) => {
            .filter((k, el) => {
        const color = window.getComputedStyle(el).grid - template - columns
        return color === 
          })
        })    })


        it("mobile should contain 2 columns ", function () {
          cy.viewport('iphone-6')
          cy.get('.category-products__cards').should('have.css', 'grid-template-columns', '163.333px 163.333px')

        })

