package edu.cmu.cs.cs214.lab02.shapes;

/* 
 * height and width variables set to
 * private for encapsulation
 */
public class Rectangle implements Shape {
    private double height;
    private double width;
    
    public Rectangle(double height, double width){
        this.height = height;
        this.width = width;
    }

    @Override
    public double getArea() {
        return height * width;
    }
}
