import csv from 'csvtojson'
describe('Authentification de sauce demo avec csv', () => {
    it('login with csv data', () => {
        cy.readFile("cypress/fixtures/jdd.csv").then((csvdata)=>{
            csv().fromString(csvdata).then((users)=>{
                users.forEach((user)=>{
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
        })
    });
});