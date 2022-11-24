const { createApp } = Vue
const app = createApp({

})

app.component('bold', {
    template: '<b>This message from component</b>'
})

app.mount('#app')