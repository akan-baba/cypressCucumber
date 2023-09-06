import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { UserRegisterPage } from '../../../pageObject/accountCreation-Login_PO'
const registration = new UserRegisterPage


//User login with valid credentials

Given('User is on the login page', () => {
    cy.visit('/')
    registration.pageMethods.loginLink().click()
})
When('I log in with my valid {string} and {string}', (userName, password) => {
    registration.pageMethods.loginUsername().type(userName)
    registration.pageMethods.loginPwd().type(password)
    
})

Then('Verify title of the web page {string}', (title) => { 
    registration.pageMethods.loginBtn().click()
    cy.title().should('eq', title)
})

//User login with invalid credentials

Given('User navigates to the login page',() =>{
    cy.visit('/')
    registration.pageMethods.loginLink().click()
})
When('I log in with invalid details {string} and {string}',(userName, password) =>{
    registration.pageMethods.loginUsername().type(userName)
    registration.pageMethods.loginPwd().type(password)
})
Then('Verify error message {string}',() =>{
    registration.pageMethods.loginBtn().click()
    cy.get("[class='message-error validation-summary-errors']").should('be.visible', 'Login was unsuccessful.')
})

