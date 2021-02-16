// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    // 配置对象的属性名都是一些确定的名称，不能随便修改。 template 只能写 template， router 只能写 router
    el: '#app',
    components: {App: App},
    template: '<App/>',
})
