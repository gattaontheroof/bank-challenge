import fs from "fs";
import UserFileHelper from "../src/UserFileHelper.js";
import User from "../src/User.js"

describe("UserFileHelper", () => {
    describe("#getUserDetailsFromFile", () => {
        beforeEach(() => {
            // Reset the state before each test
            spyOn(fs, "existsSync");
            spyOn(fs, "readFileSync");
        });

        it("prints an error if the file does not exist", () => {

            // Arrange
            fs.existsSync.and.returnValue(false);
            const logSpy = spyOn(console, "error");

            // Act
            UserFileHelper.getUserDetailsFromFile()

            // Assert
            expect(logSpy).toHaveBeenCalledWith("No user details file found");
        });
         
        it("returns user details if file exists and is not empty", () => {

            // Arrange
            const userDetails = { username: "user 1", password: "password", transactions: [] };
            fs.existsSync.and.returnValue(true);
            fs.readFileSync.and.returnValue(JSON.stringify(userDetails));

            // Act
            let output = UserFileHelper.getUserDetailsFromFile();

            // Assert
            expect(output).toBeInstanceOf(User);
        });
    });
});