const { MongoClient } = require("mongodb");

module.exports = {
  current: {},
  async connect() {
    try {
      const resp = await MongoClient.connect(process.env.MONGO_DRIVER);
      this.current = resp.db("mentor");
      //   console.log(this.current);
    } catch (err) {
      console.log(err);
    }
  },
};

//mongodb+srv://admin:ZUnaFCEMUIoPIZta@cluster0.hkaa0.mongodb.net?retryWrites=true&w=majority
