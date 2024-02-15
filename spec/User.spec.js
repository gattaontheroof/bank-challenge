import User from '../src/User.js';

describe("A suite for user class tests", () => {
    let user;

    beforeEach(() => {
        // Arrange: create a new instance of User before each test
        user = new User("bobsmith", "password123");
    });

    it("should login successfully with correct username/password combination", () => {
        
        // Act
        let result = user.login("bobsmith", "password123");
  
        // Assert
        expect(result).toBe(true);
    });

    it("should should fail to login with incorrect username/password combination to login", () => {
      
        // Act
        let result = user.login("incorrectUsername", "incorrectPassword");
  
        // Assert
        expect(result).toBe(false);
    });
    it("should not login if password/username is null", () => {
      
        // Act
        let result = user.login();
  
        // Assert
        expect(result).toBe(false);
    })
    
  });