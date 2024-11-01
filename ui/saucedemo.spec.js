// @ts-check
const {test, expect} = require('@playwright/test');

test('has sauce labs backpack link', async ({page}) => {
    await page.goto('https://www.saucedemo.com');

    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.getByTestId("login-button").click()

    await expect(page.getByTestId("inventory-item-name").filter({hasText: 'Sauce Labs Backpack'})).toBeVisible();
});