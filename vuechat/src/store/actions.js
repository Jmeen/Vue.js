import { SET_MESSAGES, GET_CHANNELS } from './mutation-types'


const get_message_path = cname => 'http://localhost:5000/chat-server-1b34b/us-central1/v1/channels/' + cname + '/messages'

async function fetch_get_messages(cname) {
  const response = await fetch(get_message_path(cname))
  const json = await response.json()
  return json.messages
}



export default {
  // [SET_MESSAGES]({ commit }, messages) {
  //   commit(SET_MESSAGES, messages)
  // },

  async GET_MESSAGES({ commit }, cname) {
    const messages = await fetch_get_messages(cname);
    commit(SET_MESSAGES, messages)
  },

  //서버로 메세지 송신
  async POST_MESSAGES({ commit }, { cname, message }) {
    const response = await fetch(get_message_path(cname), {
      method: 'POST',
      body: JSON.stringify({
        'body': message
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    // POST요청에 대한 응답 받음
    const json = await response.json()
    if (json.result === 'ok') {
      const messages = await fetch_get_messages(cname)
      commit(SET_MESSAGES, messages)
    }
  },

  [GET_CHANNELS]({ commit }) {
    // 이건 firebase 켜야한다
    // fetch('http://localhost:5000/chat-server-1b34b/us-central1/v1/channels').then((response) => {

    //   return response.json()

    // })
    //   .then((json) => {
    //     console.log(json.channels)
    //     commit(GET_CHANNELS, json.channels)
    //   })

    async function fetch_api() {
      // 비동기 처리로 완료 후 다음것 실행
      const response = await fetch('http://localhost:5000/chat-server-1b34b/us-central1/v1/channels')
      const json = await response.json()
      commit(GET_CHANNELS, json.channels)
    }
    fetch_api()
  }
}
