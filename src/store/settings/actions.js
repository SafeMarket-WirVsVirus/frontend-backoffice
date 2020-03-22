export default {
  /**
   * Sets the active store index.
   *
   * @public
   * @param {Function} commit
   * @param {Number} activeStoreIndex
   * @returns {void}
   */
  setActiveStoreIndex: ({ state, commit }, activeStoreIndex) => {
    if (state.activeStoreIndex === activeStoreIndex) {
      return
    }

    commit('setActiveStoreIndex', activeStoreIndex)
  },

  /**
   * Sets the config steps context to 'new' or 'edit'.
   * @param {Function} commit
   * @param {String} configStepsContext
   * @returns {void}
   */
  setConfigStepsContext: ({ state, commit }, configStepsContext) => {
    if (state.configStepsContext === configStepsContext) {
      return
    }

    commit('setConfigStepsContext', configStepsContext)
  }
}
