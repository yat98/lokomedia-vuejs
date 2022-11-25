const { createApp  } = Vue
const app = createApp({
    
})

app.component('extractor', {
    data() {
        return {
            fullName: '',
            firstName: '',
            middleName: '',
            lastName: '',
            status: false,
        }
    },
    methods: {
        extract() {
            const fullName = this.fullName.split(' ')
            this.firstName = fullName[0]
            let i = 1
            this.middleName = ''
            while(i < (fullName.length - 1)){
                this.middleName += ` ${fullName[i]}`
                i++
            }
            this.lastName = fullName[fullName.length - 1]
            this.status = true
        },
        capitalize(value){
            if(!value) return ''
            value =  value.toString()
            return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
        }
    },
    computed:{
        capitalizeFirstName(){
            return this.capitalize(this.firstName)
        },
        capitalizeMiddleName(){
            let i = 0
            let middleName = ''
            const middleNameArr = this.middleName.split(' ')
            while(i < (middleNameArr.length)){
                middleName += this.capitalize(middleNameArr[i])
                if(i != (middleNameArr.length - 1)) middleName += ' '
                i++
            }
            return middleName
        },
        capitalizeLastName(){
            return this.capitalize(this.lastName)
        },
    },
    template: `
        <h1>Name Extractor</h1>
        <input type="text" v-model="fullName" @keyup.enter="extract" placeholder="Input Your Fullname">
        <button @click="extract">Process</button>
        <div v-show="status">
            <h2>Welcome Mr./Mrs. {{ capitalizeLastName }}</h2>
            <p>The result of extract your name</p>
            <p>First Name: {{ capitalizeFirstName }}</p>
            <p>Middle Name: {{ capitalizeMiddleName }}</p>
            <p>Last Name: {{ capitalizeLastName }}</p>
        </div>`
})

app.mount('#app')