import Transaction from "./Transaction.js";
import TransactionDetailsPrinter from "./TransactionDetailsPrinter.js";

class Account {
    #transactions = [];
    #balance = 0;
    #overdraftLimit = 0;

    constructor(){

    }

    getTransactions() {
        return this.#transactions;
    }

    getBalance() {
        return this.#balance;
    } 

    getOverdraftLimit() {
        return this.#overdraftLimit;
    } 

    setOverdraftLimit(overdraftLimit) {
        this.#overdraftLimit = overdraftLimit;
    }

    deposit(amount, date) {
        // parse input to float
        let numericAmount = parseFloat(amount);

        // if not a number or less than or equal to zero then throw exception
        if(isNaN(numericAmount) || numericAmount <= 0) {
            return;
        }

        this.#balance += numericAmount;

        // record transaction
        this.#transactions.push(new Transaction(amount, date, "credit"));
      }

    withdraw(amount, date) { 
        // parse input to float
        let numericAmount = parseFloat(amount);
        
        // if not a number or less than or equal to zero then return
        if(isNaN(numericAmount) || numericAmount <= 0) {
            return;
        }

        const newBalance = this.#balance - numericAmount;
        // if balance will be less than zero and we exceeded our overdraft limit
        if(newBalance < 0 && Math.abs(newBalance) > this.#overdraftLimit) {
            return;
        }
 
        this.#balance -= numericAmount;

        // record transaction
        this.#transactions.push(new Transaction(amount, date, "debit"));
      }

    printStatement() {

        let currentBalance = this.#balance;
        console.log("date       || credit  || debit  || balance");
        
        // for each transaction (in reverse order), print the the transaction
        this.#transactions.slice().reverse().forEach((transaction) => {
            
            TransactionDetailsPrinter.printTransactionDetails(transaction, currentBalance);

            if(transaction.getTransactionType() === "debit") {
                currentBalance+=transaction.getAmount();
            }
            else {
                currentBalance-=transaction.getAmount();
            }
   
        });
    }
}

export default Account;