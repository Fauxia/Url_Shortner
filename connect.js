const mongoose = require("mongoose");

const mongooseConnect = async (url) => {
  return await mongoose.connect(url);
};

module.exports = {
  mongooseConnect,
};
