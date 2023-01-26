const { MongoClient } = require("mongodb");

class Database {
  #connection = null;

  async connect() {
    this.#connection = await MongoClient.connect(process.env.MONGODB)
  }

  get() {
    if (!this.#connection){
      throw Error("No connection has been initialized. Call connect method first")
    }
  }
}

module.exports = new Database();
