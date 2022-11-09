const router = require("express").Router();
const adminService = require("./admin.service.js");

//Admin sign in
router.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const accessToken = await adminService.signIn(email, password);
      return res.status(200).send({ status: 200, accessToken: accessToken });
    } catch (errorObj) {
      return res.status(errorObj.status).send(errorObj);
    }
  } else {
    return res
      .status(400)
      .send({ status: 400, message: "Bad Request", time: new Date() });
  }
});

//Block a student
router.post("/block-student", async (req, res) => {
  const { userId } = req.body;
  if (userId) {
    try {
      await adminService.blockStudent(userId);
      return res
        .status(200)
        .send({ status: 200, message: "User has been blocked successfully" });
    } catch (errorObj) {
      return res.status(errorObj.status).send(errorObj);
    }
  } else {
    return res
      .status(400)
      .send({ status: 400, message: "Bad Request", time: new Date() });
  }
});

//unblock a student
router.post("/unblock-student", async (req, res) => {
  const { userId } = req.body;
  if (userId) {
    try {
      await adminService.unBlockStudent(userId);
      return res
        .status(200)
        .send({ status: 200, message: "User has been Unblocked successfully" });
    } catch (errorObj) {
      return res.status(errorObj.status).send(errorObj);
    }
  } else {
    return res
      .status(400)
      .send({ status: 400, message: "Bad Request", time: new Date() });
  }
});

//Block a tutor
router.post("/block-tutor", async (req, res) => {
  const { userId } = req.body;
  if (userId) {
    try {
      await adminService.blockTutor(userId);
      return res
        .status(200)
        .send({ status: 200, message: "User has been blocked successfully" });
    } catch (errorObj) {
      return res.status(errorObj.status).send(errorObj);
    }
  } else {
    return res
      .status(400)
      .send({ status: 400, message: "Bad Request", time: new Date() });
  }
});

//unblock a tutor
router.post("/unblock-tutor", async (req, res) => {
  const { userId } = req.body;
  if (userId) {
    try {
      await adminService.unblockTutor(userId);
      return res
        .status(200)
        .send({ status: 200, message: "User has been Unblocked successfully" });
    } catch (errorObj) {
      return res.status(errorObj.status).send(errorObj);
    }
  } else {
    return res
      .status(400)
      .send({ status: 400, message: "Bad Request", time: new Date() });
  }
});

module.exports = router;
