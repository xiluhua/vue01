<template>
    <div id="app">
        <div>
            <header class="site-header jumbotron">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h1>请发表对Vue的评论</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div class="container">
                <Add :addComment="addComment"/>
                <List :comments="comments" :deleteComment="deleteComment"/>
            </div>
        </div>

    </div>
</template>

<script>
// 1. 引入组件
import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
    // 2. 映射组件标签
    name: 'App',
    data(){ // 必须写函数
        return{
            comments:[
                {name: 'Bob',content: "Vue 不错"},
                {name: 'Cat',content: "Vue so easy"},
                {name: 'bz',content: "Vue so so"}
            ]
        }
    },
    methods: {
        addComment(comment){
            this.comments.unshift(comment);
        },
        deleteComment(index){
            this.comments.splice(index, 1);
        }
    },
    components: {
        Add,
        List
    }
}
</script>

<style>
.logo{
    width: 200px;
    height: 200px;
}
</style>
