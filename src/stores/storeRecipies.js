import { defineStore } from "pinia";
import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    amogus: "Aleee",
    data: [
      {
        name: "name",
      },
    ],
    recipiess: null,
  }),
  getters: {},
  actions: {
    async getRecipies() {
      const res = await fetch(
        "	https://v1.slashapi.com/asd-3/google-sheets/trHA1e60zZ/list1"
      );
      const data = await res.json();
      this.recipiess = data;
    },
    async asyncis() {
      axios.post(
        "https://v1.slashapi.com/asd-3/google-sheets/trHA1e60zZ/list1",
        { data: this.data }
      );
    },
  },
});
