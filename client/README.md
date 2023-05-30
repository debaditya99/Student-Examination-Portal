# Real README To Recreate?Restart Project from Scratch
npm init

npm install express mongoose react react-dom concurrently

server.js :-
[[
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-project', { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
]]

mkdir client

package.json file in the client folder
"proxy": "http://localhost:5000"

package.json of root, include the "dev"
"scripts": {
  "start": "node server.js",
  "client": "cd client && npm start",
  "dev": "concurrently \"npm run start\" \"npm run client\""
},

npm update

npm install express mongoose bcrypt jsonwebtoken
npm install --save-dev nodemon
npm install axios react-dropzone
npm install express mongodb mongoose


______________________________
TO RUN env
npm run dev

mongod --dbpath .\data\db\

mongosh
______________________________

use studentExamination/studentManagementSystem

db.createCollection("answerSheet")

show collections
show dbs

db.answerSheet.insertOne({sheetID: '7', studentID: '01035304421', 
programID: 'S2MCA21', courseID: 'MCA101', examID: 'int1', vigilID: '12321', checkID: '1342', date: '29/12/2023'});

db.dropDatabase()




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
