const Intern = require("../lib/Intern");

test("Creating an Intern Employee", ()=>{
    const intern= new Intern("Anmol",10,"anmol.gupta2180@gmail.com","DPS");

    expect(intern.school).toEqual(expect.any(String));

    expect(intern.getSchoolName()).toEqual(expect.any(String));  // ===   && == 

    expect(intern.getRole()).toEqual("Intern");
}) 