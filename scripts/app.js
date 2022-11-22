const { createApp } = Vue
const app = createApp({
    data() {
        return {
            show: false,
            message: 'Learn VueJS Conditional'
        }
    }
})

app.mount('#app')