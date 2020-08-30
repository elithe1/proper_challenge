const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    streetName: String,
    streetNumber: String,
    apartmentNumber: Number,
    postNumber: Number,
  },
  { timestamps: true }
);

schema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id.toString();
  return object;
});

module.exports = mongoose.model("tenancies", schema);
