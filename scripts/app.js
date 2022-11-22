const { createApp } = Vue
const app = createApp({
    data() {
        return {
            numberOne: 1,
            numberTwo: 2,
        }
    },
    computed: {
        numberAmount() {
            return this.numberOne + this.numberTwo
        }
    }
})

app.mount('#app')