import fs from "fs";
import User from "./User.js";
import Account from "./Account.js";
import Transaction from "./Transaction.js";

    export default class UserFileHelper {

        static getUserDetailsFromFile() {
            
            try {
                const userDetailsPath = `./data/user.json`;
                // Check to see if the file exists
                if (!fs.existsSync(userDetailsPath))
                    throw new Error("No user details file found");
                // Read the file
                const userDetailsJSON = fs.readFileSync(userDetailsPath);
                // Parse the file
                const userDetailsRawData = JSON.parse(userDetailsJSON);
                
                return this.#rehydrateUserInstance(userDetailsRawData);
            } catch (error) {
                console.error(error.message);
                return null;
            }
        
        }

        static #rehydrateUserInstance(rawData) {

            let user = new User(rawData.username, rawData.password);
            let account = user.getAccount();
          
            rawData.transactions.forEach((transaction) => 
                this.#applyTransaction(account, transaction)
            );

            return user;
        }

        static #applyTransaction(account, transaction) {
            if(transaction.transactionType === "credit") {
                account.deposit(transaction.amount, new Date(transaction.transactionDate));
            }
            else {
                account.withdraw(transaction.amount, new Date(transaction.transactionDate));
            }
        }        
    }