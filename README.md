# Advanced NPMing

### Overview
In this activity, you'll publish and install your own NPM package within a nodejs project. Your code will use custom scripts to automate tasks, build, start, and test your project code. 
### Before You Begin  
- Make sure you have created a free NPM account.
  
### Submission on BCS
* Please submit link to your published NPM package or your GitHub package repo (i.e., `https://www.npmjs.com/package/<yourbucketname>`)
* Submit the link to your GitHub repo source code

### Instructions

- Follow the instructions on [how to create an NPM package](https://docs.npmjs.com/getting-started/creating-node-modules) and create an NPM module which does the following:
	- Instantiates a basic Node HTTP server using express and body-parser NPM modules, and exports the resulting server object. ***DO NOT*** execute/run the `.listen()` method in the module.

		```
		 var express = require("express");
		 var app = express();
		 //load more modules (i.e. body-parser, etc.)
		 module.exports = app
		```

	- Create a new node.js project in a new/different folder (create a `package.json` file) and run `npm install <yourpackagename>` or `npm install git+https://github.com/<yourusername>/<yourreponame>.git` to add your module as a  dependency to the project. **Note:** NPM package names and github repo names within your account, must by unique, so make sure to give your module a memorable/unique. Your main application will return weather data by making an HTTP request to the [Open Weather API](https://openweathermap.org/api) for a list of places. The data stored in the application can be stored in-memory (i.e., using an array). 
	- Load your module into main application code base.
	- Add 4 HTTP routes to the app object:
		- GET using "api/weather" as the path will return a list of weather data for the cities in the current list/array with their weather data
		- POST using "api/weather" as the path will add a city/location to the list. Each entry should contain the following information: id (unique integer), city/location, unit format (standard, metric, or imperial)
		- UPDATE using "api/weather" as the path will receive a JSON payload with the id of the place which will be updated, the new location and new metric values, then return the new place JSON data
		- DELETE using "api/weather/:id" as the path will remove an entry from the list, and return a boolean (true if successful, false if unsuccessful)
	- Add `.listen()` as the last line of code to be executed in the main node.js application.
	- In the `package.json` file, add NPM scripts which do the following:
		- "printinfo", which prints the description value of the the *description* field in the package.json file in the console. Use an npm config variable.
		- "clean", which removes/deletes the `node_modules` folder
		- "build", which runs npm install of dependencies
		- "start", which executes the main node.js file (entry point)
		- "watch", which executes the main node.js file using npx and **nodemon**
		- "audit", which runs `npm audit` against the main weather node.js application
		- Write a script which will always run the npm audit script first, if/when the npm build script is run. HINT: THIS IS NOT A JOB FOR &&. Use script hooks.
		- "prod", which runs the clean, build, and start npm scripts in sequential order.
		- "node4", which executes the node app using node version 4 via npx
		- "node6", which executes the node app using node version 6 via npx
		- "node8", which executes the node app using node version 8 via npx
	
### Reminder: Submission on BCS

* Please submit link to your published NPM package or your GitHub package repo (i.e., `https://www.npmjs.com/package/<yourbucketname>`)
* Submit the link to your GitHub repo source code
- - -

### Minimum Requirements

Your application must use at least one module you've created and published to NPM or GitHub. In addition, custom NPM scripts must work correctly and properly.
- - -

### Add To Your Portfolio

After completing the homework please add the NPM module(s) to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**