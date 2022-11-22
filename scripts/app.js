const { createApp } = Vue
const app = createApp({
    data() {
        return {
            message: 'Hello Vue!',
            secondMessage: `Hello Vue, I'm The Second Message`,
            thirdMessage: `Hello Vue, I'm The Third Message`,
            messageFormatted: `<b>Hello</b> <i>Vue!</i> <u>I'm Here</u>`,
            text: 'Hello this is text',
            number: 100,
            float: 10.3,
            booleanTrue: true,
            booleanFalse: false,
            array: [1,'two',3.5]
        }
    }
})

app.mount('#app')