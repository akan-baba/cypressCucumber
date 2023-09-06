Cypress.Commands.add("linkText", () => {
  cy.get("a[href*='/']");
});



  Cypress.Commands.add("addToCart", () => {
    cy.get('[class="button-2 product-box-add-to-cart-button"]');
  }); 


  Cypress.Commands.add('addToBasket', () => {
    cy.get('button:contains("Add to cart")');


  })

 Cypress.Commands.add('selectOption', () => {
  cy.get('.valid')
});

Cypress.Commands.add('selectDropDown', (dataAttrValue, optionDataAttrValue) => {
  cy.get(`select[data-attr="${dataAttrValue}"]`).should('be.visible').then(($select) => {
    const optionSelector = `option[data-attr-value="${optionDataAttrValue}"]`;
    const optionValue = Cypress.$(optionSelector).val();
    cy.wrap($select).select(optionValue).trigger('change');
  });
});
  