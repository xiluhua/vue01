<template>
    <ul class="todo-main" style="margin-top:16px">
        <TodoItem v-for="(todo, index) in $store.state.todos" :key="index" :todo="todo" :index="index"/>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue'
export default {
    name: 'TodoList',
    // props: {
    //     todos: Array,
    //     delTodo: Function
    // },
    components: {
        TodoItem
    }
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
</style>
