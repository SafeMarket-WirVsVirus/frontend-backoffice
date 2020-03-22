export default {
  /**
   * Gets the active store index.
   *
   * @public
   * @param {Array} state
   * @returns {Number} activeStoreIndex
   */
  activeStoreIndex: (state) => {
    return state.activeStoreIndex
  },

  /**
   * Gets the config steps context.
   *
   * @public
   * @param {Array} state
   * @returns {String} configStepsContext
   */
  configStepsContext: (state) => {
    return state.configStepsContext
  }
}
