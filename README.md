# bu-software-team-3
BU Summer Term CS 473/673 

Status of UI:
* login.html page created and it goes to register.html when register button is clicked else goes to login.js when login form is submitted.
* login.js sends information entered in login form and gets respone from JSP and then goes to projectSample.html page if user is valid, else it gives an alert for invalid user.
* login.js also sends user information to projectSample.html page as an argument while redirecting.
* projectSample.html recieves user info as argument in URL and converts it to JSON object and displays on console.
