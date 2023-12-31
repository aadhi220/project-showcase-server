const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  languages: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  username:{
    type:String,
    required:true,
  },
  profilePic:{
    type:String,
    
  },
  userGit:{
    type:String
},
userLinkdin:{
    type:String
}

});

const projects = mongoose.model("projects", projectSchema);
module.exports = projects;
