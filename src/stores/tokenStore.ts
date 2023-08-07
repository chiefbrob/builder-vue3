import { defineStore } from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({
    token: "",
    user: null,
    gmapApiKey: "AIzaSyC8yRFCPtQ1Soa03uc4ZOhE7gTkPFOc2Pg",
  }),

  getters: {
    fullToken(state) {
      return state.token ? "Bearer " + state.token : null;
    },
    userName(state) {
      if (state.user) {
        return state.user.name;
      }
      return "User";
    },
  },

  actions: {
    reset() {
      this.user = null;
      this.token = "";
    },
  },
});
