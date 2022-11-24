const { createApp } = Vue
const app = createApp({
    data() {
        return {
            vechile: '',
            vechiles: ['car', 'motorcyle', 'bicycle'],
            completedVechiles: [
                {type: 'car', brand: 'honda', color: 'red'},
                {type: 'motorcycle', brand: 'honda', color: 'black'},
                {type: 'bicycle', brand: 'phoenix', color: 'blue'},
            ]
        }
    },
    methods: {
        addVechile() {
            this.vechiles.push(this.vechile)
            this.vechile = ''
        },
        removeVechile(key) {
            this.vechiles.splice(key, 1)
        }
    }
}).mount('#app')