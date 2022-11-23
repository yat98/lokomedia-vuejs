const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: '',
            messageArea: '',
            choice: ''
        }
    }
}).mount('#app')