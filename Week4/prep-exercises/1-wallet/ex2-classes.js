import eurosFormatter from './euroFormatter.js';

class Wallet {
  #name;
  #cash;
  #dailyAllowance;
  #dayTotalWithDrawals;

  constructor(name, cash) {
    this.#name = name;
    this.#cash = cash;
    this.#dailyAllowance = 40;
    this.#dayTotalWithDrawals = 0;
  }
  
  get name() {
    return this.#name;
  }

  deposit(amount) {
    this.#cash += amount;
  }

  withdraw(amount) {
    if(this.#dayTotalWithDrawals + amount > this.#dailyAllowance) {
      console.log('Daily withdrawal limit exceeded!');
      return 0;
    }
    if (this.#cash - amount < 0) {
      console.log(`Insufficient funds!`);
      return 0;
    }

    this.#cash -= amount;
    this.#dayTotalWithDrawals += amount;
    return amount;
  }

  transferInto(wallet, amount) {
    console.log(
      `Transferring ${eurosFormatter.format(amount)} from ${this.name} to ${
        wallet.name
      }`
    );
    const withdrawnAmount = this.withdraw(amount);
    wallet.deposit(withdrawnAmount);
  }

  reportBalance() {
    console.log(
      `Name: ${this.name}, balance: ${eurosFormatter.format(this.#cash)}`
    );
  }

  resetDailyAllowance() {
    this.#dayTotalWithDrawals = 0;
  }
  
  setDailyAllowance() {
    this.#dailyAllowance = newAllowance;
  }
}

function main() {
  const walletJack = new Wallet('Jack', 100);
  const walletJoe = new Wallet('Joe', 10);
  const walletJane = new Wallet('Jane', 20);

  walletJack.transferInto(walletJoe, 50);
  walletJane.transferInto(walletJoe, 25);

  walletJane.deposit(20);
  walletJane.transferInto(walletJoe, 25);

  walletJack.reportBalance();
  walletJoe.reportBalance();
  walletJane.reportBalance();
}

main();
