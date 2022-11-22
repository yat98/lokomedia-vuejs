const { createApp } = Vue
const app = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            secondMessage: `Hello Vue, I'm The Second Message`,
            thirdMessage: `Hello Vue, I'm The Third Message`,
            messageFormatted: `<b>Hello</b> <i>Vue!</i> <u>I'm Here</u>`,
        }
    }
})

app.mount('#app')