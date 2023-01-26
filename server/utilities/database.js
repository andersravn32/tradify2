const { MongoClient } = require("mongodb");

class Database {
  #connection = null;

  async connect() {
    // Create database connection object
    this.#connection = await MongoClient.connect(process.env.MONGODB);

    if (!this.#connection) {
      throw Error("Failed to connect to database");
    }

    // Return connection object
    return this.#connection;
  }

  get() {
    if (!this.#connection) {
      throw Error(
        "No connection has been initialized. Call connect method first"
      );
    }

    // Return connection object
    return this.#connection;
  }
}

module.exports = new Database();
