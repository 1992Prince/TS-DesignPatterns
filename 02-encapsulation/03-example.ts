// 🧠 Encapsulation Example in TypeScript
// - private fields hide data (Encapsulation)
// - getters & setters control how data is accessed/modified

class Employee {
  // Private fields → data hiding
  private _name: string;
  private _salary: number;

  constructor(name: string, salary: number) {
    this._name = name;
    this._salary = salary;
  }

  // ✅ Getter for name
  get name(): string {
    return this._name;
  }

  // ✅ Setter for name
  set name(newName: string) {
    if (newName.trim().length === 0) {
      throw new Error("Name cannot be empty!");
    }
    this._name = newName;
  }

  // ✅ Getter for salary
  get salary(): number {
    return this._salary;
  }

  // ✅ Setter for salary (with validation)
  set salary(amount: number) {
    if (amount < 0) {
      throw new Error("Salary cannot be negative!");
    }
    this._salary = amount;
  }

  // ✅ Public method that uses private fields internally
  displayDetails(): void {
    console.log(`Employee: ${this._name}, Salary: ₹${this._salary}`);
  }
}

// 🧪 Using the class
const emp1 = new Employee("Prince", 50000);

// Access data using getters
console.log(emp1.name);       // Prince
console.log(emp1.salary);     // 50000

// Modify data using setters
emp1.name = "Rohit";
emp1.salary = 60000;

// Try to set invalid value (throws error)
// emp1.salary = -1000;  ❌

emp1.displayDetails(); // Employee: Rohit, Salary: ₹60000
