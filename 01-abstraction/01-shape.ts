interface Shape3{
    area(): number;
    perimeter(): number;
}

// CIRCLE CLASS
class Circle3 implements Shape3 {
    constructor(private radius: number) {}

    area(): number {
        return Math.PI * this.radius * this. radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// RECTANGLE CLASS
class Rectangle3 implements Shape3 {
    constructor(private width: number, private height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// same fun to calculate area of any shape
function calculateTotalArea(shape: Shape3): number {
    return shape.area()
}


let circle3: Circle3 = new Circle3(5);
let rectangle3: Rectangle3 = new Rectangle3(10,20);
console.log("Area of Circle: ", calculateTotalArea(circle3));
console.log("Area of Rectagle: ", calculateTotalArea(rectangle3));