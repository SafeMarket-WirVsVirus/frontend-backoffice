import _ from 'lodash'

export default {
  /**
   * Gets all stores.
   *
   * @public
   * @param {Array} state
   * @returns {Array} stores
   */
  allStores: (state) => {
    return _.cloneDeep(state)
  },

  /**
   * Gets a single store by ID.
   *
   * @param {Array} state
   * @returns {function(...[*]=)}
   */
  getStoreByIndex: (state) => {
    return (index) => {
      const store = state[index]

      if (store == null) {
        return store
      } else {
        return _.cloneDeep(store)
      }
    }
  },

  getStoreAttributeByName: (state, getters) => {
    return (fieldName, activeStoreIndex) => {
      const store = getters.getStoreByIndex(activeStoreIndex)

      return _.get(store, fieldName)
    }
  },
  getOpeningHoursByDay: (state, getter) => {
    return (dayName, activeStoreIndex) => {
      const store = getters.getStoreByIndex(activeStoreIndex)
      const storeDayEntry = store.openingHours.find(item=>item.day === dayName)
      return _.cloneDeep(storeDayEntry)
    }
  }
}
