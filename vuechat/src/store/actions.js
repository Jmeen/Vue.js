import { SET_MESSAGES, GET_CHANNELS } from './mutation-types'

export default {
  [SET_MESSAGES]({ commit }, messages) {
    commit(SET_MESSAGES, messages)
  },

  [GET_CHANNELS]({ commit }) {
    // 이건 firebase 켜야한다
    fetch('http://localhost:5000/chat-server-1b34b/us-central1/v1/channels').then((response) => {

      return response.json()

    })
      .then((json) => {
        console.log(json.channels)
        commit(GET_CHANNELS, json.channels)
      })

  }
}
