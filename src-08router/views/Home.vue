<template>
    <div>
        <h2>Home</h2>
        <p>{{msg}}</p>
        <div>
            <ul class="nav nav-tabs">
                <li><router-link to="/home/news">News</router-link></li>
                <li><router-link to="/home/message">Message</router-link></li>
            </ul>
            <router-view></router-view>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    props: {
        msg: String
    }
}
</script>

<style scoped>

</style>
