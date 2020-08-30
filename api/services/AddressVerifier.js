const axios = require("axios");

exports.verifyAddress = async (data) => {
  let streetName = data.streetName.trim();
  let capitalisedStreetName =
    streetName.charAt(0).toUpperCase() + streetName.slice(1);

  let res = await axios.get("https://dawa.aws.dk/adgangsadresser", {
    params: {
      vejnavn: capitalisedStreetName,
      husnr: data.streetNumber,
      postnr: data.postNumber,
    },
  });
  return res.data;
};
