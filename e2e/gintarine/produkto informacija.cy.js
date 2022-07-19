// <reference types="cypress" />

describe("Ar produkto puslapyje matoma visa reikalinga informacija", () => {
  it("Tikrinam laukelius", () => {
      cy.visit("https://www.gintarine.lt/acc-long-600-mg-snypsciosios-tabletes-n10");
      cy.wait(1000)
      
      // Pristatymo laikas, kategorija, informacinis lapelis, kaina, nuotrauka
      cy.get('#main-product-img-21025').should('be.visible');
      cy.get('.price-val').should('be.visible');
      cy.get('.single-product__info-icons > :nth-child(2)').scrollIntoView().should('be.visible');
      



  });

  it("Jeigu tai nereceptinis vaistas", () => {
      if (cy.get('.single-product__info-label').scrollIntoView().should('be.visible')) {
        //turi būti nerp info
      cy.get('.single-product__left > .single-product__details > .product-accordion > .single-product__details-description > .accordion__toggle').click();
      cy.get('.single-product__left > .single-product__details > .product-accordion').contains('informacinis lapelis', { matchCase: false });
      cy.get('.single-product__info-message').contains('nereceptinis vaistas', { matchCase: false });
      }
      
    });


  it("Jeigu tai maisto papildas", () => {
      cy.visit("https://www.gintarine.lt/elevit-breastfeeding-30-kapsuliu")
      if (cy.get('.single-product__info-label').should('not.exist'))
      {
        //turi būti nerp info
      cy.get('.single-product__left > .single-product__details > .product-accordion > .single-product__details-description > .accordion__toggle').click();
      cy.get('.single-product__left > .single-product__details > .product-accordion > .single-product__details-description > .accordion__content').contains('maisto papildas', { matchCase: false });
      cy.get('.single-product__info-message').contains('maisto papildai', { matchCase: false });
      
      }
      
    });
  })  