const { createApp } = Vue
const app = createApp({

})

app.component('bold', {
    template: '<b><slot></slot></b>'
})

app.mount('#app')