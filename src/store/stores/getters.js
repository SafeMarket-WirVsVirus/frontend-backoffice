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

  /**
   * Gets a store attribute by name.
   *
   * @param {Array} state
   * @param {Object} getters
   * @returns {Function}
   */
  getStoreAttributeByName: (state, getters) => {
    return (fieldName, activeStoreIndex) => {
      const store = getters.getStoreByIndex(activeStoreIndex)

      return _.get(store, fieldName)
    }
  },

  /**
   * Gets the opening hours for a single day.
   *
   * @param {Array} state
   * @param {Object} getters
   * @returns {Function}
   */
  getOpeningHoursByDay: (state, getters) => {
    return (dayName, activeStoreIndex) => {
      const store = getters.getStoreByIndex(activeStoreIndex)
      const storeDayEntry = store.openingHours.find(item => item.day === dayName)
      return _.cloneDeep(storeDayEntry)
    }
  }
}
