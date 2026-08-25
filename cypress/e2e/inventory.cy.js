///<reference types = 'cypress'/>  
import LoginPage from "../pages/login.page.js";
import InventoryPage from "../pages/inventory.page.js";
import CartPage from "../pages/Cart.page.js";
describe('Authentification de sauce demo', () => {
     beforeEach("setUp",() => {
        // aller vers le site
        cy.visit('https://www.saucedemo.com/');
        LoginPage.Loginapp('standard_user','secret_sauce')
        cy.url().should('include','/inventory.html');
    });
    afterEach("tearDown",function() {
        if(this.currentTest.state === "failed"){
            cy.screenshot(`failure-${this.currentTest.title}`)
        }
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        sessionStorage.clear() // nettoyer
    });
    it('Cart', () => {
        InventoryPage.Addtocart()
        InventoryPage.RemoveButon().should('be.visible')
        InventoryPage.CartNumber().should('contain.text','1')
        InventoryPage.CartLink();
        cy.url().should('include','/cart.html')

        CartPage.CheckItem().should('be.visible')
    });

});