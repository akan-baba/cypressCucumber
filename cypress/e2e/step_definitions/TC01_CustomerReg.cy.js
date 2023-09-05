import{Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import {UserRegisterPage} from '../../../pageObject/accountCreation-Login_PO'
import { faker } from '@faker-js/faker';
const registration = new UserRegisterPage
const userName = faker.internet.userName();
const email = faker.internet.email();
const firstname = faker.name.firstName();
const lastname = faker.name.lastName();

Given("I am a new customer", () => {
    cy.visit('/')
    registration.pageMethods.registerLink().click()
})

When("I complete the registration process", () => {
    registration.pageMethods.registerLink().click()
        registration.pageMethods.maleGender().click()
        registration.pageMethods.firstNameInput().type(firstname)
        registration.pageMethods.lastNameInput().type(lastname)
        registration.pageMethods.daySelect().select('20')
        registration.pageMethods.monthSelect().select('7')
        registration.pageMethods.yearSelect().select('1940')
        registration.pageMethods.emailInput().type(email)
        registration.pageMethods.userNameInput().type(userName)
        registration.pageMethods.addressInput().type('1234 Main St')
        registration.pageMethods.postCodeInput().type('M16 7RJ')
        registration.pageMethods.countyInput().type('Manchy')
        registration.pageMethods.cityInput().type('Manchester')
        registration.pageMethods.countrySelect().select('235')
        registration.pageMethods.stateSelect().select('626')
        registration.pageMethods.phoneInput().type('123-456-7890')
        registration.pageMethods.passwordInput().type('red123')
        registration.pageMethods.confirmPasswordInput().type('red123')
        registration.pageMethods.policyCheckbox().click()
        registration.pageMethods.registerButton().click()
})

Then("I should be able to create an account and log in", () => {
    registration.pageMethods.successMessage().should('be.visible', 'Your registration completed')
})