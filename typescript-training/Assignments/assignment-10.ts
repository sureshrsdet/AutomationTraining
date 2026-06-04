// let prices: number[] = [7, 6, 4, 3, 1];
// let minPrice = prices[0];
// let maxProfit = 0;

// for (let i = 1; i < prices.length; i++) {
//   const currentPrice = prices[i];
//   // Update minimum price seen so far
//   if (currentPrice < minPrice) {
//     minPrice = currentPrice;
//   }
//   // Calculate profit if sold today
//   const potentialProfit = currentPrice - minPrice;
//   // Update max profit if better
//   if (potentialProfit > maxProfit) {
//     maxProfit = potentialProfit;
//   }
// }

// console.log(maxProfit);

function maxProfit(prices: number[]): number {
  if (prices.length < 2) return 0;
  let minPrice: number = prices[0]!;
  let maxProfit = 0;
  for (let i: number = 1; i < prices.length; i++) {
    const currentPrice: number = prices[i]!;
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }
    const profit: number = currentPrice - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
