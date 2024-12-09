const eventStore = require('./eventStore');

class Account {
  constructor(id) {
    this.id = id;
    this.balance = 0;
    eventStore.on('event', (event) => {
      if (event.accountId === this.id) {
        this.applyEvent(event);
      }
    });
  }

  deposit(amount) {
    const event = { type: 'deposit', accountId: this.id, amount };
    eventStore.addEvent(event);
  }

  withdraw(amount) {
    const event = { type: 'withdraw', accountId: this.id, amount };
    eventStore.addEvent(event);
  }

  applyEvent(event) {
    if (event.type === 'deposit') {
      this.balance += event.amount;
    } else if (event.type === 'withdraw') {
      this.balance -= event.amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

module.exports = Account;