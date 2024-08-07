import { defineStore } from "pinia";
import axios from "axios";
export const useStoreRecipies = defineStore("storeRecipies", {
  state: () => ({
    raz: [1, 2, 3, 4, 5],
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
        "https://script.google.com/macros/s/AKfycbwYNA8D-po1XiLlgRFE3G1TZPi5nl09hmVQARnr0TdENmAwiZhDHWT4KZzu1Pl1hVCqgA/exec"
      );
      const data = await res.json();
      this.recipiess = data;
    },
    async asyncis() {
      axios.post(
        "https://v1.slashapi.com/asd-3/google-sheets/trHA1e60zZ/list1",
        { data }
      );
    },
  },
});
