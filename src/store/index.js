import Vuex from 'vuex'
import settings from './settings'
import stores from './stores'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      settings,
      stores
    }
  })
}

export default store
