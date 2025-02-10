// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}
console.log(calculateProfit(20, 30, 100)); // "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // "Total Profit: $4000"

