<template>
    <div>
        <ul>
            <li v-for="(msg, index)  in messages" :key="msg.id">
<!--                <a href="">{{ msg.title }}</a>-->
                <router-link :to="`/home/message/detail/${ msg.id }`">{{ msg.title }}</router-link>
                <button @click="pushShow(msg.id)">push 查看</button>
                <button @click="replaceShow(msg.id)">replace 查看</button>
            </li>
        </ul>
        <button @click="$router.back()">回退</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Message',
    data(){ // 必须写函数
        return{
            messages:[]
        }
    },
    mounted () {
        // 模拟 ajax 从后台获取数据
        setTimeout(()=>{
            const msg =  [
                { id: 1, title: 'message01'},
                { id: 2, title: 'message02'},
                { id: 3, title: 'message03'}
            ]
            this.messages = msg
        })
    },
    methods:{
        pushShow(id){
            this.$router.push(`/home/message/detail/${id}`)
        },

        replaceShow(id){
            this.$router.replace(`/home/message/detail/${id}`)
        },
    }
}
</script>

<style scoped>

</style>
