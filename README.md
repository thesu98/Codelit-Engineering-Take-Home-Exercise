# Codelit Engineering Take-Home Exercise

💫 Welcome to the Codelit take-home coding exercise! 🎉

This full-stack exercise involves building a form component in React that also makes a request to the Node.js/Express.js backend. We imagine you should spend around four hours at minimum to implement this feature, but want to emphasize that there is no specific deadline, or ticking clock for the implementation time. You can feel free to break the work up over multiple days. The entire point of this exercise is to get a good sense of how you build software.

Also, please keep in mind that you are not specifically limited to four hours. If you want to spend more time than that, using this as an opportunity to learn a new library or technology, or just generally making it more awesome, you are of course free to do so.

## Getting Set Up

The exercise requires [Node.js](https://nodejs.org/en/) to be installed. We recommend using the LTS version.

1. Start by cloning this repository.

1. In the repo root directory, run `npm install` to gather all dependencies.

1. Next, `npm run seed` will seed the local SQLite database. **Warning: This will drop the database if it exists**. The database lives in a local file `database.sqlite3`.

1. Then run `npm start` which should start both the server and the React client.

❗️ **Make sure you commit all changes to the master branch!**

## Technical Notes

- The server is running with [nodemon](https://nodemon.io/) which will automatically restart for you when you modify and save a file.
- The frontend was bootstrapped with [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
- The database provider is SQLite, which will store data in a file local to your repository called `database.sqlite3`. The ORM [Sequelize](http://docs.sequelizejs.com/) is on top of it. You should only have to interact with Sequelize.
- The API client we have set up for you is [axios](https://github.com/axios/axios). You are welcome to swap this out for your favorite client if you prefer.
- The server is running on port 3001 and all AJAX requests from the frontend will automatically proxy to that endpoint. For instance, you can `axios.get('/team')` and it will automatically hit `localhost:3001/team`.

## Acceptance Criteria

Below is a list of user stories corresponding to our acceptance criteria.

1. I can click a button inside the empty "NEW TEAMMATE" card at the bottom that says 'Join the team!'.

1. Clicking the 'Join the team!' button displays a form allowing me to fill out all of my team member information as per the data model (see `backend/model.js`).

1. Filling out the form will create a new team member in the database that persists on reload.

1. I can see team member cards for all of the new team members I have created.

## Going Above and Beyond the Requirements

Given the time expectations of this exercise, we don't expect anyone to submit anything super fancy, but if you find yourself with extra time, any extra credit item(s) that showcase your unique strengths would be awesome! 🙌

## Submitting the Assignment

When you have finished the assignment, create a bundle of your work by running `npm run bundle` in the repo root.

This generates a bundle file called `take-home-exercise` based on your local master branch. Return that file to us via e-mail, and we'll review your code within 1-2 days.

Thank you and good luck! 🙏
