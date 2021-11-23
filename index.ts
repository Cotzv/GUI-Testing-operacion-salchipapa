import { Builder, By, until } from "selenium-webdriver";
import "chromedriver";
import homepage from "./main/ui/homePage";
import loginPage from "./main/ui/loginPages";

(async () => {
    let driver = await new Builder().forBrowser("chrome").build();
    let user = "serqio.kay@gmail.com";
    let password = "123456789";

    try {
        await driver.get("https://www.trello.com/");

        await homepage.clickOnLogin(driver);

        await loginPage.authenticating(driver, user, password);
    } finally {
        await driver.quit;
    }
})();
