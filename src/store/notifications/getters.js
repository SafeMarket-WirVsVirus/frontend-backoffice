import _ from 'lodash'

export default {
  /**
   * Gets all stores.
   *
   * @public
   * @param {Array} state
   * @returns {Array} stores
   */
  allNotifications: (state) => {
    return _.cloneDeep(state)
  }
}
