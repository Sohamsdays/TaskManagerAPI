const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://Soham:n_____@nodeexpressprojects.dnnh3ay.mongodb.net/Task-Manager?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
