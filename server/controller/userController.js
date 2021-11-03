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

module.exports = userController;