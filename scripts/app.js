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
        },
        showAlertMessage(message) {
            alert(message)
        }
    }
}).mount('#app')