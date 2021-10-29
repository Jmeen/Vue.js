<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <input 
    type="text" 
    class="w-100 p-2" 
    placeholder="Type Todo"
    @keyup.enter="addTodo"
    >

    <hr>
    <ToDo v-for="todo in todos" :key="todo.id" 
    :todo="todo" 
    @toggle-checkbox="toggleCheckBox"
    @click-delete="clickDelete"
    />

  </div>
</template>

<script>
import Todo from "@/components/Todo.vue"
export default {
  components:{
    ToDo : Todo
  },
  data(){
    return{
    todos:[
      {id:1, text:"buy a car",checked:false},
      {id:2, text:"paly game",checked:true},
      {id:3, text:"buy a car",checked:false},
    ]
  }},
  methods:{
    addTodo(e){
      this.todos.push({
        id:Math.random(),
        text:e.target.value,
        checked:false
      })
    },
    toggleCheckBox({id,checked}){
      console.log(id,checked)
      const index = this.todos.findIndex(todo=>{
        return todo.id === id;
      })
      this.todos[index].checked=checked;
    },
    clickDelete(id){
    //   const index = this.todos.findIndex(todo=>{
    //     return todo.id === id;
    //   })
    //   this.todos.splice(index,1)
    // }
    this.todos=this.todos.filter(todo=>todo.id!==id)

    }}
}
</script>
