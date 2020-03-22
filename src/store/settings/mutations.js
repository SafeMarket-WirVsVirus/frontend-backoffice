export default {
  /**
   * Adds a new store.
   *
   * @public
   * @param {Object} state
   * @param {Number} payload
   * @returns {void}
   */
  setActiveStoreIndex: (state, payload) => {
    state.activeStoreIndex = payload
  }
}
