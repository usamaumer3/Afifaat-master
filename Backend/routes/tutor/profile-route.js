const express = require("express");
const router = express.Router();

const TutorProfileModel = require("@models/tutor/profile-model");
const { tokenSecret, refreshTokenSecret } = require("@config/config");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { authJWT } = require("@config/authorize-jwt");

router.get("/:id", authJWT, async function (req, res) {
  try {
    var record = await TutorProfileModel.findOne({
      _id: req.params.id,
    }).exec();
    record.password = undefined;
    delete record["password"];
  } catch (err) {
    res.status(404).send("Id not found");
  }
  res.status(200).send(record);
});

router.post("/sign-in", async (req, res) => {
  const body = req.body;
  const userProfile = await TutorProfileModel.findOne({
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
    accessToken: jwt.sign(objToBeTokenized, tokenSecret, { expiresIn: "45m" }), //45 minutes expiry
    refreshToken: jwt.sign(objToBeTokenized, refreshTokenSecret, {
      expiresIn: 86400,
    }), //One day expiry
    userProfile: objToBeTokenized,
  });
});


router.delete("/:id", authJWT, function (req, res) {
  TutorProfileModel.deleteOne({ _id: req.params.id }, function (err) {
    if (!err) {
      res.sendStatus(200);
    } else {
      res.send("Error in deletion");
    }
  });
});

module.exports = router;
