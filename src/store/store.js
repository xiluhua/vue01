/**
 * vuex 的核心管理对象模块
 */
import Vuex from 'vuex'
import Vue from 'vue'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state,          // 状态对象
    mutations,      // 包含多个更新 state 函数的对象
    actions,        // 包含多个对应事件回调函数的对象
    getters         // 包含多个 getter 计算属性函数的对象
})
