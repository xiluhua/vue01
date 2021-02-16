/**
 * vuex 的核心管理对象模块
 */
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    INCREMENT(){
        state.count = state.count +1
    },
    DECREMENT(){
        state.count = state.count +1
    }
}

const actions = {
    increment ({commit}){
        commit('INCREMENT')
    },
    decrement ({commit}){
        commit('DECREMENT')
    },
    incrementIfOdd ({commit, state}){
        let count = state.count
        if (count%2 == 1){
            commit('INCREMENT')
        }
    },
    incrementAsync ({commit}){
        setTimeout(()=>{
            commit('INCREMENT')
        }, 1000)

    }
}

const getters = {
    evenOrOdd (state) {
        return state.count % 2 == 0 ? 'even' : 'odd'
    }
}

export default new Vuex.Store({
    state,          // 状态对象
    mutations,      // 包含多个更新 state 函数的对象
    actions,        // 包含多个对应事件回调函数的对象
    getters         // 包含多个 getter 计算属性函数的对象
})
