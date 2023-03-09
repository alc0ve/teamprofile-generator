const testIntern = require("../lib/Intern");

describe ("Intern", () => {
    it ("Sets school with constructor", () => {
        const schoolVal = "GATech";
        const e = new testIntern("name", 11, "abc@abc.com", schoolVal);
        expect (e.school).toEqual(schoolVal);
    });

    it ("Returns 'Intern' with getRole()", () => {
        const testValue = "Intern";
        const e = new testIntern();
        expect(e.getRole()).toEqual(testValue);
      });
      
    it ("Can get school via getSchool()", () => {
        const school = "GATech";
        const e = new testIntern("name", 1, "test@abc.com", school);
        expect(e.getSchool()).toBe(school);
      });
});