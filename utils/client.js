const { remote } = require('webdriverio');

async function driver() {
  return await remote({
      automationProtocol: 'webdriver',
      protocol: 'http',
      hostname: 'localhost',
      port: 4723,
      path: '/',

      capabilities: {
        platformName: 'Android',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Android Emulator',
        'appium:app': 'C:/Users/ccb/Documents/qa-automation/apps/ccb.apk',
        "appium:autoGrantPermissions": true,
        "appium:gpsEnabled": true,
        "appium:locationServicesAuthorized": true
      }
  });
}

module.exports = driver;