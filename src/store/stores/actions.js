export default {
  /**
   * Adds a new store.
   *
   * @public
   * @param {Function} commit
   * @param {Object} store
   * @returns {void}
   */
  addNewStore: ({ commit }, store) => {
    commit('addNewStore', store)
  },

  removeNewStore:({ commit }, store) => {
    commit('removeNewStore', store)
  },

  addNewStores: ({ commit }, stores) => {
    const newStores = stores.map(element => {
      return {
        id: element.id,
        name: element.name,
        address: {
          street: '',
          zip: '',
          city: ''
        },
        clientsInStore: element.capacity,
        averageDurationPerClientInMinutes: element.slotDuration,
        percentageReservations: null
      }
    })

    commit('addNewStores', newStores)
  },

  /**
   * Sets an attribute for a single store.
   *
   * @param {Function} commit
   * @param {Object<{ activeStoreIndex: Number, name: String, value: String }>} payload
   * @returns {void}
   */
  setStoreAttribute: ({ commit }, payload) => {
    commit('setStoreAttribute', payload)
  },

  addOpeningHour: ({ commit }, payload) => {
    commit('addOpeningHour', payload)
  }
}
