<template>
    <div>
        <ul>
            <li v-for="(news, index)  in newsArr" :key="index">{{ news }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'News',
    data(){ // 必须写函数
        return{
            newsArr:['news01','news02','news03']
        }
    }
}
</script>

<style scoped>

</style>
