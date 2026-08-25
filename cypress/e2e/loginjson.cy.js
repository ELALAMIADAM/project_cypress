///<reference types = 'cypress'/>  
describe('Authentification de sauce demo', () => {
    it('login with json liste fixtures', () => {
        cy.fixture('jdd.json').then((data) => {
            data.forEach((user)=>{
                cy.visit("https://www.saucedemo.com/")
                cy.get('#user-name').type(user.username)
                cy.get('#password').type(user.password)
                cy.get('#login-button').click()
                if(user.result === "success"){
                    cy.url().should('include','/inventory.html')
                } if(user.result === "failed") {
                    cy.get('[data-test="error"]').should('be.visible')

                }
            })
        })
    });
    
});