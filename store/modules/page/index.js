import { make } from 'vuex-pathify'

const state = {
  page: 'index',
}

export default {
  state,
  getters: { ...make.getters(state) },
  actions: { ...make.actions(state) },
  mutations: { ...make.mutations(state) }
}