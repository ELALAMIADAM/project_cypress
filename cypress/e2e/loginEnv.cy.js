///<reference types = 'cypress'/>  
describe('Authentification de sauce demo', () => {
    beforeEach("setUp",() => {
        let environement = Cypress.env("var") ; // pour recuperrer des variables des environmenet dans cypress
        let url ;
        switch (environement) {
            case ("integration"):
                url = "https://www.saucedemo.com/"
                break;
            case ("recette"):
                url = "https://www.saucedemo.com/recette"
                break;
            case ("preprod"):
                url = "https://www.saucedemo.com/preprod"
                break;
            default:
                url = "https://www.saucedemo.com/"
                break;
        }
        // aller vers le site
        cy.visit(url);
    });
    afterEach("tearDown",function() {
        if(this.currentTest.state === "failed"){
            cy.screenshot(`failure-${this.currentTest.title}`)
        }
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        sessionStorage.clear() // nettoyer
    });
    it('login valid',{tags:"@TNR"}, () => {
        //saisir username
        cy.get('#user-name').type('standard_user')
        // saisir password
        cy.get('#password').type('secret_sauce');
        // clicker login
        cy.get('#login-button').click();
        // verifier la page de user
        cy.url().should('include','/inventory.html');
    });
    it('login invalid',{tags:["@Smoke","@TNR"]}, () => {
        //saisir username
        cy.get('#user-name').type('standard_user')
        // saisir password
        cy.get('#password').type('secret_sauce_11');
        // clicker login
        cy.get('#login-button').click();
        // verifier le message d'erreur
        cy.get('[data-test="error"]').should('be.visible').and('contain','Username and password do not match any user in this service')
        
    });
});