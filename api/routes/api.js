const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const AddressVerifier = require("../services/AddressVerifier");

router.get("/", function (req, res, next) {
  res.send();
});

router.post("/", async function (req, res, next) {
  let newAddress = req.body;
  console.log(newAddress);
  let foundAddresses = await AddressVerifier.verifyAddress(newAddress);
  if (!foundAddresses.length) {
    res.sendStatus(404);
    return;
  }
  res.send({ id: uuidv4() });
});

router.delete("/:id", function (req, res, next) {
  res.sendStatus(200);
});

module.exports = router;
