///<reference types = 'cypress'/>  

class InventoryPage  {
    // definir les locators 
    elements_1 = {
        Add_to_cart :() => cy.get('#add-to-cart-sauce-labs-backpack'),
        Remove :() => cy.get('#remove-sauce-labs-backpack'),
        cart_number :() => cy.get('[data-test="shopping-cart-badge"]'),
        cart_link :() => cy.get('[data-test="shopping-cart-link"]'),
    }
    
    // definir les actions 
    Addtocart(){
        this.elements_1.Add_to_cart().click()
    }
    RemoveButon(){
        return this.elements_1.Remove()
    }
    CartNumber(){
        return this.elements_1.cart_number()
    }
    CartLink(){
        this.elements_1.cart_link().click()
    }

} 
export default new InventoryPage()