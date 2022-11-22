const { createApp } = Vue
const app = createApp({
    data() {
        return {
            show: true,
            message: 'Learn VueJS Conditional'
        }
    }
})

app.mount('#app')