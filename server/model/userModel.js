const { Pool } = require ('pg');

const PG_URI = 'postgres://vhuuiaod:8sXMfaaK-LhO8p5V5Mb1O6KQ78t6sJsS@fanny.db.elephantsql.com/vhuuiaod';

//creating a new pool using the above connection string
const pool = new Pool({
    connectionString : PG_URI,
});

module.exports = { pool
  };
  
//   module.exports = {
//     query: (text, params, callback) => {
//       console.log('executed query', text);
//       return pool.query(text, params, callback);
//     }
//   };
// module.exports = pool;
// export default pool ;