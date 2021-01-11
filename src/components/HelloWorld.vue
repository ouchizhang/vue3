<template>
    <div class="hello">
        <div v-for="(item, index) in 5" :key="index" :ref="setItemRef" v-highlight="'yellow'">
            {{ item }}
        </div>
        <child-of-hello @childSayHello="sayHello"></child-of-hello>
    </div>
</template>

<script>
import { onBeforeUpdate, onUpdated } from "vue";
import ChildOfHello from  './ChildOfHello'

export default {
    components: {
        ChildOfHello
    },
    setup() {
        let refList = [];
        const setItemRef = (el) => {
            refList.push(el);
        };
        onBeforeUpdate(() => {
            refList = [];
        });
        onUpdated(() => {
            console.log(refList);
        });
        const sayHello = (msg) => {
            console.log(msg, 11111111111111)
        }
        return {
            refList,
            setItemRef,
            sayHello
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
