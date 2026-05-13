const client = require('../utils/client');
const controls = require('../controls/controls');
const reportManager = require('../utils/reportManager');

describe('login',async function () {

    let driver;
    let ctrl;
    before(async function() {
        driver = await client();
        ctrl = await new controls(driver);
        reportManager.getActualPath();
    });

    it('welcome screen', async function() {
        try {
            const skip = await ctrl.createElement('//android.view.ViewGroup[@content-desc="Skip"]/android.view.ViewGroup');
            await ctrl.waitForElement(skip, 10000)
            await ctrl.clickOnElement(skip);
            reportManager.addDetailedLog(this, "Se muestra la pantalla de bienvenida, se procede a hacer click en skip", await reportManager.takeScreenshot(driver, ""));
        } catch(err) {
            console.error("Error: ", err);
            throw err;
        }
    });

    it('login screen', async function() {
        try {
            const user = await ctrl.createElement('//android.view.ViewGroup[@content-desc="User"]');
            await ctrl.waitForElement(user, 10000);
            reportManager.addDetailedLog(this, "Se muestra la pantalla de login, se procede a hacer click en user", await reportManager.takeScreenshot(driver, ""));
            await ctrl.clickOnElement(user);
        } catch(err) {
            console.error("Error: ", err);
            throw err;
        }
    });

    it('Sign in screen', async function() {
        try {
            const userInput = await ctrl.createElement('//android.widget.EditText[@text="Enter your username"]');
            await ctrl.waitForElement(userInput, 10000);
            reportManager.addDetailedLog(this, "Se muestra la pantalla de sign in", await reportManager.takeScreenshot(driver, ""));
        } catch(err) {
            console.error("Error al mostrar la pantalla de sign in");
            throw err;
        }
    });

    it('Sign in screen fill', async function() {
        try {
            const userInput = await ctrl.createElement('//android.widget.EditText[@text="Enter your username"]');
            const passwordInput = await ctrl.createElement('//android.widget.EditText[@text="Enter your password"]');
            const viewPassword = await ctrl.createElement('//android.view.ViewGroup[@content-desc="Enter your credentials to log in"]/android.view.ViewGroup[4]/android.widget.ImageView');
            const consentOne = await ctrl.createElement('//android.view.ViewGroup[@content-desc="Enter your credentials to log in"]/android.view.ViewGroup[5]/android.widget.ImageView');
            const consentTwo = await ctrl.createElement('//android.view.ViewGroup[@content-desc="Enter your credentials to log in"]/android.view.ViewGroup[6]');
            const signInButton = await ctrl.createElement('//android.view.ViewGroup[@content-desc="Sign In"]');
        
            await ctrl.fillElement(userInput, 'tomyee101');
            await ctrl.fillElement(passwordInput, 'Ftolb123');
            await ctrl.clickOnElement(consentOne);
            await ctrl.clickOnElement(consentTwo); 
            await ctrl.clickOnElement(viewPassword);

            reportManager.addDetailedLog(this, "Campos llenos", await reportManager.takeScreenshot(driver, ""));

            await ctrl.clickOnElement(signInButton);
        } catch(err) {
            console.error("Error al rellenar los campos para iniciar sesión");
            throw err;
        }
    });

    it('register pin popup', async function() {
        try {
            const popUp = await ctrl.createElement('//android.widget.TextView[@text="Register your PIN code"]');
            if(await ctrl.waitForElement(popUp, 50000)) {
                reportManager.addDetailedLog(this, "Se muestra el popup de registrar pin", await reportManager.takeScreenshot(driver, ""));
            } else {
                throw error;
            }
        } catch(err) {
            reportManager.addDetailedLog(this, "Error al mostrar el popup de registrar pin", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });
});