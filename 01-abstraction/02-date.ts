// Abstraction Example with Date class

// Step 1: Abstraction layer ready-made milti hai JS ke andar
const now = new Date();  

// Step 2: Use exposed API methods
const currentYear = now.getFullYear();   // abstraction deta hai sirf result
const currentMonth = now.getMonth() + 1; // abstraction, internally 0-based
const currentDate = now.getDate();       // abstraction deta hai din

// Step 3: User sirf result consume karta hai
console.log("Year:", currentYear);
console.log("Month:", currentMonth);
console.log("Date:", currentDate);
