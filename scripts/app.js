const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: ''
        }
    },
    methods: {
        showMessage() {
            this.message = 'Learn event click'
            alert('Learn event click')
        }
    }
}).mount('#app')