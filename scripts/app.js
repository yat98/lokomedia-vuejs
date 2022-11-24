const { createApp } = Vue
const app = createApp({

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

app.mount('#app')