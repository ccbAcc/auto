const d = require('../utils/client');
const controls = require('../controls/controls');
const methodsclss = require('../views/appCarrusel');

describe('prueba de concepto', async function () {
    
    let driver;
    let methods;

    before(async function () {
        driver = await d();
        methods = new methodsclss(driver);
    });

    it('Hacer click en skip', async function () {
        await methods.pressSkipIfExists(this);
        await methods.pressUserButtonToLogin(this);
    });

    after(async function () {
        if(driver) {
            await driver.deleteSession();
        }
    });
});

describe('prueba de concepto 2', async function () {
    
    let driver;
    let methods;

    before(async function () {
        driver = await d();
        methods = new methodsclss(driver);
    });

    it('Hacer click en skip', async function () {
        await methods.pressSkipIfExists(this);
        await methods.pressUserButtonToLogin(this);
    });

    after(async function () {
        if(driver) {
            await driver.deleteSession();
        }
    });
});
