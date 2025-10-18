/**
🧩 Definition (in simple words)

Polymorphism means “many forms” —
The same function or method behaves differently based on object type or the way it’s called.

In short:
➡️ Same method name, different behavior.


🔹 Polymorphism in Java vs TypeScript

| Concept                       | Java                                   | TypeScript                                                                      |
| ----------------------------- | -------------------------------------- | ------------------------------------------------------------------------------- |
| **Compile-time polymorphism** | ✅ Supported via **Method Overloading** | ⚠️ Not directly supported (TypeScript doesn’t allow true overloading like Java) |
| **Runtime polymorphism**      | ✅ Supported via **Method Overriding**  | ✅ Supported via **Method Overriding** using `extends` and `super`               |
| **Binding type**              | Compile-time & runtime                 | Runtime (mostly)                                                                |
| **Example mechanism**         | Overloading & Overriding               | Overriding only (with function overloading syntax support)                      |


🧠 Easy Way to Explain

“In Java, polymorphism happens in two ways —
Compile-time (overloading) and Runtime (overriding).
But in TypeScript, since it’s a JavaScript-based language (which is dynamically typed at runtime), 
we mainly get runtime polymorphism using method overriding.”

💻 Example: Runtime Polymorphism in TypeScript
 */

// 🧩 Example: Runtime Polymorphism (Method Overriding)

class Animal {
  makeSound(): void {
    console.log("Some generic animal sound...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("🐶 Dog barks");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("🐱 Cat meows");
  }
}

// ✅ Runtime Polymorphism in action
let a1: Animal = new Dog();
let a2: Animal = new Cat();

a1.makeSound(); // 🐶 Dog barks
a2.makeSound(); // 🐱 Cat meows

/**
🧠 Explanation:
Both Dog and Cat override makeSound() of Animal.
TypeScript calls the actual object’s method at runtime (like Java’s virtual method dispatch).
This is runtime polymorphism.

💬 Quick Teaching Line:

“In TypeScript, polymorphism mainly means method overriding —
where a subclass changes the behavior of a parent class method.
We can simulate overloading using multiple function signatures,
but true compile-time polymorphism like Java doesn’t exist.”
 */