const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://0.0.0.0:4000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
