import Account from '../src/Account.js';

// const currentDate = new Date();

describe("A suite for account class tests", () => {
    
    it("should deposit funds using deposit() method", () => {
        // Arrange
        let account = new Account();
        let depositAmount = 1000;

        // Act
        account.deposit(depositAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(depositAmount);
    });

    it("Should not deposit funds using deposit() method if the amount is non-numerical", () => {
        // Arrange
        let account = new Account();
        let depositAmount = "one_thousand";

        // Act
        account.deposit(depositAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(0);
    });

    it("Should not deposit funds using deposit() method if the amount is negative", () => {
        // Arrange
        let account = new Account();
        let depositAmount = -100;

        // Act
        account.deposit(depositAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(0);
    });

    it("Should deposit funds using deposit() method if the amount is null", () => {
        // Arrange
        let account = new Account();
        let depositAmount = null;

        // Act
        account.deposit(depositAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(0);
    });

    it("Should record transaction if deposit is successful", () => {
        // Arrange
        let account = new Account();

        // Act
        account.deposit(100);
  
        // Assert
        expect(account.getTransactions().length).toBe(1);
    });

    it("should withdraw funds using withdraw() method", () => {
        // Arrange
        let account = new Account();
        account.deposit(2500);
        let withdrawalAmount = 1000;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(1500);
    });

    it("should withdraw funds using withdraw() method when balance will be less than zero but within overdraft limit", () => {
        // Arrange
        let account = new Account();
        account.setOverdraftLimit(500);
        let withdrawalAmount = 300;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(-300);
    });

    it("should not withdraw funds using withdraw() method if balance will be less than zero with no overdraft limit", () => {
        // Arrange
        let account = new Account();
        let withdrawalAmount = 1000;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(0);
    });

    it("should not withdraw funds using withdraw() method if balance will be less than zero and has exceeded the overdraft limit", () => {
        // Arrange
        let account = new Account();
        account.setOverdraftLimit(500);
        let withdrawalAmount = 1000;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(0);
    });

    it("should not withdraw funds using withdraw method if the amount input is non-numerical", () => {
        // Arrange
        let account = new Account();
        account.deposit(2500);
        let withdrawalAmount = "four_hundred";

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(2500);
    });
    it("should not withdraw funds using withdraw method if the amount is negative", () => {
        // Arrange
        let account = new Account();
        account.deposit(2500);
        let withdrawalAmount = -500;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(2500);
    });
    it("should not withdraw funds using withdraw method if the amount is null", () => {
        // Arrange
        let account = new Account();
        account.deposit(2500);
        let withdrawalAmount = null;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(2500);
    });
    
    it("Should record transaction if withdraw is successful", () => {
        // Arrange
        let account = new Account();
        account.deposit(2500);

        // Act
        account.withdraw(100);
  
        // Assert
        expect(account.getTransactions().length).toBe(2);
    });

    it("should be able to print a statement", () => {
        // Arrange
        let account = new Account();
        account.deposit(2500);
        let withdrawalAmount = null;

        // Act
        account.withdraw(withdrawalAmount);
  
        // Assert
        let newBalance = account.getBalance();
        expect(newBalance).toBe(2500);
    });
});