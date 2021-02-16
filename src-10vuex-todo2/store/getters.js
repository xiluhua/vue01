
export default {
    totolCount(state){
        return state.todos.length
    },

    completeSize(state){
        return state.todos.reduce((preTotal, todo) => preTotal+(todo.complete?1:0), 0)
    },

    isAllCheck(state){
        return state.todos.completeSize === state.todos.length
    }
}
