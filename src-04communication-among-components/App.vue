<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <TodoHeader @addTodo="addTodo" />
            <!-- <TodoHeader :addTodo="addTodo" />-->
            <TodoList :todos="todos"  />
            <TodoFooter :todos="todos" :delAllComplete="delAllComplete"
                        :selectAllTodos="selectAllTodos"/>

            <TodoFooter>
                <input slot="checkAll" type="checkbox" id="isAllCheck" v-model="isAllCheck"/>
                <span slot="count">已完成{{completeSize}}/ 全部{{ todos.length }}</span>
                <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="delAllComplete">清除已完成任务</button>
            </TodoFooter>
        </div>
    </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import storageUtil from './util/storageUtil'

// 1. 引入组件
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'

export default {
    // 2. 映射组件标签
    name: 'App',
    data(){ // 必须写函数
        return{
            // todos: [
            //     {title: '吃饭', complete: false},
            //     {title: '睡觉', complete: false},
            //     {title: 'coding', complete: false}
            // ]
            // 从 localStorage 中读取
            todos: JSON.parse(storageUtil.readTodos())
        }
    },
    mounted () {
        // 订阅消息
        Pubsub.subscribe('delTodo', (msg, index) => {
            this.delTodo(index)
        })
    },
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

    watch:{
        todos: {
            deep: true, // 深度监视
            handler: function (newVal) {
                // 将 todos 最新的值保存到 localStorage
                // window.localStorage.setItem('todos_key', JSON.stringify(newVal))
                storageUtil.saveTodos(newVal)
            }
        }
    },
    // 本来在 TodoFooter.vue
    computed: {
        completeSize(){
            debugger
            return this.todos.reduce((preTotal, todo) => preTotal+(todo.complete?1:0), 0)
        },
        isAllCheck: {
            get(){
                debugger
                return this.completeSize === this.todos.length && this.completeSize>0
            },

            set(value){
                if (this.todos.length == 0){
                    document.getElementById("isAllCheck").checked = false;
                    return
                }
                this.selectAllTodos(value)
            }
        }
    },

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
