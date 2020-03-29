import Vuex from 'vuex'
import settings from './settings'
import stores from './stores'
import notifications from './notifications'

const store = () => {
  return new Vuex.Store({
    strict: true,
    modules: {
      settings,
      stores,
      notifications
    }
  })
}

export default store
