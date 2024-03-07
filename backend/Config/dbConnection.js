const mongooes = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongooes.connect(
      "mongodb+srv://shindekeshav002@gmail.com:Reena@888@cluster0.o3hsffw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log(
      "database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDb;