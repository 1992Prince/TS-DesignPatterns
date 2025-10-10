// All customers class should implement Customer interface and must return discount as per category
interface Customer{
    giveDiscount(): number;
}

class RegularCustomer implements Customer{

    giveDiscount(): number {
        return 10;
    }
}

class PremiumCustomer implements Customer{

    giveDiscount(): number {
        return 20;
    }
}

// now we will hav CustomerDiscount class with giveDiscount method that accepts customer 
// and this method as per customer type will return the actual discount 

class CustomerDiscount {

    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}


// in real world app, if u need to give discount to regular customer then
// create obj of regular customer class and create of customerDiscount class
// and pass the regular customer obj as param to giveDiscount and it will give actual discount
// Customer is interface so it will accepts all impls class that implement it

let regularCust: RegularCustomer = new RegularCustomer();
let custDiscount: CustomerDiscount = new CustomerDiscount();

let discount = custDiscount.giveDiscount(regularCust);

console.log(`Regular Customer discount is: ${discount}`);

// if u want to get premium customer discount
let premiumCust: PremiumCustomer = new PremiumCustomer();
discount = custDiscount.giveDiscount(premiumCust);

console.log(`Premium Customer discount is: ${discount}`);

// later is new customer category is added then that class have to impleent Customer interface only
// so thats how with help of interface and abstraction we are impleenting OCP and
// not editing existing classes