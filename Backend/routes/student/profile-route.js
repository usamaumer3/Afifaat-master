const express = require("express");
const router = express.Router();

const StudentProfileModel = require("@models/student/profile-model");
const { tokenSecret, refreshTokenSecret } = require("@config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authJWT } = require("@config/authorize-jwt");

router.get("/:id", authJWT, async function (req, res) {
  try {
    var record = await StudentProfileModel.findOne({
      _id: req.params.id,
    }).exec();

    //deleting password from result
    record.password = undefined;
    delete record["password"];
  } catch (err) {
    res.status(404).send("Id not found");
  }
  res.status(200).send(record);
});

router.post("/sign-up", async (req, res) => {
  const body = req.body;
  const userProfile = await StudentProfileModel.findOne({
    email: body.email,
  }).exec();
  if (userProfile) {
    res.status(409).send("Account already exits");
    return;
  }

  //Password encryption`
  bcrypt.hash(body.password, 10).then(async function (hash) {
    body.password = hash;
    var user = new StudentProfileModel(body);
    await user.save();
    return res.status(200).send({ userProfile: user });
  });
});

router.post("/sign-in", async (req, res) => {
  const body = req.body;
  const userProfile = await StudentProfileModel.findOne({
    email: body.email,
  }).exec();

  if (!userProfile) {
    res.status(404).send("This email doesn't exist");
    return;
  }

  const result = await bcrypt.compare(body.password, userProfile.password);
  if (!result) return res.status(404).send("Wrong password");

  const objToBeTokenized = {
    userId: userProfile._id,
    email: userProfile.email,
  };

  res.status(200).send({
    accessToken: jwt.sign(objToBeTokenized, tokenSecret, { expiresIn: "45m" }),
    refreshToken: jwt.sign(objToBeTokenized, refreshTokenSecret, {
      expiresIn: 86400,
    }), //One day expiry
    userProfile: objToBeTokenized,
  });
});

module.exports = router;
