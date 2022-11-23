const { createApp } = Vue
const app = createApp({
    data() {
        return {
            image: 'assets/img/flower.webp',
            imageWidth: '300px',
            color: 'red',
            tooltipMessage: 'This is flower image'
        }
    }
}).mount('#app')