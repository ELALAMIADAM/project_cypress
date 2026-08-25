///<reference types = 'cypress'/>  

class LoginPage {
    // definir les locators 
    elements = {
        username :() => cy.get('#user-name'),
        password :() => cy.get('#password'),
        button_login :() => cy.get('#login-button'),
        error_msg :() => cy.get('[data-test="error"]')   
    }
    
    // definir les actions 
    SaisirUsername(u){
        this.elements.username().type(u)
    }
    SaisirPassword(p){
        this.elements.password().type(p)
    }
    ClickLogin(){
        this.elements.button_login().click()
    }
    checkMessage(){
        return this.elements.error_msg()
    }

    Loginapp(u,p){
        this.SaisirUsername(u)
        this.SaisirPassword(p)
        this.ClickLogin()
    }

    

} 
export default new LoginPage()