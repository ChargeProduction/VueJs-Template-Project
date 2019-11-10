import Vue from 'vue'
import Vuex from 'vuex'

import moduleBase from './modules/base'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasInited: false
  },
  mutations: {
  },
  modules: {
    base: moduleBase
  },
  actions: {
    /*
     * Initializes the application.
     * @param {object} vue The current vue instance.
     */
    init ({state, dispatch}, vue) {
      return dispatch('base/_init', vue).then(() => {
        Vue.set(state, 'hasInited', true)
      })
    },
    /*
     * Resets the store.
     * @param {boolean} vue The current vue instance.
     */
    reset ({state, dispatch}, vue) {
      return dispatch('base/_reset', vue).then(() => {
        Vue.set(state, 'hasInited', false)
      })
    }
  },
  getters: {
    hasInited: (state) =>
    {
      return state.hasInited
    }
  }
})
