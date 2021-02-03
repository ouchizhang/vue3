<template>
    <div>{{msg}}</div>
    <!-- <button @click="showInfo"></button> -->
</template>

<script>
import { onMounted } from 'vue';
import newInfo from '@/mixin/index'
export default {
    data() {
        return {
            msg: 'i am child of hello'
        }
    },
    mixins: [
        new newInfo(() => {
            console.log(this)
        })
    ],
    emits: ['childSayHello'],
    setup(prop,context) {
        onMounted(() => {
            // console.log(context)
            // console.log(newInfo())
            // newInfo(() => {
            //     console.log(111)
            // })
            context.emit('childSayHello', 'aaa')
        })
    },
    mounted() {
        this.getInfo()
        console.log(this)
    }
};
</script>

<style>
</style>