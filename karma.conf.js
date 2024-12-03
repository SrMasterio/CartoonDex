process.env.CHROME_BIN = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      clearContext: false, // Deja los resultados en pantalla
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Brave'],
    singleRun: false,
    restartOnFileChange: true,
    customLaunchers: {
      Brave: {
        base: 'Chrome',
        flags: ['--no-sandbox'],
        executablePath: process.env.CHROME_BIN, // Usa Brave
      },
    },
  });
};
