<template>
  <div>
      User List
      <div v-for="user in users" :key="user.id">
          {{user.name}}
      </div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
    // data(){
    //     return{
    //         users:[]
    //     }
    // },
    created(){
        this.getUsers();
    },
    methods:{
        getUsers(){
            this.$store.dispatch('getUsers')
        // axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
        //     this.users=res.data;
        // })
        }
    },
    computed:{
        users(){
            return this.$store.state.users;
        }
    }

}
</script>

<style>

</style>