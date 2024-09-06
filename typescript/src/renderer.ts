import { Shape } from "./shapes/shape"

/* 
 * newRenderer now takes in argument of type
 * Shape instead of Rectange
 */
function newRenderer(shape : Shape) {
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }