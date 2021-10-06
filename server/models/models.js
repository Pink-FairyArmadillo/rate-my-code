const { Pool } = require('pg');

// Pink Fairy Armadillos' URI const PG_URI = 'postgres://prlevmts:Gp0TQswGk3PCucFr2tU1qGIeG851eGAo@fanny.db.elephantsql.com/prlevmts';

const PG_URI = 'postgres://spdlgvkl:h9PZkcZtc6NYHY543YUqFYADn64CJZrf@fanny.db.elephantsql.com/spdlgvkl';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};