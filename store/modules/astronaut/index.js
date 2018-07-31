import { make } from 'vuex-pathify'

const state = {
  activated: false,
  deactivated: false,
  launched: false,
  floating: false,
}

export default {
  state,
  getters: { ...make.getters(state) },
  actions: { ...make.actions(state) },
  mutations: { ...make.mutations(state) }
}