const caps = {
  platformName: 'Android',
  'appium:platformVersion': '13.0',
  'appium:deviceName': 'Samsung Galaxy S23',
  'appium:automationName': 'UiAutomator2',

  'bstack:options': {
    userName: process.env.BROWSERSTACK_USERNAME,
    accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
    appiumVersion: '2.0.0',
    app: 'bs://<app-id-subido>',
    projectName: 'Android App Tests',
    buildName: 'Android Build 1',
    sessionName: 'Login test'
  }
};