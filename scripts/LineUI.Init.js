import { Router, EventManager } from "./LineUI.Class.js";

globalThis.$A = {
  emiter: new EventManager(),
  router: new Router(),
};
