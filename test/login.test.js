const client = require('../utils/client');
const controls = require('../controls/controls');
const reportManager = require('../utils/reportManager');
require('dotenv').config();

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
        
            await ctrl.fillElement(userInput, process.env.CCB_USERNAME);
            await ctrl.fillElement(passwordInput, process.env.CCB_PASSWORD);
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

    it('click on register later button', async function() {
        try {
            const later = await ctrl.createElement('//android.widget.TextView[@text="Register later"]');
            await ctrl.clickOnElement(later);
        } catch(err) {
            reportManager.addDetailedLog(this, "Error al hacer click en el botón de hacer click en registrar después", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });

    it('click on transacts button', async function() {
        try {
            const transacts = await ctrl.createElement('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[7]');
            reportManager.addDetailedLog(this, "Se hace click en el botón de transacciones", await reportManager.takeScreenshot(driver, ""));
            await ctrl.clickOnElement(transacts);
        } catch(err) {
            reportManager.addDetailedLog(this, "Error al hacer click en el botón transacciones", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });

    it('click on transfer button', async function() {
        try {
            const label = await ctrl.createElement('//android.widget.TextView[@text="Multiple transfers"]');
            const transacts = await ctrl.createElement('(//android.widget.SeekBar[@content-desc="Bottom Sheet"])[2]/android.view.ViewGroup[3]/android.view.ViewGroup');
            if(await ctrl.waitForElement(label, 50000)) {
                reportManager.addDetailedLog(this, "Se muestra el menú de transacciones", await reportManager.takeScreenshot(driver, ""));
                await ctrl.clickOnElement(transacts);
            }
        } catch(err) {
            reportManager.addDetailedLog(this, "Error al mostrar el menú de transacciones", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });

    it('click on transfer between own accounts', async function() {
        try {
            const transactsOwn = await ctrl.createElement('//android.view.ViewGroup[@content-desc="Transfer to own accounts"]');
            if(await ctrl.waitForElement(transactsOwn, 50000)) {
                reportManager.addDetailedLog(this, "Se hará click en el botón transferencia entre cuentas propias", await reportManager.takeScreenshot(driver, ""));
                await ctrl.clickOnElement(transactsOwn);
            }
        } catch(err) {
            reportManager.addDetailedLog(this, "Error al hacer click en el botón de transferencia entre cuentas propias", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });

    it('transactions screen', async function() {
        try {
            const screenLabel = await ctrl.createElement('//android.widget.TextView[@text="Transfer detail"]');
            if(await ctrl.waitForElement(screenLabel, 50000)) {
                reportManager.addDetailedLog(this, "Se muestra la pantalla de transferencias", await reportManager.takeScreenshot(driver, ""));
            }
        } catch(err) {
            reportManager.addDetailedLog(this, "Error NO se muestra la pantalla de transferencias", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });

    it('account dropdown 1', async function() {
        try {
            const accountList = await ctrl.createElement('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]');
            const dropdown = await ctrl.createElement('(//android.view.ViewGroup[@content-desc="Select account"])[1]/android.view.ViewGroup');
            await ctrl.clickOnElement(dropdown);
            if(await ctrl.waitForElement(accountList, 50000)) {
                reportManager.addDetailedLog(this, "Se muestra la lista de cuentas", await reportManager.takeScreenshot(driver, ""));
            }
        } catch(err) {
            reportManager.addDetailedLog(this, "Error NO se muestra la pantalla de transferencias", await reportManager.takeScreenshot(driver, ""));
            throw err;
        }
    });

    it('user accounts', async function() {
        try {
            const jubilacion = await ctrl.createElement('//android.widget.TextView[@text="jubilación"]');
            const planilla = await ctrl.createElement('//android.widget.TextView[@text="planilla"]');
            const viajes = await ctrl.createElement('//android.widget.TextView[@text="viajes"]');
            
            const jubilacionId = await ctrl.createElement('//android.widget.TextView[@text="jubilación"]/following-sibling::android.widget.TextView');
            const planillaId = await ctrl.createElement('//android.widget.TextView[@text="planilla"]/following-sibling::android.widget.TextView');
            const viajesId = await ctrl.createElement('//android.widget.TextView[@text="viajes"]/following-sibling::android.widget.TextView');

            const burnedjubilacionId = '4040014583';
            const burnedplanillaId = '4020529914';
            const burnedviajesId = '4040011911';

            if(await ctrl.waitForElement(jubilacion, 5) && await ctrl.waitForElement(planilla, 5) && await ctrl.waitForElement(viajes, 5)) {
                reportManager.addDetailedLog(this, "Se muestran las 3 cuentas del usuario: jubilación, planilla y viajes", await reportManager.takeScreenshot(driver, ""));
            } else {
                throw new error;
            }

            if(await jubilacionId.getText() === burnedjubilacionId && await planillaId.getText() === burnedplanillaId
                && await viajesId.getText() === burnedviajesId) 
            {
                reportManager.addDetailedLog(this, "Se muestran los 3 ID del cuentas: 4040014583, 4020529914 y 4040011911", await reportManager.takeScreenshot(driver, ""));
            } else {
                throw new error;
            }
        } catch(err) {
            reportManager.addDetailedLog(this, "Error al comprobar las cuentas del usuario", await reportManager.takeScreenshot(driver, ""));
        }
    });

    after(function() {
        if(driver) {
            driver.deleteSession();
        }
    });
});