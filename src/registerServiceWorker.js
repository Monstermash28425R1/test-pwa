/* eslint-disable no-console */

import { register } from "register-service-worker";
import { notify } from "@kyvg/vue3-notification";
if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log("App is being served from cache by a service worker.");
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
      notify({
        title: "update found, downloading",
        type: "info",
      });
    },
    updated() {
      console.log("New content is available; please refresh.");

      notify({
        title: "update installed, please refresh",
        type: "success",
      });
      window.location.reload(true);
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    },
  });
}
