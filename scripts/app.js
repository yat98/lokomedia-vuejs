const { createApp } = Vue
const app = createApp({
    data() {
        return {
            message: 'Learn VueJS'
        }
    },
    computed: {
        uppercase() {
            const value = this.message
            if(!value) return ''
            return value.toString().toUpperCase()
        },
        lowercase() {
            const value = this.message
            if(!value) return ''
            return value.toString().toLowerCase()
        },
        flip() {
            const value = this.message
            if(!value) return ''
            return value.toString().split('').reverse().join('')
        },
        flip2() {
            const value = this.message
            if(!value) return ''
            return value.toString().split(' ').reverse().join(' ')
        },
        capitalize() {
            const value = this.message
            if(!value) return ''
            return value.toString().charAt(0).toUpperCase() + value.slice(1)
        },
    }
}).mount('#app')