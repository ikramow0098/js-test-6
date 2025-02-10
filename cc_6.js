// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}
console.log(calculateProfit(20, 30, 100)); // "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // "Total Profit: $4000"

// Task 2: Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    return `Sales Tax: $${amount * taxRate}`;
};
console.log(calculateSalesTax(100, 0.07)); // "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // "Sales Tax: $50"

// Task 3: Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonusRate = performanceRating === "Excellent" ? 0.2 :
                    performanceRating === "Good" ? 0.1 :
                    performanceRating === "Average" ? 0.05 : 0;
    return `Bonus: $${salary * bonusRate}`;
};
console.log(calculateBonus(5000, "Excellent")); // "Bonus: $1000"
console.log(calculateBonus(7000, "Good"));      // "Bonus: $700"