// const cucumber = require("cypress-cucumber-preprocessor").default;
// module.exports = (on, config) => {
//   on("file:preprocessor", cucumber());
// };

// cypress/plugins/index.js
const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('task', {
    updateBackstopConfig(url) {
      const configPath = path.resolve('backstop.json');
      const backstopConfig = require(configPath);

      backstopConfig.scenarios.forEach(scenario => {
        if (scenario.url === 'PLACEHOLDER_URL') {
          scenario.url = url;
        }
      });

      fs.writeFileSync(configPath, JSON.stringify(backstopConfig, null, 2));
      return null;
    },
    resetBackstopConfig() {
      const configPath = path.resolve('backstop.json');
      const backstopConfig = require(configPath);

      backstopConfig.scenarios.forEach(scenario => {
        if (scenario.url !== 'PLACEHOLDER_URL') {
          scenario.url = 'PLACEHOLDER_URL';
        }
      });

      fs.writeFileSync(configPath, JSON.stringify(backstopConfig, null, 2));
      return null;
    }
  });
};

