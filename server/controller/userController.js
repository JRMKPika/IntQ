const db = require('../model/userModel.js');

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

//newest ten
//all questions
//('/allQ')
//('/myQ')
//myQuestions
//searchByCompany, searchByQuestionType, searchByRole
//

//Grab 10 most recent questions
userController.newestTen = async (req, res, next) => {
    try {
        const newestTen = await db.query("SELECT * FROM questions ORDER BY date DESC LIMIT 10")
        res.locals.newestTen = newestTen.rows;
        return next()        
    }
    catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside homePage',
            status: 500,
            message: {err: 'An error occured'}
        };
        next(defaultErr)
    }
}

//Grab all questions from entire database
userController.allQ = async (req, res, next) => {
    try {
        const allQ = await db.query("SELECT * FROM questions")
        res.locals.allQ = allQ.rows;
        return next()        
    }
    catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside homePage',
            status: 500,
            message: {err: 'An error occured'}
        };
        next(defaultErr)
    }
}

module.exports = userController;