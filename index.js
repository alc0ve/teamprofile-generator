const inquirer = require('inquirer');
const fs = require('fs');

//Bring in class files
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const renderHTML = require('./src/helper');

const generateMembers = [];

function managerQuestions() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is the team manager's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is the team manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "officeNumber",
        },
    ])
    .then((answer) => {
        const teamManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        console.log(teamManager);
        addMember();
    }
    )
}

managerQuestions();

//Asks if user would like to add another team member
function addMember(){
    inquirer
    .prompt ([
        {
            type: "list",
            message: "What type of team member would you like to add?",
            name: "addMember",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],
        }
    ])
    .then(answer => {
        if (answer.addMember === Engineer) {
            engineerQuestions();
        } else if (answer.addMember === Intern) {
            internQuestions();
        }
    })
}

function engineerQuestions() { 
    inquirer
    .prompt ([
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your engineer's employee ID",
      name: "id",
    },
    {
      type: "input",
      message: "What is your engineer's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your engineer's GitHub username?",
      name: "github",
    },
  ])
  .then((answer) => {
    const teamEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
    console.log(teamEngineer);
  });
}

function internQuestions() {
    inquirer
    .prompt([
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your intern's employee ID?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your intern's email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What school does your intern attend?",
      name: "school",
    },
  ])
  .then((answer) => {
    const newIntern = Intern(answer.name, answer.id, answer.email, answer.school);
    console.log(newIntern);
  });
}