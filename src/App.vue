<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
    <!--            <TodoHeader :addTodo="addTodo" />-->
                <TodoHeader/>
    <!--            <TodoList :todos="todos" :delTodo="delTodo"/>-->
                <TodoList/>
    <!--            <TodoFooter :todos="todos" :delAllComplete="delAllComplete"-->
    <!--                        :selectAllTodos="selectAllTodos"/>-->
                <TodoFooter/>
            </div>
        </div>
    </div>
</template>

<script>
// 1. 引入组件
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'

export default {
    // 2. 映射组件标签
    name: 'App',
    // data(){ // 必须写函数
    //     return{
    //         // todos: [
    //         //     {title: '吃饭', complete: false},
    //         //     {title: '睡觉', complete: false},
    //         //     {title: 'coding', complete: false}
    //         // ]
    //         // 从 localStorage 中读取
    //         todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    //     }
    // },
    methods: {
        addTodo(todo){
            this.todos.unshift(todo)
        },
        delTodo(index){
            this.todos.splice(index, 1)
        },
        delAllComplete(){
            // 或者
            this.todos = this.todos.filter(todo => !todo.complete)

            // 不行
            // for(var i=0; i<this.todos.length; i++){
            //     if (this.todos[i].complete){
            //         this.todos.splice(i, 1)
            //     }
            // }
        },
        selectAllTodos(checked){
            // 或者
            // this.todos.forEach(todo => todo.complete = checked)
            debugger
            for(var i=0; i<this.todos.length; i++){
                this.todos[i].complete = checked
            }
        }
    },

    // watch:{
    //     todos: {
    //         deep: true, // 深度监视
    //         handler: function (newVal) {
    //             // 将 todos 最新的值保存到 localStorage
    //             window.localStorage.setItem('todos_key', JSON.stringify(newVal))
    //         }
    //     }
    // },

    components: {
        TodoHeader,
        TodoList,
        TodoFooter
    }
}
</script>

<style>
/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

</style>
