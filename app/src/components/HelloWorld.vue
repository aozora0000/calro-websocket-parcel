<template>
    <button v-on:click="increment()">{{ count }}</button>
</template>

<script>
    import store from '../store'

    export default {
        name: 'HelloWorld',
        computed: {
            count() {
                return store.getters.count
            },
        },
        methods: {
            increment() {
                store.dispatch('increment')
            }
        }
    }
</script>

<style scoped>

</style>
