const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // reporter Mochawesome
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: false,
    html: false,
    json: true
    },
    video: true,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    // plugin tags
    const { plugin: cypressGrepPlugin } = require("@cypress/grep/plugin")
    cypressGrepPlugin(config)
    },
    
    
  },
  
});
