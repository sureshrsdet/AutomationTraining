let customerName: string = "John Doe";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;

if (creditScore > 750) {
  console.log(
    `Congratulations! Hello ${customerName} Your loan application has been approved`,
  );
} else if (creditScore > 650 && creditScore < 750) {
  if (income >= 50000) {
    if (isEmployed) {
      if (debtToIncomeRatio < 40) {
        console.log(
          `Congratulations! Hello ${customerName} Your loan application has been approved`,
        );
      } else {
        console.log(
          `Sorry! Hello ${customerName} Your DTI ratio is greater than 40%, the loan is denied.`,
        );
      }
    } else {
      console.log(
        `Sorry! Hello ${customerName} You are unemployed, the loan is denied.`,
      );
    }
  } else {
    console.log(
      `Sorry! Hello ${customerName} Your income is below 50000, the loan is denied.`,
    );
  }
} else {
  console.log(
    `Sorry! Hello ${customerName} Your credit score is below 650, the loan is denied.`,
  );
}
