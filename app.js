const inquirer = require("inquirer");
const fs = require("fs");


  function addEmployees() {
    return inquirer.prompt([
    {
      type: "input",
      name: "job",
      message: "Which type of employee are you adding (manager, engineer, or intern)?"
    }
    ], function(answers) {
    if (input === "manager" || input === "Manager") {
      return inquirer.prompt([
      {
      type: "input",
      name: "name",
      message: "Enter their name"
    },
     {
      type: "input",
      name: "id",
      message: "Enter their ID number"
    },
    {
      type: "input",
      name: "email",
      message: "Enter their email"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Enter their office number"
    }]
    )}
    })
      
    else if(this.name === "engineer" || this.name === "Engineer") {
      return inquirer.prompt([
      {
      type: "input",
      name: "name",
      message: "Enter their name"
    },
     {
      type: "input",
      name: "id",
      message: "Enter their ID number"
    },
    {
      type: "input",
      name: "email",
      message: "Enter their email"
    },
    {
      type: "input",
      name: "github",
      message: "Enter their GitHub username"
    }]
    )}
    
    else if(this.name === "intern" || this.name === "Intern") {
      return inquirer.prompt([
      {
      type: "input",
      name: "name",
      message: "Enter their name"
    },
     {
      type: "input",
      name: "id",
      message: "Enter their ID number"
    },
    {
      type: "input",
      name: "email",
      message: "Enter their email"
    },
    {
      type: "input",
      name: "school",
      message: "Enter their school name"
    }]
    )}
  }
    
  class Employee {
  constructor(name, id, title, email) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
  }
  getName() {
    return(`Name: ${this.name}`);
  }
  getId() {
    return(`ID: ${this.id}`);
  }
  getEmail() {
    return(`Email: ${this.email}`);
  }
  getRole() {
    return(`Role: ${this.title}`);
  }
}

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, title, email);
    this.officeNumber = officeNumber; 
  }
  getRole() {
    return(`Role: ${this.title}`);
  }
}

class Engineer extends Employee {
  constructor(github) {
    super(name, id, title, email);
    this.github = github; 
  }
  getGithub() {
    return(`GitHub: ${this.github}`);
  }
  getRole() {
    return(`Role: ${this.title}`);
  }
}

class Intern extends Employee {
  constructor(school) {
    super(name, id, title, email);
    this.school = school; 
  }
  getSchool() {
    return(`School: ${this.school}`);
  }
  getRole() {
    return(`Role: ${this.title}`);
  }
}

function output() {
   fs.writeFile("/output/team.html", `${generateHTML}`, function(err) { 
     if(err) { 
      return console.log(err); 
      }
})
}

addEmployees();
output();