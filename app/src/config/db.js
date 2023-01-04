const mysql = require("mysql")

const db = mysql.createConnection({
    host: "jzzy-login.cjr2gvqverij.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "wo846816",
    database: "login_lecture",
});

db.connect();

module.exports = db;