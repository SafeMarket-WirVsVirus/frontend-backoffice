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

  addNewStores: ({ commit }, stores) => {
    var _ = [];

    stores.forEach(element => {
      _.push({
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
      });
    });
    commit('addNewStores', _)
  }
}
