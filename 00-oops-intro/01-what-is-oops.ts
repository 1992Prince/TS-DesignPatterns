// 🧠 What is Object Oriented Programming (OOP) 🤔

/*
Object Oriented Programming (OOP) is a programming paradigm that uses the concept of objects 
to structure and organize code. It focuses on representing real-world entities as objects 
that contain both data (properties) and behavior (methods).

OOP helps developers write modular, reusable, and maintainable code. 
TypeScript supports full OOP features similar to languages like Java and C#.

The four main pillars of OOP are:
1. Abstraction
2. Encapsulation
3. Inheritance
4. Polymorphism
*/


// 🧩 Abstraction

/*
Abstraction is the process of hiding complex implementation details 
and showing only the essential features of an object.

It allows developers to focus on *what* an object does, 
not *how* it does it.

In TypeScript, abstraction is commonly achieved using 
abstract classes or interfaces.

// 🎯 Concept Simplified
Abstraction in Object-Oriented Programming (OOP) refers to 
simplifying complex systems by breaking them down into smaller, 
more manageable components.

It involves hiding the internal implementation details of a system 
and exposing only the essential features to the user (which, in this case, 
means another developer — not the end user).

// 🧠 Who cares about the implementation?
The developer who writes the class or module is responsible for the internal implementation.
The developer who uses that class doesn’t care about how it’s written — 
they only care about what it does.

So in abstraction:
- Implementer → Writes the complex logic (knows all details)
- User (other developer) → Just uses the public methods (only knows the purpose)

In short:
"Abstraction allows one developer to use another developer’s code 
without worrying about how it’s implemented."

// 🚗 Real-World Example to Understand

Imagine you’re a developer building a car-driving simulator app.

Another developer in your team has created a 'Car' class 
that has a method called 'startEngine()'.

Now, when you (as a developer) call:
    car.startEngine();

you don’t need to know:
- How fuel mixes with air
- How ignition works
- How the spark plug fires

All that internal logic (the “implementation”) is hidden inside 'startEngine()'.

You just need to know:
👉 “If I call startEngine(), the car starts.”

This is the real essence of abstraction — 
focus on *usage*, not *internal complexity*.


🎯 Clarification: Who is Abstraction meant for in OOP?

✅ In OOP (like in TypeScript, Java, etc.) —
Abstraction is for developers, not for application end-users.

🧠 Why?

Because OOP abstraction deals with how developers organize and design code,
not how users interact with the final product.

It hides technical implementation details (like logic, algorithms, data flow)
from other developers who just want to use the class, module, or API.


👨‍💻 Example:

End User: Clicks “Start Engine” in the app → They don’t care about OOP or abstraction.

Developer A: Wrote the Car class → Knows full engine logic (implementation).

Developer B: Just calls car.startEngine() → Doesn’t care how it works internally.

🧩 So abstraction helps Developer B use Developer A’s code easily and safely
without understanding or touching its complex internals.
*/



// 🧩 Encapsulation
/*
Encapsulation is the concept of bundling data (properties) 
and methods (functions) that operate on that data within a single unit — called a class.

It helps protect an object’s internal state by restricting direct access 
and allowing controlled interaction through public methods (getters/setters).
This ensures data integrity and better code organization.
*/


// 🧩 Inheritance
/*
Inheritance allows one class to acquire the properties and methods of another class.

It helps in reusing existing code, avoiding duplication, and establishing relationships 
between parent and child classes. 
The parent class is called the base or superclass, 
and the derived one is called the subclass or child class.
*/


// 🧩 Polymorphism
/*
Polymorphism means "many forms". It allows the same method or interface 
to behave differently based on the object it’s acting upon.

It makes code flexible and extensible — the same function can work 
with objects of different classes as long as they share a common structure.
*/


// ✨ Summary
/*
In short, OOP in TypeScript helps developers build scalable and maintainable applications 
by using objects to model real-world entities. 
The four pillars — Abstraction, Encapsulation, Inheritance, and Polymorphism — 
form the foundation for writing clean, reusable, and organized TypeScript code.
*/
