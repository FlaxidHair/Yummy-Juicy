import { defineStore } from "pinia";
export const useUser = defineStore("user", {
  state: () => ({
    user: null,
  }),
  getters: {
    getterUser() {
      return this.user;
    },
    getterCheckUser() {
      return this.user !== null;
    },
  },
});
