import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./assets/tailwind.css";
import "./style.css";
import "./assets/tailwind.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
