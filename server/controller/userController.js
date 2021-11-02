const db = require('../model/userModel.js');
let sessionId;

// import pool from "../model/userModels.js";

const userController = {};

userController.signIn = async (req, res, next) => {
    try{
         
        const { googleId, name, email} = req.body;
        console.log("In the usercontroller.signIn method. Email :", email);
           
        //retrieve all the rows in the databaser and check if the current googleId exists in the db.
        const idsFromDbQuery = `SELECT googleId FROM users where googleId = ${googleId}`;

        db.query(idsFromDbQuery)
        .then( data => {
            console.log("data from db after select method: ", data);
            if(data.rowCount ==1 ){
                console.log(`The user ${name} exists in the sql database`)
                res.locals.addedUser = data.rowCount;
                return next();
                // console.log('FROM THE IF : res.locals.addedUser: ',res.locals.addedUser)
                }
            else{
                const insertQuery = `INSERT INTO users VALUES (${googleId}, '${name}', '${email}');`;

                db.query(insertQuery)
                .then(data => {
                console.log("User added to the SQL Database. Row count:  ", data.rowCount);
                res.locals.addedUser = data.rowCount;
                sessionId = googleId; //check
                return next();
                // console.log('FROM THE ELSE: res.locals.addedUser: ',res.locals.addedUser)
                })
                .catch(err => console.log("error while inserting to DB: ",err));
                }
        });
    }
    catch(err){
        const defaultErr = {
          log: 'Error handler caught an error inside signIn',
          status: 500,
          message: { err: 'An error occurred' },
        };
        next(defaultErr);
      };
}

userController.AddQuestion = async (req, res, next) => {
    console.log(req.body);
    const { question, company, questionTypes, rol} = req.body;
    console.log("The sessionId is ", sessionId)
}

module.exports = userController;