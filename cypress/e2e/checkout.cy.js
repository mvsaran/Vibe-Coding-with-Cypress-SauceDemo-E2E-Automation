// login to saucedemo
// add product to cart
// complete checkout
// verify order success message

import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage'; 
import OrderConfirmationPage from '../pages/OrderConfirmationPage';

describe('Checkout Process', () => {  
  const loginPage = new LoginPage();
  const productsPage = new ProductsPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const orderConfirmationPage = new OrderConfirmationPage();

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should complete the checkout process successfully', () => {
    // Login
loginPage.login('standard_user', 'secret_sauce');

    // Add product to cart
    productsPage.addProductToCart('Sauce Labs Backpack');
    productsPage.goToCart();
    // Proceed to checkout
    cartPage.proceedToCheckout();
    // Fill in checkout information
    checkoutPage.fillInCheckoutInformation('John', 'Doe', '12345');
    checkoutPage.continueToOverview();
    checkoutPage.finishCheckout();
    // Verify order success message
    orderConfirmationPage.verifyOrderSuccessMessage('THANK YOU FOR YOUR ORDER');
  });
});
