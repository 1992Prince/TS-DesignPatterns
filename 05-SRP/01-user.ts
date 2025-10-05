// 🔹 Single Responsibility Principle (SRP)
// ------------------------------------------------------------
// SRP says — "A class should have one and only one reason to change."
// Meaning: a class should have only ONE responsibility or job.
// ------------------------------------------------------------
//
// ❌ Common mistake:
// Many developers mix multiple responsibilities inside one class.
// Example: keeping both user data and user authentication logic inside the same User class.
// 
// This creates tight coupling — if authentication logic changes,
// you’ll have to modify the User class too, even though its purpose
// is just to represent a user entity.
//
// ✅ Correct Approach:
// - Keep the User class focused only on holding user-related data.
// - Move authentication logic into a separate class (UserAuthentication).
// - That way, each class has its own single responsibility.
//
// ------------------------------------------------------------
// Example Implementation
// ------------------------------------------------------------

class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    // ❌ Wrong approach (violates SRP)
    // authenticate(password: string) {
    //     // authentication logic here
    // }

    // ✅ User class is now only responsible for user data,
    // not how user is authenticated.
}

class UserAuthentication {
    user: User;

    constructor(user: User) {
        this.user = user;
    }

    authenticate(password: string) {
        // ✅ Authentication responsibility belongs here.
        // Example: check password hash, token validation, etc.
        console.log(`Authenticating user: ${this.user.email}`);
        // ... actual implementation logic
    }
}

// ------------------------------------------------------------
// 💡 Key Takeaways:
// ------------------------------------------------------------
// 1️⃣ Each class should have a single responsibility.
// 2️⃣ Change in one functionality (like authentication logic)
//     should not require modifying another (like user data).
// 3️⃣ Leads to loosely coupled, more testable, and maintainable code.
//
// ✅ Benefits in Automation Frameworks:
// - Page classes handle only UI interactions.
// - Utilities handle only reusable logic (like authentication, config).
// - Each component remains independent and easier to maintain.
// ------------------------------------------------------------
