import { createStore } from "vuex";
export default createStore({
  state: {
    apiConfig: {
      appID: "51774176",
/*       appID: "51776175", */
      version: "5.154",
    },
    searchResults: [],
    sourceList: [],
    friendsInSource: []
  },
  getters: {
    isInSourceList: (state) => (itemID) => {
      let index = state.sourceList.findIndex((el) => el.id == itemID);
      if (index == -1) return false;
      else return true;
    },
    getFriendsInSource: (state) => {
      return state.friendsInSource; 
    },
  },
  mutations: {
    setSourceList(state, items) {
      state.sourceList = items;
    },
    setFriendsInSource(state, items) {
      state.friendsInSource = items;
      localStorage.setItem("friendsInSource", JSON.stringify(state.friendsInSource));
    },
    setSearchResults(state, items) {
      state.searchResults = items;
    },
    addToSourceList(state, item) {
      state.sourceList.push(item);
      localStorage.setItem("sourceList", JSON.stringify(state.sourceList));
    },
    removeFromSourceList(state, item) {
      let index = state.sourceList.findIndex((el) => el.id == item.id);
      state.sourceList.splice(index, 1);
      localStorage.setItem("sourceList", JSON.stringify(state.sourceList));
    },
  },
  actions: {

  },
  modules: {},
});
