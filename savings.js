const balance = (openingSum, interestRate, taxFreeLimit, taxRate, numMonths) => {
  let accountBalance = openingSum;

  for (let monthCount = 0; monthCount < numMonths; monthCount++) {
    const interest = accountBalance * (interestRate / 100);
    accountBalance = accountBalance + interest;

    if (accountBalance > taxFreeLimit) {
      const taxToDeduct = (taxRate / 100);
      accountBalance = accountBalance - taxToDeduct;
    }
  }
  return accountBalance;
}

module.exports = {
  balance
}