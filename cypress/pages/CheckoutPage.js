// checkout page
// fill user details
// complete checkout process

class CheckoutPage {    
    fillUserDetails(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }   
    completeCheckout() {
        cy.get('#continue').click();
        cy.get('#finish').click();
    }   
}
export default CheckoutPage;





