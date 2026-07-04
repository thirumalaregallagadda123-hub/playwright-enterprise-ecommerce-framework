import {Page, Locator, expect} from '@playwright/test';
export class BasePage{
    protected readonly page: Page;
    constructor(page: Page){
        this.page = page;
    }
    async navigate(url: string): Promise<void>{
        await this.page.goto(url);
    }
    async click(locator: Locator): Promise<void>{
        await locator.click();
    }
    async fill(locator:Locator, value: string): Promise<void>{
        await locator.fill(value);
    }
    async type(locator: Locator, value: string): Promise<void>{
        await locator.pressSequentially(value);
    }
    async getText(locator: Locator): Promise<string>{
        return (await locator.textContent())?.trim() ?? '';
    }
    async isVisible(locator: Locator): Promise<boolean>{
        return await locator.isVisible();
    }
    async waitFOrVisible(locator: Locator): Promise<void>{
        await locator.waitFor({state: 'visible'});
    }
    async waitForHidden(locator: Locator): Promise<void> {
        await locator.waitFor({state: 'hidden'});
    }
    async scrollIntoView(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
    }
    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }
    async getTitle(): Promise<string> {
        return this.page.title();
    }
    async getURL(): Promise<string> {
        return this.page.url();
    }
    async expectVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }
    async expectText(locator: Locator, expected: string): Promise<void> {
        await expect(locator).toHaveText(expected);
    }
    async takeScreenshot(name: string): Promise <void>{
        await this.page.screenshot({path: `screenshots/${name}.png, fullPage: true`});
    }
    async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
    }
    async pressEnter(locator: Locator) {
    await locator.press('Enter');
    }
    async expectURLContains(url: string) {
    await expect(this.page).toHaveURL(new RegExp(url));
    }

}