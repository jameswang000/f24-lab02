import { Shape } from "./shape"

/* 
 * Constructor no longer returns radius as an
 * attribute of the returned object.
 */
function circle(radius: number): Shape { 
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { circle }
