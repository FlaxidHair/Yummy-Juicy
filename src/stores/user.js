import { defineStore } from "pinia";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import Registration from "../components/auth/Registration.vue";
import Login from "../components/auth/Login.vue";

export const useUser = defineStore("user", {
  state: () => ({
    user: null,
    dialog: false,
    dialog2: false,
    userEmailRegistration: "",
    userPassRegistration: "",
    userEmailLogin: "",
    userPassLogin: "",
    message: "",
    isLogin: false,
    component: Login,
    auth: null,
    tooltipShow: false,
  }),
  getters: {},
  actions: {
    async register() {
      createUserWithEmailAndPassword(
        getAuth(),
        this.userEmailRegistration,
        this.userPassRegistration
      )
        .then((data) => {
          this.message = "Регистрация завершена!";
          this.dialog2 = true;
          this.component = Login;
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/email-already-in-use") {
            this.message = "Пользователь уже существует!";
            this.dialog2 = true;
          } else if (error.code == "auth/invalid-email") {
            this.message = "Неправильно введен Email!";
            this.dialog2 = true;
          } else if (error.code == "auth/weak-password") {
            this.message = "Пароль должен содержать 6 символов!";
            this.dialog2 = true;
          } else {
            this.message = "Ошибка регистрации!";
            this.dialog2 = true;
          }
        });
    },
    async login() {
      signInWithEmailAndPassword(
        getAuth(),
        this.userEmailLogin,
        this.userPassLogin
      )
        .then((data) => {
          this.message = "Вы успешно вошли!";
          this.dialog2 = true;
          this.isLogin = true;
          setTimeout(() => {
            this.dialog2 = false;
          }, 1500);
        })
        .catch((error) => {
          if (error.code == "auth/invalid-credential") {
            this.message = "Неправильно введен Email или пароль!";
            this.dialog2 = true;
          } else if (error.code == "auth/invalid-email") {
            this.message = "Неправильно введен Email или пароль!";
            this.dialog2 = true;
          } else {
            this.message = "Ошибка регистрации!";
            this.dialog2 = true;
          }
        });
    },
    logout() {
      signOut(this.auth).then(() => {
        routerKey.push("/");
      });
    },
  },
});
