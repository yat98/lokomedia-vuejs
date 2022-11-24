const { createApp } = Vue
const app = createApp({
    data() {
        return {
            x: 10,
            y: 10,
            length: 50,
            width: 50,
            color: 'blue',
        }
    },
    directives: {
        canvas: (el, binding, vnode) => {
            const canvas  = el.getContext('2d')
            const bindingInstance = binding.instance
            canvas.fillStyle = bindingInstance.color
            canvas.fillRect(
                bindingInstance.x,
                bindingInstance.y,
                bindingInstance.length,
                bindingInstance.width
            )
        }
    }
}).mount('#app')
