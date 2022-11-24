const { createApp } = Vue
const app = createApp({

})

app.component('bold', {
    template: '<b><slot></slot></b>'
})

app.component('multi', {
    template: `
        <div>
            <b>This is bold</b>
            <br>
            <i>This is italic</i>
            <br>
            <u>This is underline</u>
        </div>`
})

app.mount('#app')