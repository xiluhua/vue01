<template>
    <div>
        <div v-if="!repoUrl">
            loading
        </div>
        <div v-else>
            most star repo is <a :href="repoUrl">{{ repoName }}</a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // 2. 映射组件标签
    name: 'App',
    data () { // 必须写函数
        return {
            repoUrl: '',
            repoName: '',
            searchName: 'vue'
        }
    },
    mounted () {
        // 发 ajax 库请求
        const url = `https://api.github.com/search/repositories?q=${this.searchName}&sort=stars`
        // debugger
        // this.$http.get(url).then(
        //     response01 => {
        //         const result = response01.data
        //         const mostRepo = result.items[0]
        //         this.repoUrl = mostRepo.html_url
        //         this.repoName = mostRepo.name
        //     },
        //     response02 => {
        //         alert('请求失败')
        //     }
        // )

        // 发送 ajax 请求
        axios.get(url).then(response01 => {
            const result = response01.data
            const mostRepo = result.items[0]
            this.repoUrl = mostRepo.html_url
            this.repoName = mostRepo.name
        }).catch(error => {
            console.log(error.message)
        })
    }
}
</script>

<style>

</style>
