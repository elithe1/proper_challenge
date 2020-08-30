import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  buttonProgress: {
    color: "blue",
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

function NewTenantModal(props) {
  const classes = useStyles();
  let [streetName, setStreetName] = useState("");
  let [streetNumber, setStreetNumber] = useState(0);
  let [apartmentNumber, setApartmentNumber] = useState(0);
  let [postNumber, setPostNumber] = useState(0);

  return (
    <Dialog open={props.modalIsOpen} onClose={props.handleClose}>
      <DialogTitle>Add new Tenancy</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new tenancy please provide us with the tenancy address
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="street"
          label="Street name"
          fullWidth
          onChange={(e) => setStreetName(e.target.value)}
        />
        <TextField
          margin="dense"
          id="streetNumber"
          label="House number"
          fullWidth
          type="number"
          onChange={(e) => setStreetNumber(parseInt(e.target.value))}
        />
        <TextField
          margin="dense"
          id="apartmentNumber"
          label="Apartment number"
          fullWidth
          type="number"
          onChange={(e) => setApartmentNumber(parseInt(e.target.value))}
        />
        <TextField
          margin="dense"
          id="postNumber"
          label="Post Number"
          fullWidth
          type="number"
          onChange={(e) => setPostNumber(parseInt(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            props.handleAdd({
              streetName,
              streetNumber,
              apartmentNumber,
              postNumber,
            })
          }
          color="primary"
          disabled={props.showLoader}
        >
          Add
          {props.showLoader && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewTenantModal;
