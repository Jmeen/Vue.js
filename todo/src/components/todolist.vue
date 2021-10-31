<template>
<div>
    <Todo
        v-for="todo in todos" 
        :key="todo.id" 
        :todo="todo" 
        @toggle-checkbox="toggleCheckbox"
        @click-delete="deleteTodo"
    />
    <hr>
</div>

</template>
<script>
import Todo from "@/components/Todo.vue"
export default {
    components:{
        Todo
    },
    // props:{
    //     todos:{
    //         type:Array,
    //         require:true
    //     }
    // },
    methods: {
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value)
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        }
    },
    computed:{
        todos(){
            return this.$store.state.todos;
        }
    }
}
</script>
<style lang="less" scoped>

</style>