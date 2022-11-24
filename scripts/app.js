const { createApp } = Vue
const app = createApp({
    data() {
        return {
            show: false,
            numbers: []
        }
    },
    methods: {
        add(){
            this.numbers.push(this.numbers.length + 1)
        },
        remove(){
            this.numbers.splice((this.numbers.length - 1 ), 1)
        }
    }
}).mount('#app')