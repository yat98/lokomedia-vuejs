const { createApp } = Vue
const app = createApp({

})

app.component('color',{
    data() {
        return{
            red: 0,
            green: 0,
            blue: 0,
        }
    },
    computed: {
        rgb(){
            return `rgb(${this.red},${this.green},${this.blue})`
        }
    },
    template: `
        <div class="box" :style="{backgroundColor:rgb}"></div>
        <p>
            <span class="color-pallete">Red</span>
            <input type="range" min="0" max="255" v-model="red">
        </p>
        <p>
            <span class="color-pallete">Green</span>
            <input type="range" min="0" max="255" v-model="green">
        </p>
        <p>
            <span class="color-pallete">Blue</span>
            <input type="range" min="0" max="255" v-model="blue">
        </p>
        <p>
            Color RGB: {{ rgb }}
        </p>`
})

app.mount('#app')