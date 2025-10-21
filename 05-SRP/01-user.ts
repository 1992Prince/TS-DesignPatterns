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


/* 
  SRP (Single Responsibility Principle) - Short & Simple:
  ------------------------------------------------------
  Every module/class should have exactly one reason to change.
  That means one class = one responsibility (one job).
*/

/* ------------------------------
   Quick plain-English explanation
   ------------------------------
   SRP means split code so each piece does just one job:
   - Page objects: only know how to interact with UI (clicks, fills).
   - Services: only know how to call APIs or perform data logic.
   - Helpers/Utils: small pure functions or formatting helpers.
   - Tests: orchestrate the flow using the above building blocks.
   This makes code easier to read, test, and change in interviews / real life.
*/

/* ================================
   BAD EXAMPLE: Violates SRP
   ================================
   Single test class have test method, does navigation,locators are hardcoded here, actions like click/fill done here,
   API calls are done if needed, assertions, and test data.

   So if any of these things change, this class needs to be changed.
*/

/* 
  Problems in BadBigPage:
  - UI interaction, API calls, assertions, and test data are all bundled.
  - Many reasons to change: UI change, API change, assertion style change, or test data change.
*/


/* ================================
   GOOD EXAMPLE: Follows SRP
   ================================
   Split responsibilities:
   - LoginPage: UI interactions only
   - AuthService: API calls only
   - TestData: test data only
   - Assertions / Test: test orchestration only
*/