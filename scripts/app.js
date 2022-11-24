const { createApp } = Vue
const app = createApp({
    data() {
        return {
            first: 'Learn VueJS',
            second: 'Coffee',
            valid: false,
            valid2: false,
        }
    },
    methods: {
        validate() {
            this.valid = true
        },
        validate2() {
            this.valid2 = true
        },
    }
})

app.component('bold', {
    template: '<b><slot></slot></b>'
})

app.component('multi', {
    template: `
        <div>
            <b>This is bold</b>
            <br>
            <i>This is italic</i>
            <br>
            <u>This is underline</u>
        </div>`
})

app.component('student', {
    template: '<li><slot></slot></li>'
})

app.component('register', {
    data() {
        return {
            students: [
                {name: 'Eha', grade: 'XII'},
                {name: 'Sri', grade: 'XI'},
                {name: 'Rizky', grade: 'X'},
            ]
        }
    },
    template: `
        <div>
            <ol>
                <student v-for="student in students">
                    {{ student.name }} &mdash; {{ student.grade }}
                </student>
            </ol>
        </div>`
})

app.component('creation', {
    props: ['title','desc'],
    template: `
        <div>
            <h2>{{ title }}</h2>
            <p>{{ desc }}</p>
        </div>`
})

app.component('message', {
    props: ['firstMessage','secondMessage'],
    template: `
        <div>
            <b>{{ firstMessage }}</b> with
            <b>{{ secondMessage }}</b>
        </div>`
})

app.component('name', {
    template: `
        <input type="text" placeholder="Input your name" @blur="validate"/>`,
    methods: {
        validate() {
            this.$emit('applied')
        }
    }
})

app.component('name2', {
    template: `
        <input type="text" placeholder="Input your name" @blur="$emit('validate2')"/>`,
})

app.component('list', {
    template: `<li><slot></slot></li>`,
})

app.component('vechiles', {
    template: `
        <h1 v-if="showTitle">Select Your Gift</h1>    
        <ul>
            <list v-for="(vechile, index) in vechiles">
                <span v-if="showGift">
                    {{ vechile.type }}
                    <button @click="alertGift(index)" v-if="showAlert">Select</button>
                </span>
            </list>
        </ul>
        <h1 v-if="showResult">
            Please get your gift in the dealer
        </h1>
    `,
    data() {
        return {
            vechiles: [
                {type: 'Plane'},
                {type: 'Car'},
                {type: 'Motorcycle'},
            ],
            showAlert: true,
            showGift: true,
            showTitle: true,
            showResult: false,
        }
    },
    methods: {
        alertGift(index){
            alert(`Congratulation you get ${this.vechiles[index].type} gift`)
            this.showAlert = false
            this.showGift = false
            this.showTitle = false
            this.showResult = true

        }
    }
})

app.mount('#app')