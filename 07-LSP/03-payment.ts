/**
Prince u can think Y we are using abstract class and not interface.
Yes it is 100% possible we can use interface but
It is bcoz in LSP we talk about parent and child class and so we kept it as abstract class.
 */

abstract class PaymentProcessor {
    abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Credit Card Payments - Amount ${amount}`);
    }
}

class DebitCardProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Debit Card Payments - Amount ${amount}`);
    }
}

class PaypalProcessor extends PaymentProcessor {
    processPayment(amount: number): void {
        console.log(`Processing Paypal Payments - Amount ${amount}`);
    }
}

// client code
// usually in our apps we mostly have class or functions that performs payment processing
// for diff payment modes


// below method is responsible for charging payments from customer
// it should have 2 params - a) what kind of payment mode customer want to use for payment
//                           b) amount customer have to pay
function executePayment(paymentMode: PaymentProcessor, amount: number){
    paymentMode.processPayment(amount);
}

// Now cashier will just call executePayment class with mode type and amount to be deducted
// here cashier will pass mode by creating object of CreditCardProcessor or DebitCardProcessor\
// in real life on laptop screen cashier selects payment mode from dropdown that creates object
// of that payment mode and then cashier enters amount 

let paypalMode: PaypalProcessor = new PaypalProcessor();
executePayment(paypalMode, 101); // Processing Paypal Payments - Amount 101

// Here in executePayment fun param super type paymentMode can be replaced with its subtype objects
// like paypalMode or diff subtype objects without changing any code
// This shows implementation of LSP