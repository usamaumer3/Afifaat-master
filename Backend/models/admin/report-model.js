const mongoose = require("mongoose");
const reportSchema = mongoose.Schema(
  {
    reportingUserId: String, //Id of user reporting issue
    reportingUserType: String, //Type of user reporting issue
    reportType: String,
    subject: String,
    userReportedId: String,
    courseId: String,
    content_text: String,
    status: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("report", reportSchema);
