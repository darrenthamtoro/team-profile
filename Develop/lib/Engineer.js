const Employee = require("./Employee");

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee{

    constructor(name,id,email, github) {
        
        //getting properties fro m pArent 
        super(name,id,email);
        //Child to specific 
        this.github = github;
      }
      // getName, getID, GetEMail will come from Employee because we extended it 
      getRole() {
        return "Engineer";
    }
    getGithub(){
        
        return this.github; 
    }
}

module.exports = Engineer; 