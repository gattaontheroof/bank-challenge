import TransactionDetailsPrinter from "../src/TransactionDetailsPrinter.js";

describe("Transactions details printer tests", ()=> {
    it("should be able to get date in the correct format using formatDate() method", ()=> {
        //Arrange
        const date = new Date("Oct 30 2023");  

        //Act
        const output = TransactionDetailsPrinter.formatDate(date);

        //Assert
        expect(output).toBe("30/10/2023");
    });

    it("should be able to format amount to 2 decimal places using formatAmount() method", ()=> {
        //Arrange
        const amount = 754;  

        //Act
        const output = TransactionDetailsPrinter.formatAmount(amount);

        //Assert
        expect(output).toBe("754.00");
    });

    it("should be able to format debit using formatDebit() method", ()=> {
        //Arrange    
        const date = new Date("Jan 14 2012");    
        const testTransaction = jasmine.createSpyObj("testTransaction", {
            getTransactionDate: date,
            getAmount: 500,
            getTransactionType: "debit"
        });

        //Act
        const output = TransactionDetailsPrinter.formatDebit(testTransaction, 2500);

        //Assert
        expect(output).toBe("14/01/2012 ||         || 500.00 || 2500.00");
    });

    it("should be able to format credit using formatCredit() method", ()=> {
        //Arrange    
        const date = new Date("Jan 13 2012");    
        const testTransaction = jasmine.createSpyObj("testTransaction", {
            getTransactionDate: date,
            getAmount: 2000,
            getTransactionType: "credit"
        });

        //Act
        const output = TransactionDetailsPrinter.formatCredit(testTransaction, 3000);

        //Assert
        expect(output).toBe("13/01/2012 || 2000.00 ||        || 3000.00");
    });

    it("should be able to print the transaction statement", ()=> {
        //Arrange
        const logSpy = spyOn(console, `log`);
        const date = new Date("Jan 13 2012");    
        const testTransaction = jasmine.createSpyObj("testTransaction", {
            getTransactionDate: date,
            getAmount: 100,
            getTransactionType: "credit"
        });

        //Act
        TransactionDetailsPrinter.printTransactionDetails(testTransaction, 1250);

        //Assert
        expect(logSpy).toHaveBeenCalledTimes(1);
    });      



})