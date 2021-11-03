const db = require('../model/userModel.js');

const userController = {};

//signIn user
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
},

//Grab user's questions
userController.myQ = async (req, res, next) => {
    try {
        const googleID = req.body.googleid;
        const myQ = await db.query(`SELECT * FROM questions WHERE googleid=${googleID}`);
        res.locals.myQ = myQ;
        return next()
    }
    catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside myQ',
            status: 500,
            message: {err: 'An error occured'}
        };
        next(defaultErr)
    }
},

//Delete a user's question
userController.deleteQ = async (req, res, next) => {
    try {
        const ID = req.body.id;
        //returns only the number of deleted rows
        const deleteQ = await db.query(`DELETE FROM questions WHERE id=${ID}`);
        res.locals.deleteQ = deleteQ;
        return next()
    }
    catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside myQ',
            status: 500,
            message: {err: 'An error occured'}
        };
        next(defaultErr)
    }
},

//Grab 10 most recent questions
userController.newestTen = async (req, res, next) => {
    try {
        const newestTen = await db.query("SELECT * FROM questions ORDER BY date DESC LIMIT 10")
        res.locals.newestTen = newestTen.rows;
        return next()        
    }
    catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside newestTen',
            status: 500,
            message: {err: 'An error occured'}
        };
        next(defaultErr)
    }
},

//Grab all questions from entire database
userController.allQ = async (req, res, next) => {
    try {
        const allQ = await db.query("SELECT * FROM questions")
        res.locals.allQ = allQ.rows;
        return next()        
    }
    catch(err) {
        const defaultErr = {
            log: 'Error handler caught an error inside allQ',
            status: 500,
            message: {err: 'An error occured'}
        };
        next(defaultErr)
    }
}

userController.AddQuestion = async (req, res, next) => {
    try{
    console.log("the req body is ",req.body);
    const {question, company, questionTypes, role, googleId, username } = req.body;

    const insertQuery = `INSERT INTO questions VALUES (DEFAULT,'${question}','${company}','${questionTypes}','${role}',CURRENT_TIMESTAMP,${googleId})`;

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

    const orgName = req.params.searchText;

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

    const questionType = req.params.searchText;

    const searchQuery = `SELECT question, organization, type, role, date from questions WHERE type='${questionType}'`;

    db.query(searchQuery)
    .then((data) => {
        res.locals.searchResults = data.rows;
        console.log("search results ", res.locals.searchResults);
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
    const roleType = req.params.searchText;

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