class Shape {
    protected color: string;
    constructor(color: string) {
        this.color = color;
    }

    draw() {
        console.log('Drawing Shape with the color of', this.color)
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, radius: number) {
        super(color); // constructor from parent class (Shape)
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * (this.radius ^ 2)
    }
}

class Rectingle extends Shape {
    protected height: number;
    protected weidth: number;

    constructor(color: string, height: number, weidth: number) {
        super(color);
        this.height = height;
        this.weidth = weidth;
    }

    calculateArea(): number {
        return this.height * this.weidth;
    }
}

//square

class Square extends Rectingle {
    // has all members of Rectugle and Shape
    constructor(color: string, weidth: number) {
        super(color, weidth, weidth);
    }
}

const simpleShape = new Shape("Red");
simpleShape.draw();

console.log("Cirecl example");

const cirecleShape = new Circle("green", 10);
cirecleShape.draw() // coming from parent(Shape)
console.log(cirecleShape.calculateArea());


console.log("Rectingle example");

const recShape = new Rectingle("Yellow", 10, 20);
recShape.draw() // parent: Shape
console.log(recShape.calculateArea());


console.log("Square example");

const squareShape = new Square("black", 10);
squareShape.draw() // from the [parent of parent] Shape->Rectungle->Square (Multilevel Inhertance)
console.log(squareShape.calculateArea()) // from parent: Rectingle