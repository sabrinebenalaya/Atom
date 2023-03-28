const mongoose = require("mongoose");
const articleSchema = mongoose.Schema({
    articleName: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  articleDate: {
    type: Date,
    required: true,
  },
  
});
module.exports = mongoose.model("Article", articleSchema);