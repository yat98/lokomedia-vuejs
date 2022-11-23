const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: '',
            result: ''
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
        },
        enter() {
            this.result = 'Enter Button'
        },
        esc() {
            this.result = 'Esc Button'
        },
        space() {
            this.result = 'Space Button'
        },
        up() {
            this.result = 'Up Button'
        },
        down() {
            this.result = 'Down Button'
        },
        right() {
            this.result = 'Right Button'
        },
        left() {
            this.result = 'Left Button'
        },
        ctrlX() {
            this.result = '(CTRL + X) Button'
        },
        ctrlS() {
            this.result = '(CTRL + S) Button'
        },
        clickLeft() {
            this.result = 'Click Left'
        },
    }
}).mount('#app')