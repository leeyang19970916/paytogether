/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import "@/styles/tailwind.css";
// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";
// Composables
import { createApp } from "vue";
import { Icon } from "@iconify/vue";

// Styles
import "unfonts.css";

const app = createApp(App);

registerPlugins(app);
app.component("Icon", Icon);
app.mount("#app");
