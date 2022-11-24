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
            ],
            items: [
                {type: 'Indomie Mie Rebus', stock: true},
                {type: 'Mie Sedaap Goreng', stock: true},
                {type: 'Chiki', stock: false},
                {type: 'Coca Cola', stock: false},
                {type: 'Bimoli', stock: false},
                {type: 'Sari Roti', stock: true},
            ],
            search: ''
        }
    },
    methods: {
        addVechile() {
            this.vechiles.push(this.vechile)
            this.vechile = ''
        },
        removeVechile(key) {
            this.vechiles.splice(key, 1)
        },
    },
    computed: {
        itemsExists() {
            return this.items.filter(item => item.stock)
        },
        itemsNotExists() {
            return this.items.filter(item => !item.stock)
        },
        searchCompletedVechiles() {
            return this.completedVechiles.filter(
                vechile => vechile.brand.match(this.search)
            )
        }

    }
}).mount('#app')