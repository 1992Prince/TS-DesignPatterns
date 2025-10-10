// Let’s improve this using Builder Pattern.

/**
🎯 Goal

We’ll make object creation readable like this:

const customer = Customer.builder("Rahul", "Verma", "rahul@gmail.com")
  .setPhoneNum("9999999999")
  .setAddress("Delhi")
  .build();
 */


// customer-with-builder.ts

// Step 1️⃣: Create main Customer class

class DomnosCustomer {
  fname: string;
  lname: string;
  email: string;
  phoneNum?: string;
  address?: string;

  constructor(builder: CustomerBuilder) {
    this.fname = builder.fname;
    this.lname = builder.lname;
    this.email = builder.email;
    this.phoneNum = builder.phoneNum;
    this.address = builder.address;
  }

  // static method to start building
  static builder(fname: string, lname: string, email: string) {
    return new CustomerBuilder(fname, lname, email);
  }
}

// Step 2️⃣: Create the builder class
class CustomerBuilder {
  fname: string;
  lname: string;
  email: string;
  phoneNum?: string;
  address?: string;

  constructor(fname: string, lname: string, email: string) {
    // required fields
    this.fname = fname;
    this.lname = lname;
    this.email = email;
  }

  // optional fields (method chaining)
  setPhoneNum(phoneNum: string): CustomerBuilder {
    this.phoneNum = phoneNum;
    return this;
  }

  setAddress(address: string): CustomerBuilder {
    this.address = address;
    return this;
  }

  // final step - build the object
  build(): DomnosCustomer {
    return new DomnosCustomer(this);
  }
}

// Step 3️⃣: Usage examples

// ✅ Minimum details (can still place order)
const customer5 = DomnosCustomer.builder("Rahul", "Verma", "rahul@gmail.com").build();

// ✅ Maximum details (full profile)
const customer6 = DomnosCustomer.builder("Priya", "Sharma", "priya@gmail.com")
  .setPhoneNum("9876543210")
  .setAddress("Delhi")
  .build();

console.log(customer5);
console.log(customer6);

/**
DomnosCustomer {
  fname: 'Rahul',
  lname: 'Verma',
  email: 'rahul@gmail.com',
  phoneNum: undefined,
  address: undefined
}
DomnosCustomer {
  fname: 'Priya',
  lname: 'Sharma',
  email: 'priya@gmail.com',
  phoneNum: '9876543210',
  address: 'Delhi'
}


🧩 Flow Diagram (for students)
Customer.builder(fname, lname, email)
        ↓
    new CustomerBuilder()
        ↓
  optional: .setPhoneNum()
        ↓
  optional: .setAddress()
        ↓
        .build()
        ↓
    ✅ Final Customer Object

🧠 Simple Notes for Students
| Concept                      | Meaning                                                                                                             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Builder Pattern**          | A way to create complex objects step-by-step                                                                        |
| **Why use it?**              | When a class has many optional fields                                                                               |
| **What is `.build()`?**      | Final step that returns the real object                                                                             |
| **What is Method Chaining?** | Calling multiple methods one after another (returns `this`)                                                         |
| **Example**                  | Like filling an online form — first name, last name (required), then optional fields, and finally “Submit” (build). |


🍕 Simple Analogy to Remembers

Think of Builder Pattern like ordering a pizza 🍕

You must choose size and base (required).

Then you optionally add toppings.

Finally, you click Build My Pizza!

→ That’s your build() method!
 */
