const { createApp } = Vue
const app = createApp({
    data() {
        return {
            numberOne: 3,
            numberTwo: 8,
            sum: 0,
            subtraction: 0,
            multiple: 0,
            distribute: 0,
            chat: '',
            desc: '',
            password: '',
            confirmPassword: '',
            passwordDesc: '',
            buttonShow: false,
        }
    },
    computed: {
        // sum() {
        //     return this.numberOne + this.numberTwo
        // },
        // subtraction() {
        //     return this.numberOne - this.numberTwo
        // },
        // multiple() {
        //     return this.numberOne * this.numberTwo
        // },
        // distribute() {
        //     return this.numberOne / this.numberTwo
        // },
    },
    methods: {
       calculate() {
            this.sum = this.numberOne + this.numberTwo
            this.subtraction = this.numberOne - this.numberTwo
            this.multiple = this.numberOne * this.numberTwo
            this.distribute = this.numberOne / this.numberTwo
       },
       isChatting(){
            this.desc = 'Sedang mengetik...'
       },
       isSamePassword(){
            if(this.password == this.confirmPassword){
                this.buttonShow = true
                this.passwordDesc = 'Password is same please sign up'
            }else{
                this.buttonShow = false
                this.passwordDesc = 'Password is not same'
            }
       }
    },
    watch: {
        chat: 'isChatting',
        confirmPassword: 'isSamePassword'
    }
})

app.mount('#app')