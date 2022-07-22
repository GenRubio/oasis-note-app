import { HomePageController } from "./controllers/HomePageController.js";

document.addEventListener("DOMContentLoaded", () => {
  onDocumentReady();
});

function onDocumentReady() {
  initControllers();
}

function initControllers() {
  HomePageController.init();
}
