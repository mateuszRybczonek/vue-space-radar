import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import radar from './modules/radar'
import page from './modules/page'

const createStore = () => {
  return new Vuex.Store({
    plugins: [ pathify.plugin ],
    modules: {
      radar,
      page,
    }
  })
}

export default createStore