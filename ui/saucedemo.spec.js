// @ts-check
const {test, expect} = require('@playwright/test');
const {SauceDemoLoginPage} = require('./pom/saucedemo-login-page');
const {SauceDemoInventoryPage} = require('./pom/saucedemo-inventory-page');

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com');
});

test('has sauce labs backpack link', async ({page}) => {
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByTestId("login-button").click()

    await expect(page.locator('a', {hasText: 'Sauce Labs Backpack'})).toBeVisible()
});

test('has sauce labs backpack link - POM', async ({page}) => {
    const loginPage = new SauceDemoLoginPage(page);
    await loginPage.login("standard_user", "secret_sauce")

    const inventoryPage = new SauceDemoInventoryPage(page);
    await inventoryPage.expectProductLinkToBeVisible('Sauce Labs Backpack')
})