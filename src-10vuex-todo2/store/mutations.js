import {ADD_TODO,DEL_TODO,SELECT_ALLTODOS,DEL_ALL_COMPLETE} from './mutations-types'

export default {
    [DEL_TODO](state, {index}){
        state.todos.splice(index, 1)
    },
    [ADD_TODO] (state, {todo}){
        // unshift 放最前面
        state.todos.unshift(todo)
    },
    [DEL_ALL_COMPLETE] (state){
        state.todos = state.todos.filter(todo => !todo.complete)
    },
    [SELECT_ALLTODOS](state, {checked}){
        // 或者
        // state.todos.forEach(todo => todo.complete = checked)
        debugger
        for(var i=0; i<state.todos.length; i++){
            state.todos[i].complete = checked
        }
    }

}
