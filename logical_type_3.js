let bonusBalance = 500; 
let purchasesThisMonth = 2;
let purchaseAmount = 3000; 

const baseRate = 10;
const premiumRate = 20;
const frequentBonus = 5;

let finalRate = bonusBalance > 5000 ? premiumRate : baseRate;

if (purchasesThisMonth > 1) {
    finalRate += frequentBonus;
}

console.log(`Процент от покупки: ${finalRate}%`);
