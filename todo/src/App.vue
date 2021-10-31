<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo  />
    <AddTodo/>
    <hr>
    <TodoList />
  </div>
</template>

<script>
import TodoList from"@/components/todolist.vue"
import AddTodo from"@/components/AddTodo.vue"
import CompletedTodo from '@/components/CompletedTodo.vue';
export default {
  components:{
    TodoList,
    AddTodo,
    CompletedTodo
  },
  data(){
    return{
    todoText: '',
    // todos:[
    //   {id:1, text:"buy a car",checked:false},
    //   {id:2, text:"paly game",checked:true},
    // ]
  }},
  methods:{
    // addTodo(value){
    //   this.todos.push({
    //     id:Math.random(),
    //     text:value,
    //     checked:false
    //   })
    // },
    // toggleCheckBox({id,checked}){
    //   console.log(id,checked)
    //   const index = this.todos.findIndex(todo=>{
    //     return todo.id === id;
    //   })
    //   this.todos[index].checked=checked;
    // },
    // clickDelete(id){
    //   const index = this.todos.findIndex(todo=>{
    //     return todo.id === id;
    //   })
    //   this.todos.splice(index,1)
    // }
    // this.todos=this.todos.filter(todo=>todo.id!==id)

    }
}
</script>
