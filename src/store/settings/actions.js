export default {
  /**
   * Sets the active store index.
   *
   * @public
   * @param {Function} commit
   * @param {Number} activeStoreIndex
   * @returns {void}
   */
  setActiveStoreIndex: ({ commit }, activeStoreIndex) => {
    commit('setActiveStoreIndex', activeStoreIndex)
  }
}
