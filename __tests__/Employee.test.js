const testEmployee = require('../lib/Employee');

describe ("Employee", () => {
    it("Expresses Employee instance", () => {
        const e = new testEmployee();
        expect (typeof(e)).toEqual("object");
    });

    it("Sets name with constructor argument", () => {
        const name = "Ahsoka";
        const e = new testEmployee(name);
        expect (e.name).toEqual(name);
    });

    it("Sets id with constructor", () => {
        const idValue = 11;
        const e = new testEmployee("Ahsoka", idValue);
        expect (e.id).toEqual(idValue);
    });

    it("Sets email with constructor", () => {
        const emailValue = "abc@abc.com";
        //testEmployee(name, id, email)
        const e = new testEmployee("Ahsoka", 11, emailValue);
        expect (e.email).toEqual(emailValue);
    });

    it("Gets name with getName()", () => {
        const name = "Ahsoka";
        const e = new testEmployee(name);
        expect (e.getName()).toEqual(name);
    });

    it("Gets id with getID()", () => {
        const idVal = 11;
        const e = new testEmployee("Ahsoka", idVal);
        expect (e.getId()).toEqual(idVal);
    });

    it("Gets email with getEmail()", () => {
        const emailVal = "abc@abc.com";
        const e = new testEmployee("Ahsoka", 11, emailVal);
        expect (e.getEmail()).toEqual(emailVal);
    });

    it("Returns 'Employee' role with getRole()", () => {
        const roleVal = "Employee";
        const e = new testEmployee();
        expect (e.getRole()).toEqual(roleVal);
    });
});