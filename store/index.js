import Vuex from "vuex"
// import createPersistedState from "vuex-persistedstate"

const createStore = () => {
  return new Vuex.Store({
    // state: コンポーネントでいうdataみたいなもの
    state: function () {
      return {
        message: "count number",
        counter: 0,
      };
    },
    // stateを変更するのはmutation
    mutations: {
      doit: function (state) {
        const n = Math.floor(Math.random() * 10);
        state.counter += n;
        state.message = 'add ' + n + "!";
      },
      reset: function (state) {
        state.counter = 0;
        state.message = "reset now";
      },
    },

    // plugins: [
    //   createPersistedState(),
    // ],
  });
}

export default createStore