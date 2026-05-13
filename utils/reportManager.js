const addContext = require('mochawesome/addContext');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

class TestReporter {

    static getActualPath() {
        this.screenshotPath = path.join(
            __dirname,
            '..',
            process.env.REPORT_DIR.split('/')[1],
            process.env.REPORT_DIR.split('/')[2],
            'assets'
        );

        if(!fs.existsSync(this.screenshotPath)) {
            fs.mkdirSync(this.screenshotPath, { recursive: true });
        }
    }

    static async takeScreenshot(driver, name) {
        let screenshotName;

        if(name.length === 0) {
            screenshotName = `img_${Date.now()}.png`;
        } else {
            screenshotName = name + ".png";
        }

        console.log(this.screenshotPath);
        let imgContext = path.join(this.screenshotPath, screenshotName);
        await driver.saveScreenshot(imgContext);
        return screenshotName;
    }

    static log(testContext, msg) {
        addContext(testContext, msg);
    }

    static addScreenshot(testContext, screenshotName, title = 'Screenshot') {
        addContext(testContext, {
            title : title,
            value : `./assets/${screenshotName}`
        });
    }

    static addDetailedLog(testContext, info, screenshotName) {
        this.log(testContext, `INFO : ${info}`);
        this.addScreenshot(testContext, screenshotName, `Evidencia : ${info}`);
    }
}

module.exports = TestReporter;