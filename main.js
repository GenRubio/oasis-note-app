const { app } = require("electron");
const url = require('url')
const MainWindow = require('./src/windows/MainWindowController');

if (require("electron-squirrel-startup")) {
  app.quit();
}
app.on("ready", () => {
  MainWindow.init();
});
