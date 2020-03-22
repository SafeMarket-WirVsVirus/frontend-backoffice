export default {
  /**
   * Sets the active store index.
   *
   * @public
   * @param {Object} state
   * @param {Number} payload
   * @returns {void}
   */
  setActiveStoreIndex: (state, payload) => {
    state.activeStoreIndex = payload
  },

  /**
   * Sets the config steps context to 'new' or 'edit'.
   *
   * @public
   * @param {Object} state
   * @param {String} payload
   * @returns {void}
   */
  setConfigStepsContext: (state, payload) => {
    state.configStepsContext = payload
  }
}
