///<reference types = 'cypress'/>  

class CartPage {
    elements_cart = {
        item_product : () => cy.get('[data-test="inventory-item"]')
    }

    CheckItem(){
        return this.elements_cart.item_product()
    }
}

export default new CartPage()