interface Shape{
    area(): number;
    perimeter(): number;
}

// CIRCLE CLASS
class Circle implements Shape {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this. radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// RECTANGLE CLASS
class Rectangle implements Shape {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// same fun to calculate area of any shape
function calculateTotalArea(shape: Shape): number {
    return shape.area()
}


let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(10,20);
console.log("Area of Circle: ", calculateTotalArea(circle));
console.log("Area of Rectagle: ", calculateTotalArea(rectangle));