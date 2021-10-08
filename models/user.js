const mongoose = require("mongoose");

const modeli = mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: { true: "The Full name is required" },
  },
  Address: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});
modeli.statics.findByCredentials =  (Username1, password1) => {
  const username = user.findOne({ Username: Username1 });
  if (!username){ throw new Error("Username Not Correct");}
  const password12 =  user.findOne({ Password: password1 });
  if (!password12){ throw new Error("Password not correct");}
  return username;
};
const user = mongoose.model("user", modeli);

module.exports = user;
