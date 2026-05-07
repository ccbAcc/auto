const addContext = require('mochawesome/addContext');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

class TestReporter {

    static getActualPath() {
        const screenshotPath = path.join(
            __dirname,
            '..',
            process.env.REPORT_DIR.split('/')[1],
            process.env.REPORT_DIR.split('/')[2],
            'assets'
        );

        if(!fs.existsSync(screenshotPath)) {
            fs.mkdirSync(screenshotPath, { recursive: true });
        }
        
        return screenshotPath;
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