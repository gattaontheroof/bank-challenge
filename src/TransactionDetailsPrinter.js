import Transaction from './Transaction.js'; 
 
class TransactionDetailsPrinter {

    static formatDate(date) {
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        if (day < 10) day = '0' + day;

        if (month < 10) month = '0' + month;
        
        return day + "/" + month + "/" + year;
    }

    static formatAmount(amount){
        return (Math.round(amount * 100) / 100).toFixed(2);
    }
 
    static formatDebit(transaction, balance){
        const dateFormatted = this.formatDate(transaction.getTransactionDate());
        const debitFormatted = this.formatAmount(transaction.getAmount());
        const balanceFormatted = this.formatAmount(balance);

        return `${dateFormatted} ||         || ${debitFormatted} || ${balanceFormatted}`;
    }

    static formatCredit(transaction, balance){
        const dateFormatted = this.formatDate(transaction.getTransactionDate());
        const creditFormatted = this.formatAmount(transaction.getAmount());
        const balanceFormatted = this.formatAmount(balance);

        return `${dateFormatted} || ${creditFormatted} ||        || ${balanceFormatted}`;
    }

    static printTransactionDetails(transaction, balance) {
        if(transaction.getTransactionType() === "credit"){
            return console.log('\x1b[32m'+this.formatCredit(transaction, balance)+'\x1b[0m');
        } 

        return console.log('\x1b[31m'+this.formatDebit(transaction, balance)+'\x1b[0m');
    }

}

export default TransactionDetailsPrinter;
