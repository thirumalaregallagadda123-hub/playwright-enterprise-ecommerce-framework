import {test, expect} from '../../fixtures/baseFixtures';
import users from '../../test-data/users.json';

test.describe('Authentication', () => {
    
    test.beforeEach(async({loginPage})=>{
        await loginPage.naviagateToLogin();
    })
    
    test('[@Smoke] User should login successfully with valid credentials', async ({page, loginPage}) => {
    await loginPage. login(users.validUser.email, users.validUser.password);
    await expect(page).toHaveURL(/account/);
    //await expect(loginPage.userMenu).toBe Visible();
    });

    test('[@Regression] User should not login with invalid password', async ({ loginPage }) => {
    await loginPage.login(users.validUser.email, 'WrongPassword123');
    await expect( loginPage.errorMessage).toContainText('Invalid email or password');
    });

    test('[@Regression] User should not login with empty credentials', async ({ loginPage }) => {
    await loginPage.login('', '');
    await expect( loginPage.errorMessage).toContainText('Invalid email or password');
    });
})