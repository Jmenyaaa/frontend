function bankAccount(number, holderName, balance) {
    this.number = number,
    this.balance = balance,
    this.holderName = holderName;
}

const firstAccount = new bankAccount(12345, "Müller", 2000);
console.log(firstAccount);
firstAccount.chechBalance = chechBalance;
firstAccount.chechBalance();

function chechBalance() {
    return this.balance;
}