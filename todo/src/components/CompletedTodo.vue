<template>
    <div>
        Completed Todo: {{ numberOfCompletedTodo }}
        {{todos}}
    </div>
</template>

<script>
export default {
    // props: {
    //     todos: {
    //         type: Array,
    //         required: true
    //     }
    // },
    computed: {
        // todos(){
        //     return this.$store.state.todos;
        
        // },
        numberOfCompletedTodo() {
            return this.$store.getters.numberOfCompletedTodo;
            // return this.todos.filter(todo => todo.checked).length;

        }
    }
}
</script>

<style>
</style>