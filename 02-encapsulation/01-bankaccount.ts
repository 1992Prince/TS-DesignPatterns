// ============================================
// 🏦 BankAccount Example - Understanding Encapsulation
// ============================================

// 💡 Encapsulation:
// Encapsulation means hiding the internal state (fields) of a class
// and only exposing necessary behaviors through public methods.
//
// Here, the `balance` field is kept PRIVATE to prevent direct access.
// Users can interact with it ONLY through controlled methods like
// deposit() and withdraw().
// ============================================

class BankAccount {
    // 🔒 Private field to store account balance.
    // It cannot be accessed directly from outside this class.
    private _balance: number;

    // 🏁 Constructor initializes the bank account with an initial balance.
    constructor(initialBalance: number) {
        this._balance = initialBalance;
    }

    // ============================================
    // 🔍 Getter Method (Read-Only Access)
    // ============================================
    // Provides read-only access to the private `_balance` field.
    // This allows users to *view* their balance but not modify it directly.
    public get balance(): number {
        return this._balance;
    }

    // ============================================
    // 💰 Deposit Method
    // ============================================
    // Increases the balance by the given amount.
    // Validation ensures that negative deposits are rejected.
    public deposit(amount: number): void {
        if (amount < 0) {
            console.log("❌ Invalid deposit amount");
            return;
        }

        // ✅ Increase balance safely through method
        this._balance += amount;
        console.log(`✅ Deposited: ${amount}`);
    }

    // ============================================
    // 💸 Withdraw Method
    // ============================================
    // Decreases the balance by the given amount.
    // Ensures no overdraft and no negative withdrawals.
    public withdraw(amount: number): void {
        if (amount < 0) {
            console.log("❌ Invalid withdrawal amount");
            return;
        }

        if (this._balance - amount < 0) {
            console.log("❌ Insufficient funds");
            return;
        }

        // ✅ Deduct balance safely through method
        this._balance -= amount;
        console.log(`✅ Withdrawn: ${amount}`);
    }
}

// ============================================
// 🧠 Key Takeaway
// ============================================
// - The `_balance` field is PRIVATE → cannot be accessed directly.
// - All operations on `_balance` must go through methods.
// - This ensures data safety and maintains consistency in behavior.
//
// Example of Encapsulation violation (❌):
// myAccount._balance = 999999;  // ❌ Not allowed
//
// Correct way (✅):
// myAccount.deposit(500);
// myAccount.withdraw(200);
// console.log(myAccount.balance); // Safe and controlled access
// ============================================

// 🚀 Using the class
const myAccount = new BankAccount(1000);  // Initial balance = 1000
myAccount.deposit(500);                   // Adds 500 → total 1500
myAccount.withdraw(200);                  // Subtracts 200 → total 1300
console.log("💵 Current Balance is:", myAccount.balance);  // Outputs: 1300
