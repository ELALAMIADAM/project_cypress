///<reference types = 'cypress'/>  
import LoginPage from "../pages/login.page.js";

describe('Authentification de sauce demo', () => {
     beforeEach("setUp",() => {
        // aller vers le site
        cy.visit('https://www.saucedemo.com/');
    });
    afterEach("tearDown",function() {
        if(this.currentTest.state === "failed"){
            cy.screenshot(`failure-${this.currentTest.title}`)
        }
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        sessionStorage.clear() // nettoyer
    });
    it('login valid', () => {
        LoginPage.Loginapp('standard_user','secret_sauce')
        cy.url().should('include','/inventory.html');
    });
    it('login invalid', () => {
        LoginPage.Loginapp('standard_user_1','secret_sauce')
        cy.get('[data-test="error"]').should('be.visible').and('contain','Username and password do not match any user in this service')
    });
});