<template>
  <div class="view">
  <div class="channel">
    <ul>
      <li v-for="(channel,index) in channels" v-bind:key="index">
        <router-link v-bind:to="{name:'channel', params : {cname:channel}}">{{channel}}</router-link>
      </li>
    </ul>
  </div>
  <div class="channel-name">{{$route.params.cname}} </div>
  <div class="messages">
   <message-list v-bind:messages='messages'></message-list>

  </div>
  <div class="form">
    <input type="text" v-model="message">
    <input type="button" value="send" @click="send_message">
  </div>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import {GET_CHANNELS} from "../../store/mutation-types"
import MessageList from "../messagelist"
export default {
  mounted(){
    this.GET_CHANNELS()
    this.GET_MESSAGES(this.$route.params.cname)
  },
    beforeRouteUpdate(to, from, next) {
    this.GET_MESSAGES(to.params.cname)
    next()},
  data: () => {
    return {
      // channels:["general", "random"],
      message:"",
    }
  },
   computed: {
    ...mapGetters([
      'messages',
      'channels'
    ])
    },
  methods:{
    ...mapActions([
      // SET_MESSAGES,
      GET_CHANNELS,
      "GET_MESSAGES",
      "POST_MESSAGES"
    ]),
    send_message(){
      // this.SET_MESSAGES(this.message)
      // this.messages.push(this.message);
      this.POST_MESSAGES({"cname":this.$route.params.cname, "message":this.message})
      this.message="";
    }

  },
  components:{
    "message-list" : MessageList
  }
}
</script>


<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.view {
display:grid;
grid-template-columns: 100px 1fr;
grid-template-rows: auto 1fr auto;
}

.channel {
grid-row: 1 / span 3;
grid-column: 1 / 2;
}

.channel-name {
grid-area: 1 / 2;
}
.messages {
grid-area: 2 / 2;
height: 300px;
overflow: scroll;
}
.form {
grid-area: 3 / 2;
}


</style>
