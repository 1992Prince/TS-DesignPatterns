// Super type (common contract)
interface PaymentMethod {
  pay(amount: number): Promise<string>; // returns a transaction id (string)
}

// Subtypes (concrete implementations)
class CreditCard implements PaymentMethod {
  constructor(private card: string) {}
  async pay(amount: number) {
    return `cc-tx-${Date.now()}`; // pretend gateway call
  }
}

class PayPal implements PaymentMethod {
  constructor(private email: string) {}
  async pay(amount: number) {
    return `pp-tx-${Date.now()}`;
  }
}

// Single method that accepts the super type (PaymentMethod)
async function checkout(payment: PaymentMethod, amount: number) {
  // Because param type is PaymentMethod, ANY subtype is accepted here
  const txId = await payment.pay(amount);
  console.log(`Paid ${amount} via ${payment.constructor.name}, tx=${txId}`);
}

// Usage: pass different subtypes — same checkout function handles all
(async () => {
  const cc = new CreditCard("4111-1111-1111-1111");
  const pp = new PayPal("me@example.com");

  await checkout(cc, 50); // accepts CreditCard (subtype)
  await checkout(pp, 25); // accepts PayPal (subtype)

  // Also possible: array of mixed subtypes
  const payments: PaymentMethod[] = [cc, pp];
  for (const p of payments) await checkout(p, 10);
})();


/**
 * Output:
 * Paid 50 via CreditCard, tx=cc-tx-1759632383560
 * Paid 25 via PayPal, tx=pp-tx-1759632383561
 * Paid 10 via CreditCard, tx=cc-tx-1759632383561
 * Paid 10 via PayPal, tx=pp-tx-1759632383561
 */