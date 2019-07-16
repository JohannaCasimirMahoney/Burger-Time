# Burger-Time

### Overview
It's Burger Time! Eat-Da-Burger is a restaurant application that lets users input the names of burgers they'd like to eat. Eat-Da-Burger is a  burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page. The application will store every burger in a database, whether devoured or not.


  <img width="400" height="300" src="https://github.com/JohannaCasimirMahoney/Burger-Time/blob/master/Screen%20Shot%202.png">

  <img width="400" height="300" src="https://github.com/JohannaCasimirMahoney/Burger-Time/blob/master/Screen%20Shot%203.png">


### App Setup

1. Create a GitHub repo called `burger` and clone it to your computer.

2. Make a package.json file by running `npm init` from the command line.

3. Install the Express npm package: `npm install express`.

4. Create a server.js file.

5. Install the Handlebars npm package: `npm install express-handlebars`.

6. Install MySQL npm package: `npm install mysql`.

7. Require the following npm packages inside of the server.js file:
   * express


### Directory Structure

Be sure to setup all the recommend files and directores .

* Database Setup

* Config Setup

* Model Setup

* Controller Setup

* View Setup

The steps above should look like the following structure below. 

├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars



### Technology Used

* MySQL database

* Node.js

* NPM Installs

* <a href="https://devhints.io/mysql">MySQL Workbench</a>

* Express

* Express-Handlebars

* Hosting on Heroku
