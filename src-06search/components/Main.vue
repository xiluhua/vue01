<template>
    <div>
        <h2 v-if="fistView">输入用户名搜索</h2>
        <h2 v-if="loading">LOADING...</h2>
        <h2 v-if="errorMsg">{{ errorMsg }}</h2>
        <div class="row">
            <div class="card" v-for="(user, index) in users" :key="index" :user="user">
                <a :href="user.url" target="_blank">
                    <img :src="user.avatar_url" style='width: 100px'/>
                </a>
                <p class="card-text">{{user.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Pubsub from 'pubsub-js'
import axios from  'axios'
export default {
    name: 'Main',
    data(){ // 必须写函数
        return{
            fistView: true,
            loading: false,
            users: null,
            errorMsg: ''
        }
    },
    mounted: function () {
        Pubsub.subscribe('search', (msg, searchName) => {
            const url = `https://api.github.com/search/users?q=${searchName}`
            debugger
            // 更新状态（请求中）
            this.fistView   = false
            this.loading    = true
            this.errorMsg   = ''
            this.users      = null
            // 发送 ajax 请求
            axios.get(url).then(response01 => {
                const result = response01.data
                const users = result.items.map(item => ({
                    url: item.html_url,
                    avatar_url: item.avatar_url,
                    name: item.login
                }))
                this.users      = users
                this.loading    = false
            }).catch(error => {
                console.log(error.message)
                this.loading    = false
                this.errorMsg   = error.message
            })
        })
    }

}
</script>

<style scoped>
.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}

</style>
