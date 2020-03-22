import _ from 'lodash'

const baseStore = {
  id: '',
  name: '',
  address: {
    street: '',
    zip: '',
    city: ''
  },
  clientsInStore: null,
  averageDurationPerClientInMinutes: null,
  percentageReservations: null
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
  addNewStore: (state, payload) => {
    state.push(_.merge({}, baseStore, payload))
  },

  addNewStores: (state, payload) => {
    payload.forEach(element => {
      state.push(_.merge({}, baseStore, element));
    });
  }
}
