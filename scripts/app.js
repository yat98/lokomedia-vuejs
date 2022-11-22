const { createApp } = Vue
const app = createApp({
    data() {
        return {
            show: 'yes',
            message: 'Learn VueJS Conditional'
        }
    }
})

app.mount('#app')