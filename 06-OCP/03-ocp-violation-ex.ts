class Discount {


  giveDiscount(customerType: "regular" | "premium"): number {
    if (customerType === "regular") return 10;
    if (customerType === "premium") return 20;
    return 0;
  }
}



// 1) Bad (OCP broken) — direct if/switch in one method

/**
Problem: suppose later new customer category came vvip and we need to give diff discount for them
         now jab vvip aayega, tumko function signature aur body dono edit karne 
         padenge ("regular" | "premium" → add "vvip", aur naye if/case add).

Ye tested code ko modify kar raha — OCP violation. Har change regression risk badhata hai.
So for adding new customerType we are editing existing code and this is how we are breaking OCP
Design principle.

Then what is better way to implement OCP.
 */




/**
🚫 What you tried (incorrect)
class Discount {
  function giveDiscount(customerType: "regular" | "premium"): number {
    // ...
  }
}


❌ This gives a syntax error:

Unexpected token 'function' or Class methods cannot have the 'function' keyword.

🔍 Why this happens

Because:

In TypeScript (and JavaScript), class methods are not defined with the function keyword.

Inside a class, the syntax is a shorthand for defining methods.

So:

giveDiscount() { ... }


is equivalent to

Discount.prototype.giveDiscount = function() { ... }


behind the scenes.

If you add function, you’re mixing the function declaration syntax (used outside a class) with method shorthand syntax (used inside a class), which is invalid.

🧠 Rule of thumb
Where	Correct Syntax	Example
Outside class	use function	function greet() {}
Inside class	omit function	greet() {}
 */