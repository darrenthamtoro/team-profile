# team-profile
# about 
In this project, we use node.js to take in user input in the terminal. The user input will then be displayed in the website.
This project is a tool for managers to generate a webpage that displays the team's basic info so that they have quick access to their emails and GitHub profiles.

The command line will display basic questions such as the user's name, id, email, github username, and a few other questions. They will then be asked if they are a manager, engineer, or intern. 

When the user selects that they don't have any other employees, the information that the user has input will be displayed in the webpage.

An example of this project's webpage is in the screenshot file.

#  lib folder
In the "lib" folder, we have 4 js files. The "Employee.js",  "Engineer.js", " Intern.js", and "Manager.js". The "Employee.js" file is basically the main file since engineers, interns, and managers belong to the employee category and has all the employee basic features such as a name, id, and email. This is why these 3 files extends the "Employee.js" file. All these files have constructors which make it possible to pass in features into the parameter. An example of that is an additinal "github" feature which only the engineer file has, or "school" which only interns have. 