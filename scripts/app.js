const { createApp } = Vue
const app = createApp({
    data() {
        return {
            show: 'no',
            message: 'Learn VueJS Conditional',
            elseMessage: 'Learn VueJS Else Conditional',
        }
    }
})

app.mount('#app')