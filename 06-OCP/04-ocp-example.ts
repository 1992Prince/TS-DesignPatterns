// All customers class should implement Customer interface and must return discount as per category
interface Customer3{
    giveDiscount(): number;
}

class RegularCustomer3 implements Customer3{

    giveDiscount(): number {
        return 10;
    }
}

class PremiumCustomer3 implements Customer3{

    giveDiscount(): number {
        return 20;
    }
}

// now we will hav CustomerDiscount class with giveDiscount method that accepts customer 
// and this method as per customer type will return the actual discount 

class CustomerDiscount {

    giveDiscount(customer: Customer3): number {
        return customer.giveDiscount();
    }
}


// in real world app, if u need to give discount to regular customer then
// create obj of regular customer class and create of customerDiscount class
// and pass the regular customer obj as param to giveDiscount and it will give actual discount
// Customer is interface so it will accepts all impls class that implement it

let regularCust: RegularCustomer3 = new RegularCustomer3();
let custDiscount: CustomerDiscount = new CustomerDiscount();

let discount = custDiscount.giveDiscount(regularCust);

console.log(`Regular Customer discount is: ${discount}`);

// if u want to get premium customer discount
let premiumCust: PremiumCustomer3 = new PremiumCustomer3();
discount = custDiscount.giveDiscount(premiumCust);

console.log(`Premium Customer discount is: ${discount}`);

// later is new customer category is added then that class have to impleent Customer interface only
// so thats how with help of interface and abstraction we are impleenting OCP and
// not editing existing classes