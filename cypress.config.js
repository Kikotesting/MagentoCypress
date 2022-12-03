const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b9zusi',
  e2e: {
    "video": false,
    "screenshots": false,
    },
});