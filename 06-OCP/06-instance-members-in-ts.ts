/**
🧩 Creating Instance Members in TypeScript Constructors

In TypeScript, you can create and initialize instance members in two ways:

🧠 1️⃣ Traditional Way (like Java / basic JS)

You declare properties at the class level, then assign them inside the constructor.

class Customer {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const cust = new Customer("Rahul", 28);
cust.displayInfo(); // Name: Rahul, Age: 28


✅ Here:

name and age are instance members.

They are created automatically when you use new Customer(...).

You must assign them via this.name = ... in the constructor.

💎 2️⃣ Short-Hand Way (TypeScript Feature — Access Modifier Parameters)

TypeScript allows a shortcut:
If you add a visibility modifier (public, private, or protected) before a constructor parameter,
TS automatically creates and assigns it as an instance member!

So this 👇
 */

class Customer {
  constructor(public name: string, public age: number) {}

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const cust = new Customer("Rahul", 28);
cust.displayInfo();

/**
is exactly the same as the first version!

✅ TS automatically:

Declares the property (name, age)

Assigns the parameter values to this.name and this.age

Reduces boilerplate code
 */