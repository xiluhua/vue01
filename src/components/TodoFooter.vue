<template>
    <div class="todo-footer">
        <label>
            <input type="checkbox" id="isAllCheck" v-model="isAllCheck"/>
        </label>
        <span>
      <span>已完成{{ completeSize }}</span> / 全部{{ totolCount }}
    </span>
        <button class="btn btn-danger" v-show="completeSize" @click="delAllComplete">清除已完成任务</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name: 'TodoItem',
    // props: {
    //     todos: Array,
    //     delAllComplete: Function,
    //     selectAllTodos: Function
    // },
    computed: {
        ...mapGetters(['totolCount','completeSize']),

        isAllCheck: {
            get(){
                return this.$store.getters.isAllCheck && this.$store.state.todos.completeSize>0
            },

            set(value){
                if (this.$store.state.todos.length == 0){
                    document.getElementById("isAllCheck").checked = false;
                    return
                }
                // this.selectAllTodos(value)
                this.$store.dispatch('selectAllTodos', value)
            }
        }
    },
    methods: {
        ...mapActions(['delAllComplete'])
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
