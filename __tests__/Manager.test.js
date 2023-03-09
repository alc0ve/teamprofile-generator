const testManager = require('../lib/Manager');

describe ("Manager", () => {
    it("Can set office number via constructor argument", () => {
        const testValue = 100;
        const e = new testManager("Foo", 1, "test@test.com", testValue);
        expect(e.officeNumber).toEqual(testValue);
      });
      
    it("should return 'Manager' with getRole()", () => {
        const managerValue = "Manager";
        const e = new testManager();
        expect(e.getRole()).toEqual(managerValue);
      });
      
    it("Can get office number via getOfficeNumber()", () => {
        const testValue = 100;
        const e = new testManager("name", 1, "test@test.com", testValue);
        expect(e.getOfficeNumber()).toEqual(testValue);
      });
});