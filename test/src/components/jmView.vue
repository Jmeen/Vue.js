<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{name}}</p><br>
        <button @click="updateName">click</button>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:false,
            default : "default title"
        },
        name:{
            default:"deafult Name"
        }
    },
     data(){
      return{
        //   name:'aaaaaa'
     }
    },
    methods:{
        // 직접적으로 props를 변경하지 마라
        updateName(){
            // this.name="updateJaemin";
            
        }
    }

}
</script>
<style lang="less" scoped>

</style>