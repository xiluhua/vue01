<template>
    <div class="todo-footer">
        <label>
            <!-- <input type="checkbox" id="isAllCheck" v-model="isAllCheck"/>-->
            <slot name="checkAll"></slot>
        </label>

        <span>
            <!-- <span>已完成{{completeSize}}</span> / 全部{{ todos.length }}-->
            <slot name="count"></slot>
        </span>
        <!-- <button class="btn btn-danger" v-show="completeSize" @click="delAllComplete">清除已完成任务</button>-->
        <slot name="delete"></slot>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todos: Array,
        delAllComplete: Function,
        selectAllTodos: Function
    },
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
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}

</style>
