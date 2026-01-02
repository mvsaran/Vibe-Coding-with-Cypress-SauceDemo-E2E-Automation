// create a login page class for saucedemo
// include methods to visit page, enter username, password and click login
class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }   
    enterUsername(username) {
        cy.get('#user-name').type(username);
    }
    enterPassword(password) {
        cy.get('#password').type(password);
    }
    clickLogin() {
        cy.get('#login-button').click();
    }
}

export default LoginPage;