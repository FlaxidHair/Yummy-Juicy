import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import colors from "vuetify/util/colors";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import App from "./App.vue";
import "./assets/main.css";
import "@mdi/font/css/materialdesignicons.css";
import { initializeApp } from "firebase/app";
import router from "./router/router";
const firebaseConfig = {
  apiKey: "AIzaSyB8fNCFypsoi_Fyl17Mlqq-9ixpVt9Ktzs",
  authDomain: "recipe-cie.firebaseapp.com",
  databaseURL: "https://recipe-cie-default-rtdb.firebaseio.com",
  projectId: "recipe-cie",
  storageBucket: "recipe-cie.appspot.com",
  messagingSenderId: "959127324116",
  appId: "1:959127324116:web:8555d92217a1251e19c241",
};
initializeApp(firebaseConfig);

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.red.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
        },
      },
    },
  },
});

const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.use(pinia);
app.mount("#app");
