export class UserRegisterPage {
    //--------Registration page selectors--------
    webLocators = {
        registerLink: '.ico-register',
        maleGender: '#gender-male',
        femaleGender: '#gender-female',
        firstNameInput: '#FirstName',
        lastNameInput: '#LastName',
        daySelect: "select[name='DateOfBirthDay']",
        monthSelect: "select[name='DateOfBirthMonth']",
        yearSelect: "select[name='DateOfBirthYear']",
        emailInput: '#Email',
        userNameInput: '#Username',
        addressInput: '#StreetAddress',
        postCodeInput: '#ZipPostalCode',
        countyInput: '#County',
        cityInput: '#City',
        countrySelect: '#CountryId',
        stateSelect: "#StateProvinceId",
        phoneInput: '#Phone',
        passwordInput: '#Password',
        confirmPasswordInput: '#ConfirmPassword',
        policyCheckbox: "#accept-consent",
        registerButton: '#register-button',
        successMessage: '.result',
        errorMessage: '.message-error > ul > li',


        //...........login page selectors--------------------   
        
        loginLink: '.ico-login',
        loginUsername: '#Username',
        loginPwd: '#Password',
        loginBtn: "button[class='button-1 login-button']",
        logOutBtn: '.ico-logout',
        pwdRecovery: "a[href='/passwordrecovery']",
        recoveryEmail: '#Email',
        recoveryBtn: "button[name='send-email']",
        loginErrorMessage: '.message-error',
        pwdRecoveryMessage: '.content'

    }

    pageMethods = {
        
        registerLink: () => cy.get(this.webLocators.registerLink),
        maleGender: () => cy.get(this.webLocators.maleGender),
        femaleGender: () => cy.get(this.webLocators.femaleGender),
        firstNameInput: () => cy.get(this.webLocators.firstNameInput),
        lastNameInput: () => cy.get(this.webLocators.lastNameInput),
        daySelect: () => cy.get(this.webLocators.daySelect),
        monthSelect: () => cy.get(this.webLocators.monthSelect),
        yearSelect: () => cy.get(this.webLocators.yearSelect),
        emailInput: () => cy.get(this.webLocators.emailInput), 
        userNameInput: () => cy.get(this.webLocators.userNameInput),
        addressInput: () => cy.get(this.webLocators.addressInput),
        postCodeInput: () => cy.get(this.webLocators.postCodeInput),
        countyInput: () => cy.get(this.webLocators.countyInput),
        cityInput: () => cy.get(this.webLocators.cityInput),
        countrySelect: () => cy.get(this.webLocators.countrySelect),
        stateSelect: () => cy.get(this.webLocators.stateSelect),
        phoneInput: () => cy.get(this.webLocators.phoneInput),
        passwordInput: () => cy.get(this.webLocators.passwordInput),
        confirmPasswordInput: () => cy.get(this.webLocators.confirmPasswordInput),
        policyCheckbox: () => cy.get(this.webLocators.policyCheckbox),
        registerButton: () => cy.get(this.webLocators.registerButton),
        successMessage: () => cy.get(this.webLocators.successMessage).should('be.visible', 'Your registration completed'),
        errorMessage: () => cy.get(this.webLocators.errorMessage).should('be.visible', 'The specified email already exists'),







    }
}