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
            // canvas.fillStyle = bindingInstance.colorOne
            // canvas.fillRect(
            //     bindingInstance.x,
            //     bindingInstance.y,
            //     bindingInstance.length,
            //     bindingInstance.width
            // )

            // canvas.fillStyle = bindingInstance.colorTwo
            // canvas.fillRect(
            //     bindingInstance.x + 55,
            //     bindingInstance.y,
            //     bindingInstance.length,
            //     bindingInstance.width
            // )
            
            // canvas.fillStyle = bindingInstance.colorThree
            // canvas.fillRect(
            //     bindingInstance.x,
            //     bindingInstance.y + 55,
            //     bindingInstance.length,
            //     bindingInstance.width
            // )

            // canvas.fillStyle = bindingInstance.colorFour
            // canvas.fillRect(
            //     bindingInstance.x + 55,
            //     bindingInstance.y + 55,
            //     bindingInstance.length,
            //     bindingInstance.width
            // )

            // Make Line
            canvas.beginPath()
            canvas.moveTo(30,120)
            canvas.lineTo(50,60)
            canvas.lineTo(60,100)
            canvas.lineTo(100,30)
            canvas.lineTo(120,70)
            canvas.lineTo(170,25)
            canvas.strokeStyle = bindingInstance.colorOne
            canvas.stroke()

            // Make Circle
            canvas.beginPath()
            canvas.arc(170,95,50,0,Math.PI * 2,false)
            canvas.strokeStyle = bindingInstance.colorTwo
            canvas.stroke()

            // Make Text
            canvas.font = '20px arial'
            canvas.fillStyle = bindingInstance.colorThree
            canvas.strokeText('Example',200,50)
            canvas.fillText('Example',200,100)
            canvas.beginPath()

            // Make Curve
            canvas.moveTo(500,100)
            canvas.bezierCurveTo(200,10,400,10,400,100)
            canvas.strokeStyle = bindingInstance.colorFour
            canvas.stroke()
        }
    }
}).mount('#app')
