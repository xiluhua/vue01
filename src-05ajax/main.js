// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)    // 内部会给 vm 对象和组件对象添加一个属性: $http

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: {App: App},
    template: '<App/>'
})
