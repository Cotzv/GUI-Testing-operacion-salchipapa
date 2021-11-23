import { Builder } from "selenium-webdriver";
import "chromedriver";
import homepage from "./main/ui/homePage";
import loginPage from "./main/ui/loginPages";

(async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    const user = "";
    const password = "";

    try {
        await driver.get("https://www.trello.com/");

        await homepage.clickOnLogin(driver);

        await loginPage.authenticating(driver, user, password);
    } finally {
        await driver.quit;
    }
})();
