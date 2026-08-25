const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
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
