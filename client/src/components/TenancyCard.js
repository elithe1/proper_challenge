import React from "react";
import Card from "@material-ui/core/Card";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

import strings from "../strings";

import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  root: {
    maxWidth: "400px",
    marginTop: "10px",
    marginBottom: "10px",
    backgroundColor: "#05658a3b",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  div: {
    padding: "10px",
    paddingBottom: "40px",
  },
  chip: {
    display: "relative",
    float: "right",
  },
});

function TenancyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.div}>
        <Typography variant="body1">
          {strings.streetName}: {props.tenancy.streetName}
        </Typography>
        <Typography variant="body1">
          {strings.houseNum}: {props.tenancy.streetNumber}
        </Typography>
        <Typography variant="body1">
          {strings.apNum}: {props.tenancy.apartmentNumber}
        </Typography>
        <Typography variant="body1">
          {strings.postNum}: {props.tenancy.postNumber}
        </Typography>

        <Chip
          className={classes.chip}
          clickable
          variant="outlined"
          size="small"
          label={strings.rm}
          icon={<DeleteIcon />}
          onClick={() => {
            props.handleRemove(props.tenancy.id);
          }}
          color="primary"
        />
      </div>
    </Card>
  );
}

export default TenancyCard;
