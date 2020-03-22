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
  }
}
