// products page
// method to add first product to cart
// method to go to cart
class ProductPage {
    addFirstProductToCart() {
        cy.get('.inventory_item').first().find('button').click();
    }   
    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}

export default ProductPage;