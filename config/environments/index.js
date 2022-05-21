require("dotenv").config();

const DEVELOPMENT = require("./development");
const PRODUCTION = require("./production");
const { NODE_ENV } = process.env;

let enviromnet = (NODE_ENV === "production" ? PRODUCTION : DEVELOPMENT);

module.exports = enviromnet;

