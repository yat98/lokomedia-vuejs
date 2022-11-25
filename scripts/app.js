const { createApp } = Vue
const app = createApp({
    
})

app.component('todo',{
    data() {
        return {
            todos: [],
            title: ''
        }
    },
    methods: {
        add() {
            if(this.title != ''){
                this.todos.push({
                    title: this.title,
                    done: false,
                    disabled: true,
                })
                this.title = ''
            }else{
                alert('todo is required.')
            }
        },
        done(index) {
            this.todos[index].done = !this.todos[index].done
        },
        edit(index) {
            this.todos[index].disabled = !this.todos[index].disabled
        },
        destroy(index) {
            this.todos.splice(index,1)
        },
        destroyDone(){
            let i = 0
            while(i < this.todos.length){
                if(this.todos[i].done) this.todos.splice(i,1)
                i++
            }
        },
        destroyAll(){
            this.todos = []
        }
    },
    template: `
        <h1>Todo List</h1>
        <input type="text" placeholder="Input your todo" v-model="title" @keyup.enter="add">
        <h2>List Todo:</h2>
        <div>
            <ol>
                <li v-for="(todo, index) in todos">
                    <button @click="done(index)">{{ todo.done ? 'undone' : 'done' }}</button>
                    <input type="text" v-model="todo.title" :key="index" :disabled="todo.disabled" :class="{line: todo.done}"/>
                    <button @click="edit(index)">{{ todo.disabled ? 'edit' : 'save' }}</button>
                    <button @click="destroy(index)">delete</button>
                </li>
            </ol>
        </div>
        <button @click="destroyDone">delete all done</button>
        <button @click="destroyAll">delete all</button>`
})

app.mount('#app')