export default {
    /**
     * Adds a new store.
     *
     * @public
     * @param {Function} commit
     * @param {Object} store
     * @returns {void}
     */
    addNewNotification: ({ commit }, store) => {
      commit('addNewNotification', store)
    }
  }
  