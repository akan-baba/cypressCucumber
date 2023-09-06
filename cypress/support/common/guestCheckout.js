
import { faker } from '@faker-js/faker';
const email = faker.internet.email();
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();


Cypress.Commands.add("guestCheckOutCreditCard", () => {
    cy.get('.checkout-as-guest-button').click()
    cy.get('#BillingNewAddress_FirstName').type(firstname)
    cy.get('#BillingNewAddress_LastName').type(lastname)
    cy.get('#BillingNewAddress_Email').type(email)
    cy.get('#BillingNewAddress_CountryId').select('235')
    cy.get('#BillingNewAddress_StateProvinceId').select('626')
    cy.get('#BillingNewAddress_City').type('Machy')
    cy.get('#BillingNewAddress_Address1').type('Moss Grange')
    cy.get('#BillingNewAddress_ZipPostalCode').type('M16 20AH')
    cy.get('#BillingNewAddress_PhoneNumber').type('01612261085')
    cy.get("button[onclick='Billing.save()']").click()
    cy.get('.button-1.shipping-method-next-step-button').click()
    cy.get('#paymentmethod_1').click()
    cy.creditCard()
    cy.get('.button-1.confirm-order-next-step-button').click()
    //cy.get("div[class='section order-completed'] div[class='title'] strong").should('be.visible', 'Your order has been successfully processed!')
})

Cypress.Commands.add('guestCheckOutmoneyOrder', () =>{
    cy.get('.checkout-as-guest-button').click()
    cy.get('#BillingNewAddress_FirstName').type(firstname)
    cy.get('#BillingNewAddress_LastName').type(lastname)
    cy.get('#BillingNewAddress_Email').type(email)
    cy.get('#BillingNewAddress_CountryId').select('235')
    cy.get('#BillingNewAddress_StateProvinceId').select('626')
    cy.get('#BillingNewAddress_City').type('Machy')
    cy.get('#BillingNewAddress_ZipPostalCode').type('M16 20AH')
    cy.get('#BillingNewAddress_PhoneNumber').type('01612261085')
    cy.get("button[onclick='Billing.save()']").click()
    cy.get('.button-1.shipping-method-next-step-button').click()
    cy.get('#paymentmethod_2').click()
    cy.get('.button-1.payment-info-next-step-button').click()
    cy.get('.button-1.confirm-order-next-step-button').click()
    cy.get("div[class='section order-completed'] div[class='title'] strong").should('be.visible', 'Your order has been successfully processed!')
})
