// login to saucedemo
// add product to cart
// complete checkout
// verify order success message

import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Process', () => {  
  const loginPage = new LoginPage();
  const productPage = new ProductPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should complete the checkout process successfully', () => {
    // Login
    loginPage.visit();
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();

    // Add product to cart
    productPage.addFirstProductToCart();
    productPage.goToCart();
    // Click the 'Checkout' button in the cart
    cy.get('#checkout').click();
    // Fill in checkout information
    checkoutPage.fillUserDetails('John', 'Doe', '12345');
    checkoutPage.completeCheckout();
    // Verify order success message (not implemented)
  });
});
