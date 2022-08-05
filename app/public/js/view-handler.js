import { HomePageController } from "./controllers/HomePageController.js";
import { SetFilesAction } from "./actions/SetFilesAction.js";
import { SetFoldersAction } from "./actions/SetFoldersAction.js";

document.addEventListener("DOMContentLoaded", () => {
  onDocumentReady();
});

function onDocumentReady() {
  initControllers();
  initActions();
}

function initControllers() {
  HomePageController.init();
}

function initActions() {
  SetFilesAction.init();
  SetFoldersAction.init();
}