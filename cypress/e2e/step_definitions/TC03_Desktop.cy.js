import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor"
import {Desktops} from '../../../pageObject/DesktopPage'
const desktopPage = new Desktops

Given('I am on the e-commerce website homepage', () => {
    cy.visit('/')
})
When('I search for {string}',(keyword) => {
    desktopPage.pageMethods.searchInput().type(keyword)
    desktopPage.pageMethods.searchhButton().click()
})

When('I select the first product', () =>{
    cy.addToCart().eq(0).click()
})

When('I complete the purchase', () =>{
    cy.selectDropDown('33', '106');
    cy.selectDropDown('102', '362')
    cy.selectDropDown('103', '366')
    cy.get('#product_attribute_104_370').click();
    cy.get('#add-to-cart-button-3').click()
    desktopPage.pageMethods.termsoFservice().click({force: true});
    desktopPage.pageMethods.checkOutButton().click()
    cy.guestCheckOutCreditCard() 
})

Then('I should see a confirmation message {string}',(message) =>{
    desktopPage.pageMethods.confirmationMessage().should('be.visible', message)
})