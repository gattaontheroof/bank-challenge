import Transaction from "../src/Transaction.js";

describe("Transaction tests",  () => {
    it("should create a new instance of the Transaction class", () => {
        // Arrange

        // Act
        const testTransaction = new Transaction();
        // Assert
        expect(testTransaction).toBeInstanceOf(Transaction);
    });

    it("can create new transaction with valid amount,  date and type", () => {
        // Arrange
        const amount = 100;
        const date = new Date("03/03/2023");
        const type = "credit"; 

        // Act
        const testTransaction = new Transaction(amount, date, type);

        // Assert
        expect(testTransaction.getAmount()).toBe(amount);
        expect(testTransaction.getTransactionDate()).toBe(date);
        expect(testTransaction.getTransactionType()).toBe(type);
    });
});
