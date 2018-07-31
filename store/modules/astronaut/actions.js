export default {
  activateAstronaut({ commit }) {
    commit('SET_ACTIVATED', true)
    commit('SET_DEACTIVATED', false)
  },

  deactivateAstronaut({ commit }) {
    commit('SET_ACTIVATED', false)
    commit('SET_DEACTIVATED', true)
  },

  deactivateAndFloatAstronaut ({ commit }) {
    commit('SET_LAUNCHED', false)
    commit('SET_ACTIVATED', false)
    commit('SET_DEACTIVATED', true)
    commit('SET_FLOATING', true)
  },

  launchAstronaut( { commit }) {
    commit('SET_LAUNCHED', true)
  },

  resetAstronaut ({ commit }) {
    commit('SET_LAUNCHED', false)
    commit('SET_ACTIVATED', false)
    commit('SET_DEACTIVATED', false)
    commit('SET_FLOATING', false)
  }
}
