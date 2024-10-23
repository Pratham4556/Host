const mongoose = require("mongoose");

const ConnectDb = async () => {
  try {
    // Replace <db_password> with your actual MongoDB password
    await mongoose.connect("mongodb+srv://Pratham:Pratham@cluster0.t9hcj.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (e) {
    console.error("Failed to connect to DB", e);
  }
};
ConnectDb();
module.exports = ConnectDb;
