<template>
    <div>
        <div class="row">
            <div class="col-xs-offset-2 col-xs-8">
                <div class="page-header"><h2>Router Test</h2></div>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!--生成路由链接-->
                    <router-link to="/about" class="list-group-item">About</router-link>
                    <router-link to="/home" class="list-group-item">Home</router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <div>
<!--                            <h2>about组件</h2>-->
<!--                            <p>接收外部数据：atguigu</p><input type="text">-->
                            <keep-alive>
                                <router-view msg="123"></router-view>
                            </keep-alive>
                        </div>

                        <!--显示当前组件
                        <keep-alive>
                            <router-view msg="abc"></router-view>
                        </keep-alive>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {

    },
    methods:{
        handleClick(){

        }
    }
}
</script>

<style scoped>
.router-link-active {
    color: red!important;
}

</style>
