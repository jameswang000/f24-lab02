import { newRenderer } from "./renderer.js"
import { Shape } from "./shapes/shape.js";
import { newRectangle } from "./shapes/rectangle.js";

/* 
 * Modified rectangle variable to be of 
 * type Shape instead of Rectange
 * and imports to reflect that.
 */

const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();