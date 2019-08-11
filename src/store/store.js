import Vue from "vue"
import VueX from "vuex"
import actions from "./actions.js"
import mutations from "./mutations.js"
import getters from "./getters.js"
import defaultState from "./state.js"

Vue.use(VueX)

export default new VueX.Store({
  state:defaultState,
  getters,
  mutations,
  actions,
});
