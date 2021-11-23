import { By, WebDriver } from 'selenium-webdriver';

class HomePage {
    private logginButton = By.className('btn btn-sm btn-link text-primary');

    async clickOnLogin(driver: WebDriver) {
        await driver.findElement(this.logginButton).click();
    }
}
export default new HomePage();
