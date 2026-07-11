import {Page, Locator} from '@playwright/test';
import {BasePage} from '../pages/BasePage';

export class LoginPage extends BasePage{
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly registerLink: Locator;
    readonly forgotPasswordLink: Locator;
    readonly errorMessage: Locator;
    
    constructor(page: Page){
        super(page);
        this.emailInput = page.getByLabel('Email address');
        this.passwordInput = page.getByLabel('Password');
        this.loginButton = page.getByRole('button', {name: 'Login'});
        this.registerLink = page.getByRole('link', {name: 'Register your account'});
        this.forgotPasswordLink = page.getByRole('link', {name: 'Forgot your Password?'});
        this.errorMessage = page.getByText('Invalid email or password');
    }

    async naviagateToLogin(){
        await this.navigate('https://practicesoftwaretesting.com/login');
    }

    async login(email: string, password: string){
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async getErrorMessage(): Promise<string>{
        await this.waitFOrVisible(this.errorMessage);
        return await this.getText(this.errorMessage);
    }
    
    async clearCredentials(){
        await this.emailInput.clear();
        await this.passwordInput.clear();
    }
}