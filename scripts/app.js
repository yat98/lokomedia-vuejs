const { createApp } = Vue
const app = createApp({
    directives: {
        canvas: (el) => {
            const canvas  = el.getContext('2d')
            canvas.fillRect(10,10,50,50)
        }
    }
}).mount('#app')
