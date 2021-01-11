import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('highlight', {
    beforeMount(el, binding) {
        console.log(el)
        console.log(binding)
        el.style.background = binding.value
    }
})
app.mount('#app')
