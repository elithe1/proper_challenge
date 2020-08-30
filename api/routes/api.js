const express = require("express");
const router = express.Router();
const AddressVerifier = require("../services/AddressVerifier");
const db = require("../db/db");

router.get("/", async function (req, res, next) {
  res.send(await db.findAll());
});

router.post("/", async function (req, res, next) {
  let newAddress = req.body;
  let foundAddresses = await AddressVerifier.verifyAddress(newAddress);
  if (!foundAddresses.length) {
    res.sendStatus(404);
    return;
  }
  let newTenancy = await db.create(newAddress);
  res.send({ id: newTenancy.toJSON().id });
});

router.delete("/:id", async function (req, res, next) {
  let tenancyId = req.params.id;
  await db.delete(tenancyId);
  res.sendStatus(200);
});

module.exports = router;
