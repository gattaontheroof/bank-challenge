import User from "./User.js"
import Account from "./Account.js";
import Transaction from "./Transaction.js";
import TransactionDetailsPrinter from "./TransactionDetailsPrinter.js";
import UserFileHelper from "./UserFileHelper.js";


console.log("************************");
console.log("");
console.log("This is the acceptance criteria demo");
console.log("Part 1: creating a user, recording their transactions and printing their bank statement");
console.log("");
console.log("************************");
console.log("");
console.log("A new user has been created, with their username and password");

// Creating new user
let user = new User("arobertson", "123");
console.log("");

// Logging user on
console.log("");
console.log("Logging user in")
console.log("");
if(!user.login("arobertson", "123")) {
    console.log("Login failed for user: " + user.getUsername());
}
else {
    console.log("Login successful for user: " + user.getUsername());

    let account = user.getAccount();
    console.log("");

    // deposit
    console.log("User deposited £1,000.00 on 10 Jan 2012");
    account.deposit(1000, new Date("10 Jan 2012"));
    console.log("");

    // deposit
    console.log("User deposited £2,000.00 on 13 Jan 2012");
    account.deposit(2000, new Date("13 Jan 2012"));
    console.log("");

    // withdraw
    console.log("User withdrew £500.00 on 14 Jan 2012");
    account.withdraw(500, new Date("14 Jan 2012"));
    console.log("");

    // print balance
    console.log("Printing Account Statement...");
    console.log("");
    console.log("************************");
    account.printStatement();
    console.log("");
    console.log("************************");
    console.log("");
    console.log("");

}


// Reading user from file
console.log("In Part 2 of this demo user details are read from a file:");
console.log("");
let user2 = UserFileHelper.getUserDetailsFromFile();
console.log("");
console.log("************************");
console.log("Printing Account Statement...");
console.log("");
user2.getAccount().printStatement();
console.log("");
console.log("************************");
console.log("");

// set overdraft limit
console.log("Setting overdraft limit to £500");
user2.getAccount().setOverdraftLimit(500);
console.log("");

// withdraw
console.log("User withdrew £900.00 on 15 Jan 2012");
user2.getAccount().withdraw(900, new Date("15 Jan 2012"));
console.log("");

// withdraw
console.log("User withdrew £900.00 on 16 Jan 2012");
user2.getAccount().withdraw(900, new Date("16 Jan 2012"));
console.log("");

// withdraw
console.log("User withdrew £900.00 on 17 Jan 2012");
user2.getAccount().withdraw(900, new Date("17 Jan 2012"));
console.log("");

// print balance
console.log("Printing Account Statement...");
console.log("");
console.log("************************");
user2.getAccount().printStatement();
console.log("");
console.log("************************");
console.log("");
console.log("");
