const controls = require('../controls/controls');
const reportManager = require('../utils/reportManager');
const path = require('path');

class methods {
    constructor(driver) {
        this.driver = driver;
        this.c = new controls(driver);
    }

    async pressSkipIfExists(context) {
        try {
            const e = await this.c.createElement('//android.view.ViewGroup[@content-desc="Skip"]/android.view.ViewGroup');

            if(await this.c.waitForElement(e, 50000)) {
                const testDir = reportManager.getActualPath();
                const screenshotName = `error_${Date.now()}.png`;
                console.log('Se muestra el botón skip');
                await this.c.clickOnElement(e);
                const fullPath = path.join(testDir, screenshotName);
                console.log(fullPath);
                await this.driver.saveScreenshot(fullPath);
                reportManager.addDetailedLog(context, "Se visualiza la pantalla de skip", screenshotName);
                } else {
                console.log('NO SE MUESTRA NADA');
            }
        } catch(err) {
            console.error("Error: ", err);
            throw err;
        }
    }

    async pressUserButtonToLogin(context) {
        try {
            const testDir = reportManager.getActualPath();
            const screenshotName = `error_${Date.now()}.png`;
            this.c.waitForElement(await this.c.createElement('~User'), 20000)
            await this.c.clickOnElement(await this.c.createElement('~User'));
            const fullPath = path.join(testDir, screenshotName);
            console.log(fullPath);
            await this.driver.saveScreenshot(fullPath);
            reportManager.addDetailedLog(context, "Se visualiza la pantalla de login", screenshotName);
        } catch(err) {
            console.error("Error: ", err);
            throw err;
        }
    }
}

module.exports = methods;