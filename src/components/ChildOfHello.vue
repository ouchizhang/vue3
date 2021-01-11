<template>
    <div>{{msg}}</div>
</template>

<script>
import { onMounted } from 'vue';
export default {
    data() {
        return {
            msg: 'i am child of hello'
        }
    },
    emits: ['childSayHello'],
    setup(prop,context) {
        onMounted(() => {
            console.log(context.data)
            context.emit('childSayHello', 'aaa')
        })
    }
};
</script>

<style>
</style>