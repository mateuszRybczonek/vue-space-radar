import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import radar from './modules/radar/index'

const createStore = () => {
  return new Vuex.Store({
    plugins: [ pathify.plugin ],
    modules: {
      radar,
    }
  })
}

export default createStore