import _ from 'lodash'

export default {
  /**
   * Gets all stores.
   *
   * @public
   * @param {Object} state
   * @returns {Array} stores
   */
  allStores: (state) => {
    return _.cloneDeep(state)
  }
}
