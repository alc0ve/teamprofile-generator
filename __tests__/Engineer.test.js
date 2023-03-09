const testEngineer = require('../lib/Engineer');

describe ("Engineer", () => {
    it ("Returns github username using constructor", () => {
        const githubVal = "alc0ve";
        const e = new testEngineer("name", 1, "abc@abc.com", githubVal);
        expect (e.github).toEqual(githubVal);
    });

    it ("Returns github username using getGithub()", () => {
        const githubVal = "alc0ve";
        const e = new testEngineer("name", 1, "abc@abc.com", githubVal);
        expect (e.getGithub()).toEqual(githubVal);
    });

    it ("getRole() should return Engineer", () => {
        const roleVal = "Engineer";
        const e = new testEngineer();
        expect (e.getRole()).toEqual(roleVal);
    })
})