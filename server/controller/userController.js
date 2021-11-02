const db = require('../model/userModel.js');

// import pool from "../model/userModels.js";

const userController = {};

userController.signIn = async (req, res, next) => {
    try{
        const { googleId, name, email} = req.body;
           
        //retrieve all the rows in the databaser and check if the current googleId exists in the db.
        const idsFromDbQuery = 'SELECT googleId FROM users';
        db.query(idsFromDbQuery)
        .then( data => {
            console.log("the ids from the db are: ", db);
        })
        //check if googleId exists in the data recieved back

        //if googleId does not exist in the data recieved, create a new row for this googleId in the DB
        const insertQuery = `INSERT INTO users VALUES (${googleId}, '${name}', '${email}');`;

       db.query(insertQuery)
       .then( data => {
        console.log("User added to the SQL Database: ", data);
        res.locals.addedUser = data;
       });
       return next();

    }
    catch(err){
        const defaultErr = {
          log: 'Error handler caught an error inside getHomeworld',
          status: 500,
          message: { err: 'An error occurred' },
        };
        next(defaultErr);
      };
        //retrieve the google ID
        //if googleID exists in the database, 
        // then pull all the questions from 
        // the questions table
}

module.exports = userController;