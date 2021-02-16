import {ADD_TODO, DEL_ALL_COMPLETE, DEL_TODO, SELECT_ALLTODOS} from './mutations-types'

export default {
    selectAllTodos ({commit}, checked){
        commit(SELECT_ALLTODOS, {checked})
    },
    addTodo ({commit}, todo){
        commit(ADD_TODO, {todo})
    },
    delTodo ({commit}, index){
        commit(DEL_TODO, {index})
    },
    delAllComplete ({commit}){
        commit(DEL_ALL_COMPLETE)
    }
}
