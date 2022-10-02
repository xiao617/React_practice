import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.cy.ts',
    baseUrl:"http://localhost:3000",
    setupNodeEvents(on, config) {
      
      require('@cypress/code-coverage/task')(on, config)
      // // // include any other plugin code...
      
      // // // It's IMPORTANT to return the config object
      // // // with any changed environment variables
      // on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
      return config
    },
    reporter:"junit",
    reporterOptions:{
      "mochaFile": "tests/test-output-[hash].xml"
    }
  },
});
