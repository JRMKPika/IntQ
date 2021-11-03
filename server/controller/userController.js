const db = require('../model/userModel.js');

const userController = {};

userController.signIn = async (req, res, next) => {
    try{
         
        const { googleId, name, email} = req.body;
        console.log("In the usercontroller.signIn method. Email :", email);
           
        const idsFromDbQuery = `SELECT googleId FROM users where googleId = ${googleId}`;

        db.query(idsFromDbQuery)
        .then( data => {
            console.log("data from db after select method: ", data);
            if(data.rowCount ==1 ){
                console.log(`The user ${name} exists in the sql database`)
                res.locals.addedUser = googleId;
                console.log("Google id is ", res.locals.addedUser);
                return next();
                }
            else{
                const insertQuery = `INSERT INTO users VALUES (${googleId}, '${name}', '${email}');`;

                db.query(insertQuery)
                .then(data => {
                console.log("User added to the SQL Database. Row count:  ", data.rowCount);
                res.locals.addedUser = data.rowCount;
                return next();
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
    try{
    console.log("the req body is ",req.body);
    const {question, company, questionTypes, role, googleId, username } = req.body;

    const insertQuery = `INSERT INTO questions VALUES (DEFAULT,'${question}','${company}','${questionTypes}','${role}',CURRENT_DATE,${googleId})`;

    db.query(insertQuery)
    .then( (data) => {
        if(data.rowCount ==1 ){
            console.log("Added ",data.rowCount, " row");
            res.locals.user = googleId;
            return next();
        }
    })
    .catch(err => console.log("error while inserting question to DB: ",err))

}catch(err) {
    const defaultErr = {
        log: 'Error handler caught an error inside AddQuestion',
        status: 500,
        message: { err: 'An error occurred while adding the question' },
      };
      next(defaultErr);
      }

}

userController.searchByCompany = async (req, res, next) => {
try{

    const orgName = req.body.company;

    const searchQuery = `SELECT question, organization, type, role, date from questions WHERE organization='${orgName}'`;

    db.query(searchQuery)
    .then((data) => {
        res.locals.searchResults = data.rows;
        return next();
    })
    .catch(err => console.log("error while searching for items by company name: ",err))

}catch(err) {
    const defaultErr = {
        log: 'Error handler caught an error inside searchByCompany',
        status: 500,
        message: { err: 'An error occurred while searching by company' },
      };
      next(defaultErr);
      }
}

userController.searchByType = async (req, res, next) => {
try{

    const questionType = req.body.questionTypes;

    const searchQuery = `SELECT question, organization, type, role, date from questions WHERE type='${questionType}'`;

    db.query(searchQuery)
    .then((data) => {
        res.locals.searchResults = data.rows;
        return next();
    })
    .catch(err => console.log("error while searching for items by question type: ",err))
}catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside searchByType',
            status: 500,
            message: { err: 'An error occurred while searching by type' },
          };
          next(defaultErr);
          }
}

userController.searchByRole = async (req, res, next) => {
try{

    const roleType = req.body.role;

    const searchQuery = `SELECT question, organization, type, role, date from questions WHERE role='${roleType}'`;

    db.query(searchQuery)
    .then((data) => {
        res.locals.searchResults = data.rows;
        return next();
    })
    .catch(err => console.log("error while searching for items by role: ",err))
}catch(err) {
    const defaultErr = {
        log: 'Error handler caught an error inside searchByRole',
        status: 500,
        message: { err: 'An error occurred while searching by role' },
      };
      next(defaultErr);
      }
}

module.exports = userController;