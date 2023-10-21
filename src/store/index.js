import { createStore } from "vuex";
export default createStore({
  state: {
    apiConfig: {
      /* appID: "51774176", */
      appID: "51776175",
      version: "5.154",
    },
    searchResults: [],
    sourceList: [],
  },
  getters: {
    isInSourceList: (state) => (itemID) => {
      let index = state.sourceList.findIndex((el) => el.id == itemID);
      if (index == -1) return false;
      else return true;
    },
  },
  mutations: {
    setSourceList(state, items) {
      state.sourceList = items;
    },
    setSearchResults(state, items) {
      state.searchResults = items;
    },
    addToSourceList(state, item) {
      state.sourceList.push(item);
      sessionStorage.setItem("sourceList", JSON.stringify(state.sourceList));
    },
    removeFromSourceList(state, item) {
      let index = state.sourceList.findIndex((el) => el.id == item.id);
      state.sourceList.splice(index, 1);
      sessionStorage.setItem("sourceList", JSON.stringify(state.sourceList));
    },
  },
  actions: {},
  modules: {},
});
