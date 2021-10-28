<template>
  <div>
    <h1>This is homepage</h1>
  <InputField v-model="name" />
        <button @click="updateName">click</button>
        <p>{{name}}</p>
  </div>
</template>

<script>
import InputField from "@/components/inputField.vue";
// import JMCoder from "@/components/jmView.vue";
export default {
  components:{
      // JMCoder
      InputField
    },
  data(){
    return{
      name:''
    }
  },
  // beforeCreate(){
  //   console.log('beforeCreate',this.name)
  // },
  // created(){
  //   console.log('Create',this.name)
  // },
  // beforeMount(){
  //   alert("beforeMount")
  // },
  // mounted(){
  //   alert("mount")
  // },
  // beforeUpdate(){
  //   alert("beforeUpdate",this.name)
  // },
  // updated(){
  //   alert("updated!@!!!")
  // },
  // beforeDestroy(){
  //   alert('beforeDestroy');
  // },
  // destroyed(){
  //   alert('destroyed')
  // },
  methods:{
    updateName(name){
      this.name=name;
    }
  }
}
</script>

<style scoped>
h1{
  color:red
}
</style>