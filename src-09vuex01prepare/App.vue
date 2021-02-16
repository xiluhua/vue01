<template>
    <div>
        <p>click {{ count }} times, count is {{ evenOrOdd }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">increment if odd</button>
        <button @click="incrementAsync">increment async</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'

export default {
    name: 'App',
    components: {},
    data () { // 必须写函数
        return {
            count: 0
        }
    },

    computed: {
        // ...mapState(['count']),
        // ...mapGetters(['evenOrOdd'])
        evenOrOdd () {
            return this.count % 2 == 0 ? 'even' : 'odd'
        }
    },

    methods: {
        increment () {
            let count = this.count
            this.count = count + 1
            // this.$store.dispatch('increment')
        },
        decrement () {
            let count = this.count
            this.count = count - 1
            // this.$store.dispatch('decrement')
        },
        incrementIfOdd () {
            let count = this.count
            if (count%2 ==1){
                this.count = count + 1
            }
            // this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync () {
            setTimeout(()=>{
                let count = this.count
                this.count = count + 1
            },1000)
            // this.$store.dispatch('incrementAsync')
        }
    }

    // methods: {
    //     ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    // }
}
</script>

<style scoped>

</style>
