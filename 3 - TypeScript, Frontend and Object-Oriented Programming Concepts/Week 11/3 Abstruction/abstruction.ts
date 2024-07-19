// Abstract class representing a shape
abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;
    printing(){
        console.log(print);
    }
  }
  
  // Concrete subclass representing a Circle
  class Circle extends Shape {
    private radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    getPerimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Concrete subclass representing a Rectangle
  class Rectangle extends Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    getArea(): number {
      return this.width * this.height;
    }
  
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }