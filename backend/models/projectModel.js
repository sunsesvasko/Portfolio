const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A project must have a name!"],
  },
  description: {
    type: String,
    required: [true, "A project must have a description"],
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
