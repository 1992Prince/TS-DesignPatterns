/**
Prince u can think Y we are using abstract class and not interface.
Yes it is 100% possible we can use interface but
It is bcoz in LSP we talk about parent and child class and so we kept it as abstract class.
 */

abstract class Shape{
    abstract calculateArea(): number;
}

class RectangleShape extends Shape {
    constructor(public width: number, public length: number){
        super();
    }

    public calculateArea(): number {
        return this.width * this.length;
    }
}

class SquareShape extends Shape {
    constructor(public size: number){
        super();
    }

    public calculateArea(): number {
        return this.size * this.size;
    }
}

// client code

function area(shape: Shape) {
    return shape.calculateArea();
}

const rect: RectangleShape = new RectangleShape(10,20);
const sqr: SquareShape = new SquareShape(30);

console.log(`Rectangle area is : ${area(rect)}`);
console.log(`Square area is : ${area(sqr)}`);

/**
"We have an abstract class Shape that defines an abstract method calculateArea(). 
The classes RectangleShape and SquareShape extend this Shape class, so they must implement 
their own version of the calculateArea() method. 

Now, we have a client function area(shape: Shape) 
that takes a Shape type argument. 

The client doesn’t need to know whether it’s a rectangle or a square — it just calls 
calculateArea() and gets the correct area.

Since we can replace the Shape type in that function with either RectangleShape or SquareShape 
without changing any code or breaking the behavior, the Liskov Substitution Principle is properly 
implemented here."

🔥 Optional 1-line closer:

"In short, the parent class Shape can be substituted by its child classes without affecting 
program correctness — that’s exactly LSP in action."
 */