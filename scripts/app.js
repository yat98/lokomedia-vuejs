const { createApp } = Vue
const app = createApp({
    data() {
        return {
            x: 10,
            y: 10,
            length: 50,
            width: 50,
            colorOne: 'red',
            colorTwo: 'green',
            colorThree: 'blue',
            colorFour: 'orange',
        }
    },
    directives: {
        canvas: (el, binding, vnode) => {
            const canvas  = el.getContext('2d')
            const bindingInstance = binding.instance
            canvas.fillStyle = bindingInstance.colorOne
            canvas.fillRect(
                bindingInstance.x,
                bindingInstance.y,
                bindingInstance.length,
                bindingInstance.width
            )

            canvas.fillStyle = bindingInstance.colorTwo
            canvas.fillRect(
                bindingInstance.x + 55,
                bindingInstance.y,
                bindingInstance.length,
                bindingInstance.width
            )
            
            canvas.fillStyle = bindingInstance.colorThree
            canvas.fillRect(
                bindingInstance.x,
                bindingInstance.y + 55,
                bindingInstance.length,
                bindingInstance.width
            )

            canvas.fillStyle = bindingInstance.colorFour
            canvas.fillRect(
                bindingInstance.x + 55,
                bindingInstance.y + 55,
                bindingInstance.length,
                bindingInstance.width
            )
        }
    }
}).mount('#app')
