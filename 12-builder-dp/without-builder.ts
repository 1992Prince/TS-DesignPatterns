/**
🧠 Scenario to Explain

A Customer can have minimum details (to place an order) — just fname, lname, email.

But if they want, they can also add phone number and address (maximum details).

So, we’ll use the Builder Pattern to create the customer object step-by-step.
 */

// customer-without-builder.ts

class DominosCustomer {
  fname: string;
  lname: string;
  email: string;
  phoneNum?: string;
  address?: string;

  constructor(fname: string, lname: string, email: string, phoneNum?: string, address?: string) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.phoneNum = phoneNum;
    this.address = address;
  }
}

// ❌ Creating customer object
const customer1 = new DominosCustomer("Rahul", "Verma", "rahul@gmail.com");
const customer2 = new DominosCustomer("Priya", "Sharma", "priya@gmail.com", "9876543210");
const customer3 = new DominosCustomer("Ravi", "Kumar", "ravi@gmail.com", "9999999999", "Delhi");

console.log(customer1);
console.log(customer2);
console.log(customer3);


/**
DominosCustomer {
  fname: 'Rahul',
  lname: 'Verma',
  email: 'rahul@gmail.com',
  phoneNum: undefined,
  address: undefined
}
DominosCustomer {
  fname: 'Priya',
  lname: 'Sharma',
  email: 'priya@gmail.com',
  phoneNum: '9876543210',
  address: undefined
}
DominosCustomer {
  fname: 'Ravi',
  lname: 'Kumar',
  email: 'ravi@gmail.com',
  phoneNum: '9999999999',
  address: 'Delhi'
}

😣 Problems:

Too many parameters in constructor — confusing order!

Hard to remember which param is optional or required.

When more optional fields are added, constructor grows messy.
 */
