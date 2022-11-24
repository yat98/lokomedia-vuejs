const { createApp } = Vue
const app = createApp({
    data() {
        return {
            vechiles: ['car', 'motorcyle', 'bicycle']
        }
    }
}).mount('#app')