# Domain Models and Test Plan

# User Story 1

As a customer,
so that I can access my account,
I want to be able to login with my username and password.

# Domain Model 1

| Objects | Properties                 | Messages                           | Outputs  |
| ------- | -------------------------- | ---------------------------------- | -------- |               
| User    | username(@String)          | getUsername()                      | @String  |
|         | password(@String)          | getPassword()                      | @String  |
|         |                            | login(userName, password)          | @boolean |
             
# Tests 1

1) User should login successfully with correct username/password combination
2) User should fail to login with incorrect username/password combination 
3) User should not login if password/username is null.

# User Story 2

As a customer, 
so that I can keep my money safe,
I want to be able to deposit funds.

# Domain Model 2

| Objects     | Properties                        | Messages                           | Outputs  |
| ----------- | --------------------------------- | ---------------------------------- | -------- |
| Account     | transactions @Array[@Transaction] | deposit(amount, transactionDate)   |          | 
|             | balance                           |                                    |          |
| Transaction | amount(@number)                   |                                    |          |
|             | transactionDate                   |                                    |          |
                 

# Tests 2

1) User should deposit funds using deposit method.
2) User should not deposit funds using deposit method if the amount is non-numerical
3) User should not deposit funds using deposit method if the amount is negative
4) User should deposit funds using deposit method if the amount is null
5) Should record transaction if deposit is successful

# User Story 3
As a customer, 
so that I can spend my money,
I would like to be able to withdraw funds if I have sufficient funds.

# Domain Model 3

| Objects     | Properties                        | Messages                           | Outputs  |
| ------------|---------------------------------- | ---------------------------------- | -------- |
| Account     | transactions @Array[@Transaction] | withdraw(amount, transactionDate)  |          | 
|             | balance                           |                                    |          |                     
| Transaction | amount(@number)                   |                                    |          |
|             | transactionDate                   |                                    |          |


# Tests 3

1) User should withdraw funds using withdraw method.
2) User should not withdraw funds using withdraw method if the amount input is non-numerical
3) User should not withdraw funds using withdraw method if the amount is negative
4) User should not withdraw funds using withdraw method if the amount is null
5) User should not withdraw funds using withdraw() method if balance will be less than zero with no overdraft limit"


# User Story 4

As a customer, 
so that I can see my incomings and outgoings, 
I would like to be able to print my account statements (date, amount, balance)

# Domain Model 4

|Objects      | Properties                           | Messages                | Outputs  |
| ------------|------------------------------------- | ----------------------- | -------- |
| Account     | transactions @Array[@Transaction]    | printStatement()        |          |
|             | balance                              | getTransactions         |          |
| Transaction | date(@date)                          | getDate()               |          |
|             | amount(@number)                      | getAmount()             |          |
                                                                                                          
       
# Tests 4 - Transaction Printer tests: 

1) User should be able to get date in the correct format using formatDate() method
2) User should be able to format amount to 2 decimal places using formatAmount() method
3) User should be able to format debit using formatDebit() method
4) User should be able to format credit using formatCredit() method
5) User should be able to print the transaction statement

 # File User Helper tests:
6) Prints an error if the file does not exist
7) Returns user details if file exists and is not empty

 ---
### Additional Features

# User Story 5
As a customer, 
in order to better understand my net balance,
I want my credits and positive balances appear in green text, and debits and negative balances appear in red text

# User Story 6
As a customer, so that if I attempt a withdrawal which would result in a negative balance, I can user a overdraft facility.

| Objects     | Properties                        | Messages                           | Outputs  |
| ----------- | --------------------------------- | ---------------------------------- | -------- |
| Account     | overdraftLimit                    | getOverdraftLimit()                |          | 
|             |                                   | setOverdraftLimit()                |          |

# Tests 6 (in Account.spec.js)
1) User should withdraw funds using withdraw() method when balance will be less than zero but within overdraft limit
2) User should not withdraw funds using withdraw() method if balance will be less than zero and has exceeded the overdraft limit


---

Trello board:

https://trello.com/b/RPRlMjKj/agata-bank-challenge-2-kanban 

