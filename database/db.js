const {Pool}=require("pg")

const pool = new Pool({
    user: process.env.DB_USER || 'task_user',
    password: process.env.DB_PASS || 'password',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'task_tracker',
    port: process.env.DB_PORT || 5432,
  });


  module.exports = { pool };