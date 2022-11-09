var express = require("express");
var router = express.Router();
const {authJWT} = require('@config/authorize-jwt');
const Course = require("@models/course/course-model");

// router.use(authJWT);


router.post("/create", async function (req, res) {
  const body = req.body;
  const doc = new Course(body);
  doc.save();
  res.status(200).send(doc);
});

router.get("/:id", async function (req, res) {
  const record = await Course.findOne({ _id: req.params.id }).exec();
  res.send(record);
});

router.get("/all/:tutor_id", async function (req, res) {
  const records = await Course.find({ tutor_id: req.params.tutor_id }).exec();
  res.send(records);
});

router.put("/:id", async function (req, res) {
  const body = req.body;
  await Course.findOneAndUpdate({ _id: req.params.id }, body);
  res.sendStatus(200);
});

router.delete("/:id", function (req, res) {
  Course.deleteOne({ _id: req.params.id }, function (err) {
    if (!err) {
      res.sendStatus(200);
    } else {
      res.send("Error in deletion");
    }
  });
});


module.exports = router;
