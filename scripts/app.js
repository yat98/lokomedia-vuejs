const { createApp } = Vue

const app = createApp({

})

app.component('billing',{
    data() {
        return {
            items: [
                {name: 'Monitor Samsung', price: 200, active:false},
                {name: 'Samsung A24', price: 300, active:false},
                {name: 'Keyboard Vortex V7', price: 400, active:false},
                {name: 'Mouse Logitech', price: 500, active:false},
            ],
            total: 0,
        }
    },
    methods: {
        checkout(index){
            const item = this.items[index]
            item.active = !item.active
            if(item.active) this.total += item.price
            else this.total -= item.price
        },
        pay(){
            alert(`Your total payment is \$${this.total}`)
        }
    },
    template: `
        <h1>Please choose the items</h1>
        <ol>
            <li v-for="(item, index) in items" :key="index">
                {{ item.name }}  &mdash; \${{ item.price }}
                <button @click="checkout(index)">{{ item.active ? '-' : '+' }}</button>
            </li>
        </ol>
        <p>Total: \${{ total }}</p>
        <button @click="pay">Next Payment</button>`
})

app.mount('#app')