import Vuex from 'vuex'
import stores from './stores'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      stores
    }
  })
}

export default store
