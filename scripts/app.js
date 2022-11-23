const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: '',
            messageArea: '',
            choice: '',
            hobbies: [],
            city: '',
        }
    }
}).mount('#app')