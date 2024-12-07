import { createStore } from 'vuex';

const store = createStore({
  state: {
    keyword: '27',
  },
  mutations: {
    setKeyword(state, newKeyword) {
      state.keyword = newKeyword;
    },
  },
});

export default store;
