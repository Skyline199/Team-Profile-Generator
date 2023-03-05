// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Engineer extends Employee {
     constructor (name, id, email, gitHubUser ){
        //calling employee constructor here
        super (name, id, email);
        this.gitHubUser = gitHubUser;
     }
     }

     GetgitHubUser  () {
        return this.gitHubUser;

     }
     getRole() {
        return "Engineer";
     }
     module.exports  = Engineer;