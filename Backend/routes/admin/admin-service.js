const ADMIN = require("@models/admin/profile-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { tokenSecret } = require("@config/config");
const CustomError = require("@config/CustomError");
const StudentProfileModel = require("@models/student/profile-model");
const TutorProfileModel = require("@models/tutor/profile-model");

exports.signIn = async function (email, password) {
  const adminProfile = await ADMIN.findOne({ email: email }).exec();
  if (!adminProfile) throw new CustomError(404, "Admin Profile Not Found");

  const result = await bcrypt.compare(password, adminProfile.password);
  if (!result) throw new CustomError(403, "Wrong Credentials");

  const objToBeTokenized = {
    adminId: result._id,
    role: "admin",
  };
  return jwt.sign(objToBeTokenized, tokenSecret, { expiresIn: "45m" });
};

exports.blockStudent = async function (userId) {
  const studentProfileDoc = await StudentProfileModel.updateOne(
    { _id: userId },
    { isBlocked: true }
  ).exec();
  if (!studentProfileDoc.nModified)
    throw new CustomError(400, "Not able to block user");
};
exports.unBlockStudent = async function (userId) {
  const studentProfileDoc = await StudentProfileModel.updateOne(
    { _id: userId },
    { isBlocked: false }
  ).exec();
  if (!studentProfileDoc.nModified)
    throw new CustomError(400, "Error while unblocking user");
};

exports.blockTutor = async function (userId) {
  const tutorProfileDoc = await TutorProfileModel.updateOne(
    { _id: userId },
    { isBlocked: true }
  ).exec();
  if (!studentProfileDoc.nModified)
    throw new CustomError(400, "Not able to block user");
};
exports.unBlockTutor = async function (userId) {
  const tutorProfileDoc = await TutorProfileModel.updateOne(
    { _id: userId },
    { isBlocked: false }
  ).exec();
  if (!studentProfileDoc.nModified)
    throw new CustomError(400, "Error while unblocking user");
};
