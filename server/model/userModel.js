const { Pool } = require ('pg');

const PG_URI = 'postgres://lntcxmwa:oIm4lbXyIfoLzoFS0-J4eL5iyqMNlg3E@fanny.db.elephantsql.com/lntcxmwa';

//creating a new pool using the above connection string
const pool = new Pool({
    connectionString : PG_URI,
});

module.exports = pool;

//   module.exports = {
//     query: (text, params, callback) => {
//       console.log('executed query', text);
//       return pool.query(text, params, callback);
//     }
//   };
// module.exports = pool;
// export default pool ;