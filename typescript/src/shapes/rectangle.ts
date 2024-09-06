import { Shape } from "./shape"

/* 
 * Constructor no longer returns radius as an
 * attribute of the returned object.
 */
function newRectangle(width: number, height: number): Shape {
    return {
        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
