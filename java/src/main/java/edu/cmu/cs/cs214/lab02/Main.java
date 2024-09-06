package edu.cmu.cs.cs214.lab02;

import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Shape;

/* 
 * Modified rectangle variable to be of 
 * type Shape instead of Rectange
 * and imports to reflect that.
 */
public class Main {
    public static void main(String[] args) {
        Shape rectangle = new Rectangle(2, 3);

        Renderer renderer = new Renderer(rectangle);

        renderer.draw();
    }
}
