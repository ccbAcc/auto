class controls {

  constructor(driver) {
    this.driver = driver;
  }

  getdriver() {
    return this.driver;
  }
  
  async createElement(selector) {
    return await this.driver.$(selector);
  }

  async clickOnElement(e) {
    console.log("Se hace click en el elemento: ", e);
    await e.click();
  }

  async waitForElement(e, tm) {
    try {
      console.log("Se realiza una espera por el elemento: ", e);
      await e.waitForEnabled( {timeout : tm} );
      return true;
    } catch(e) {
      console.log("Error detallado: ", e);
      return false;
    }
  }

  async existElement(element) {
    try {
      await e.isExisting(element);
      return true;
    } catch(e) {
      console.log("Error detallado: ", e);
      throw e;
      return false;
    }
  }

  async isEnabled(element) {
    try {
      await e.isEnabled(element);
      return true;
    } catch(e) {
      console.log("Error detallado: ", e);
      return false;
    }
  }
}

module.exports = controls;