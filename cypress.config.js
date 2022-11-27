const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'b9zusi',
  e2e: {
    baseUrl: 'http://localhost:7777',
    "video": false,
    "screenshots": false,
    },
});