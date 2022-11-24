const { createApp } = Vue
const app = createApp({
    data() {
        return {
            vechile: '',
            vechiles: ['car', 'motorcyle', 'bicycle']
        }
    },
    methods: {
        addVechile() {
            this.vechiles.push(this.vechile)
            this.vechile = ''
        }
    }
}).mount('#app')