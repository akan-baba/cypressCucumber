export class Desktops {

    webLocators ={
        searchInput:'#small-searchterms',
        searchhButton:"button[class='button-1 search-box-button']",
        termsoFservice:'#termsofservice',
        checkOutButton:'#checkout',
        confirmationMessage:"div[class='section order-completed'] div[class='title'] strong"
    }

    pageMethods = {
        searchInput: () => cy.get(this.webLocators.searchInput),
        searchhButton: () => cy.get(this.webLocators.searchhButton),
        termsoFservice: () => cy.get(this.webLocators.termsoFservice),
        checkOutButton: () => cy.get(this.webLocators.checkOutButton),
        confirmationMessage: () => cy.get(this.webLocators.confirmationMessage)
        
    }
}