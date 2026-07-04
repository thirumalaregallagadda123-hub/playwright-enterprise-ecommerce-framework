import {test, expect} from '@playwright/test';
import {LoginPage} from '../../pages/loginPage';
import users from '../../test-data/users.json';

test('user should login successfully with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.naviagateToLogin();
    await loginPage.login(users.validUser.email, users.validUser.password);
    await expect(page).toHaveURL(/account/);
})
