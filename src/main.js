import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Notifications from "@kyvg/vue3-notification";
import { createMetaManager } from "vue-meta";
import i18n from "./i18n";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);
dom.watch();

createApp(App)
  .use(i18n)
  .use(store)
  .use(router)
  .use(createMetaManager())
  .use(Notifications)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
