

Cypress.Commands.add('creditCard', () => {
    cy.get("button[class='button-1 payment-method-next-step-button']").click()
    cy.get('#CreditCardType').select('visa')
    cy.get('#CardholderName').type('John Doe')
    cy.get('#CardNumber').type('2222222')
    cy.get('#ExpireMonth').select('7')
    cy.get('#ExpireYear').select('2030')
    cy.get('#CardCode').type('456')
    cy.get('.button-1.payment-info-next-step-button').click()
    
});

