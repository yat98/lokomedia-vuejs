const { createApp } = Vue
const app = createApp({
    data() {
        return {
            numberOne: 1,
            numberTwo: 2,
            numberAmount: null,
        }
    },
    methods: {
        calculate() {
            this.numberAmount = this.numberOne + this.numberTwo
        }
    }
})

app.mount('#app')