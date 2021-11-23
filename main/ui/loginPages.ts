import { By, WebDriver, until } from 'selenium-webdriver';

class LoginPage {
    private userName = By.id('user');

    private LoginBtn = By.id('login');

    private passwordLogin = By.id('password');

    private finalLogInBtn = By.className('css-19r5em7');

    async authenticating(driver: WebDriver, user: string, password: string) {
        await driver.wait(until.urlContains('login'));
        await driver.findElement(this.userName).sendKeys(user);
        await driver.findElement(this.LoginBtn).click();

        await driver.wait(
            until.urlContains('login?application=trello&continue'),
        );
        await driver.findElement(this.passwordLogin).sendKeys(password);
        await driver.findElement(this.finalLogInBtn).click();
    }
}
export default new LoginPage();
