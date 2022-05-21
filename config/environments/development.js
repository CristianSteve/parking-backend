module.exports = {
    PORT : process.env.PORT || 3306,
    TOKEN_SECRET : process.env.TOKEN_SECRET,
    SERVICE_EMAIL:  process.env.SERVICE_EMAIL,
    USER_EMAIL :  process.env.USER_EMAIL,
    PASS_EMAIL :  process.env.PASS_EMAIL,
    DB : {
        username : process.env.USER || "root",
        password : process.env.PASS || "toor",
        database : process.env.DB || "iot",
        host : process.env.HOST || "localhost",
        dialect : process.env.DIALECT || "mysql"
    }
}