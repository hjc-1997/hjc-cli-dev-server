"use strict";

const mongodb = require("@pick-star/cli-mongodb");
const { mongodbUrl, mongodbName } = require("../../config/db");

function mongo() {
    return new mongodb(mongodbUrl, mongodbName);
}
module.exports = mongo;
