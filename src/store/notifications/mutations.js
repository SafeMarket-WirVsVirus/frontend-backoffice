import _ from 'lodash'

const baseNotification = {
    type: 'warning',
    message: '',
    action: {
        text: '',
        path: ''
    }
}

export default {
  /**
   * Adds a new store.
   *
   * @public
   * @param {Object} state
   * @param {Object} payload
   * @returns {void}
   */
  addNewNotification: (state, payload) => {
    state.push(_.merge({}, baseNotification, payload))
  }

}
