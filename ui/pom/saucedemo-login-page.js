exports.SauceDemoLoginPage = class SauceDemoLoginPage {

    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.usernameField = page.getByPlaceholder("Username")
        this.passwordField = page.getByPlaceholder("Password")
        this.loginButton = page.getByTestId("login-button")
    }

    async setUsernameField(username) {
        await this.usernameField.fill(username);
    }

    async setPasswordField(password) {
        await this.passwordField.fill(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}


