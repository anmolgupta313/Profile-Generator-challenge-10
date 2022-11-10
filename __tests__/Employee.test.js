const Employee = require("../lib/employee")

test("Create an employee", ()=>{
    const employee= new Employee("Anmol",10,"anmol.gupta2180@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.emailaddress).toEqual(expect.any(String));

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmailAddress()).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual("Employee");
}) 