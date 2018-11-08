//Config env variables
const dotenv = require("dotenv");
dotenv.config();

//Set up Server configuration:

//import dependencies
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//initialize server
const server = express();

//apply middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

module.exports = server;
