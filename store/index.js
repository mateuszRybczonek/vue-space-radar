import Vuex from 'vuex'
import pathify from 'vuex-pathify'
import radar from './modules/radar'
import page from './modules/page'
import astronaut from './modules/astronaut'

const createStore = () => {
  return new Vuex.Store({
    plugins: [ pathify.plugin ],
    modules: {
      astronaut,
      radar,
      page,
    }
  })
}

export default createStore