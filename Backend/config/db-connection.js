const mongoose = require("mongoose");
// mongoose.set('useFindAndModify', false);
const { mongoConnString } = require("./config.js");

mongoose
  .connect(mongoConnString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
  });