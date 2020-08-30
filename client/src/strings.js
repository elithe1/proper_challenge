import LocalizedStrings from "react-localization";

const strings = new LocalizedStrings({
  english: {
    streetName: "Street Name",
    houseNum: "House Number",
    apNum: "Apartment Number",
    postNum: "Post Number",
    lang: "Language",
    rm: "Remove",
    addTitle: "Add new Tenancy",
    addSubtitle:
      "To add a new tenancy please provide us with the tenancy address",
    cancel: "CANCEL",
    add: "ADD",
    error404: "Wrong address, please try again",
  },
  danish: {
    streetName: "Vejnavn",
    houseNum: "Husnummer",
    apNum: "Lejlighedsnummer",
    postNum: "Postnummer",
    lang: "Sprog",
    rm: "Slet",
    addTitle: "Tilføj lejlighed",
    addSubtitle: "For at tilføje en ny lejlighed venligst angiv adresse",
    cancel: "Afbryd",
    add: "Tilføj",
    error404: "Fejl i adressen, prøv igen",
  },
});
export default strings;
