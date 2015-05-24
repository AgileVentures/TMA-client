// An example configuration file.
exports.config = {
  // directConnect: true,
  framework: 'cucumber',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'phantomjs'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: [
    'e2e/features/*.feature'
  ],

  baseUrl: 'http://localhost:9000',
  getPageTimeout: 30000,

  cucumberOpts: {
    require: 'test/e2e/features/step_definitions/*_steps.js',
    format: 'pretty'
  }
};
