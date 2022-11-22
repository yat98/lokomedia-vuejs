const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: '',
            messageArea: ''
        }
    }
}).mount('#app')