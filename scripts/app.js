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
        },
        enterMessage() {
            alert('Your click enter button')
        }
    }
}).mount('#app')