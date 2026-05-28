let transactions: number[] = [
  50000, -2000, 3000, -15000, -200, -300, 4000, -3000,
];
let totalNumOfCredits: number = 0;
let totalNumOfDebits: number = 0;
let totalAmountCredited: number = 0;
let totalAmountDebited: number = 0;
let suspiciousTransaction: number = 0;

for (let transaction of transactions) {
  if (transaction > 0) {
    totalAmountCredited += transaction;
    totalNumOfCredits++;
  } else if (transaction < 0) {
    totalAmountDebited -= transaction;
    totalNumOfDebits++;
  }
  if (transaction > 10000) {
    console.log(`Suspicious credit Transaction with Amount : ${transaction}`);
    suspiciousTransaction++;
  } else if (transaction < -10000) {
    console.log(`Suspicious debit Transaction with Amount : ${transaction}`);
    suspiciousTransaction++;
  }
}
console.log(`Total number of credit transactions : ${totalNumOfCredits}`);
console.log(`Total number of debit transactions : ${totalNumOfDebits}`);
console.log(`Total amount credited : ${totalAmountCredited}`);
console.log(`Total amount debited : ${totalAmountDebited}`);
console.log(
  `Total amount remaining at the end in Bank Account : ${totalAmountCredited - totalAmountDebited}`,
);
console.log(
  `Total number of suspicious transactions: ${suspiciousTransaction}`,
);
