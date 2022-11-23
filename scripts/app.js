const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: '',
            messageArea: '',
            choice: '',
            hobbies: [],
        }
    }
}).mount('#app')