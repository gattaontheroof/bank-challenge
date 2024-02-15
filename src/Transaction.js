class Transaction {
    #amount;
    #transactionDate;
    #transactionType;

    constructor(amount, transactionDate, transactionType) {
        this.#amount = amount;
        this.#transactionDate = transactionDate;
        this.#transactionType = transactionType;
    }

    getAmount() {
        return this.#amount;
    }

    getTransactionDate() {
        return this.#transactionDate;
    } 

    getTransactionType() {
        return this.#transactionType;
    } 

    setTransactionDate(newTransactionDate) {
        if(newTransactionDate instanceof Date) {
            this.#transactionDate = newTransactionDate;
        } else {
            console.error("Invalid date format. Please provide a valid date.");
        }
    }
}
export default Transaction;
