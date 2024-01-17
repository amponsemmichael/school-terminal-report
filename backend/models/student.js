const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 64,
  },
  className: {
    type: String,
    required: true,
    maxlength: 64,
  },
  academicYear: {
    type: String,
    maxlength: 10,
  },
});

module.exports = mongoose.model("Student", studentSchema);
