const { MongoClient } = require("mongodb");
var connection = null;

module.exports = {
  connect: async () => {
    // Create database connection object
    connection = await MongoClient.connect(process.env.MONGODB);

    if (!connection) {
      throw Error("Failed to connect to database");
    }

    // Return connection object
    return connection;
  },

  get: () => {
    if (!connection) {
      throw Error(
        "No connection has been initialized. Call connect method first"
      );
    }

    // Return connection object
    return connection;
  }
};
