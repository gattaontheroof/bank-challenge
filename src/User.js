import Account from "./Account.js";

class User {
    #username;
    #password;
    #account;

    constructor(username, password) {
        this.#username = username;
        this.#password = password;
        this.#account = new Account();
    }

    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    getAccount() {
        return this.#account;
    }

    login(inputUsername, inputPassword){
        if(inputUsername === this.#username && inputPassword === this.#password){
            // console.log("Login successful!");
            return true;
        } else{
            // console.log("Login failed. Incorrect username or password.");
        }
        return false;
    }
    
}
 
export default User;