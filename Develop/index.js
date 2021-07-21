const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const allTeamMembers = [];
const generateHTML = require("./util/generateHtml");

function init() {
    console.log("Building Team Profile.......");
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please enter your Manager's Name"
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter your Manager's ID"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your Manager's Email"
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Please enter your Manager's Office Number"
            }
        ])
        .then(userInput => {
            //Convert in to a Class object 
            const managerInfo = new Manager(userInput.managerName, userInput.managerId, userInput.managerEmail, userInput.managerOfficeNum);
            // console.log("manager object", managerInfo); 
            //add it to blank array of memebers 
            allTeamMembers.push(managerInfo);

            console.log("All Team Members", allTeamMembers);

            //choice - "Enginerr", "Intern", "build the hTML"
            buildTeam();
        });

}


//Proppt to add new TeamMbers 
function buildTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "addTeamMember",
                message: "Who  would u like to add ?",
                choices: ["Engineer", "Intern", "No More Members"]
            }
        ]).then(response => {
            console.log(response);

            if (response.addTeamMember === "Engineer") {
                //engineer
                addEngineer();

            } else if (response.addTeamMember === "Intern") {
                addIntern();
            } else {
                console.log("generating HTML  using ", allTeamMembers);
                //Create a HTML using FS package along with the generatehtml 
                const htmlPageContent = generateHTML(allTeamMembers);
                console.log(htmlPageContent);
                
                fs.writeFile('index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created index.html!')
                );

            }
        })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter your name"
        },
        {
            type: "input",
            name: "engineerId",
            message: "Please enter your ID"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Please enter your Manager's Email"
        },
        {
            type: "input",
            name: "githubUserName",
            message: "Please enter your GitHub username"
        }
    ]).then(response => {
        const EngineerInfo = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.githubUserName);
        //add it to array
        allTeamMembers.push(EngineerInfo);
        console.log("All team members", allTeamMembers);
        //ask the question again 
        buildTeam();
    });
}

function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Please enter your Name"
        },
        {
            type: "input",
            name: "internId",
            message: "Please enter your intern ID"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Please enter your intern Email"
        },
        {
            type: "input",
            name: "school",
            message: "Please enter your school name"
        }
    ]).then(response => {
        const InternInfo = new Intern(response.internName, response.internId, response.internEmail, response.school);
        //add it to array
        allTeamMembers.push(InternInfo);
        console.log("All team members", allTeamMembers);
        //ask the question again 
        buildTeam();
    })
}
init();