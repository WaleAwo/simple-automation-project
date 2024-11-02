const {expect} = require("@playwright/test");
exports.SauceDemoInventoryPage = class SauceDemoInventoryPage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
    }

    async expectProductLinkToBeVisible(productName) {
        await expect(this.page.locator('a', {hasText: productName})).toBeVisible();
    }
}