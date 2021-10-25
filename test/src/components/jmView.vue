<template>
    <div>
        <p>{{name}}</p><br>
        <button @click="updateName">click</button>
    </div>
</template>

<script>
export default {
     data(){
      return{
          name:'aaaaaa'
     }
    },
    methods:{
        updateName(){
            this.name="updateJaemin";
        }
    }

}
</script>
<style lang="less" scoped>

</style>