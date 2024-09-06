import { Shape } from "./shape"

/* 
 * Constructor no longer returns radius as an
 * attribute of the returned object.
 */
function square(sideLen: number): Shape {
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { square }