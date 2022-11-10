const Engineer = require("../lib/Engineer");

test("Creating an Engineer Employee", ()=>{
    const engineer = new Engineer("Anmol",10,"anmol.gupta2180@gmail.com","anmolgupta313");

    expect(engineer.github).toEqual(expect.any(String));

    expect(engineer.getGitHubUser()).toEqual(expect.any(String));

    expect(engineer.getRole()).toEqual("Engineer");
}) 