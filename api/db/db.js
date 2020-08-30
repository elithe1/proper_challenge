const tenancy = require("./TenancyModel");

exports.findAll = async () => {
  let tenancies = await tenancy.find();
  tenancies.map((e) => {
    e.toJSON();
  });
  return tenancies;
};
exports.create = async (data) => {
  return tenancy.create(data);
};

exports.delete = async (tenancyId) => {
  return await tenancy.deleteOne({ _id: tenancyId });
};
