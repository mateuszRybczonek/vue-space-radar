import { make } from 'vuex-pathify'
import actions from './actions'

const state = {
  activated: false,
  deactivated: false,
  launched: false,
  floating: false,
}

export default {
  state,
  getters: { ...make.getters(state) },
  actions: { ...make.actions(state), ...actions },
  mutations: { ...make.mutations(state) }
}
