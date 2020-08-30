import React, { useEffect, useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import makeStyles from "@material-ui/core/styles/makeStyles";

import NewTenancyModal from "./components/NewTenancyModal";
import TenancyCard from "./components/TenancyCard";

import * as PortfolioService from "./services/PortfolioService";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  fab: {
    position: "absolute",
    margin: 40,
    right: 0,
    bottom: 0,
  },
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
});

function App() {
  const classes = useStyles();

  let [tenancies, setTenancies] = useState([]);
  let [newTenancyModalOpen, setNewTenancyModalOpen] = useState(false);
  let [showLoader, setShowLoader] = useState(true);
  let [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    retrievePortfolio();
  }, []);

  const retrievePortfolio = () => {
    PortfolioService.getPortfolio()
      .then((response) => {
        setTenancies(response.data);
        setShowLoader(false);
      }, [])
      .catch((e) => {
        console.log("Error retrieving portfolio: " + e);
      });
  };

  const handleAdd = (data) => {
    setShowLoader(true);

    PortfolioService.addNewTenancy(data)
      .then((response) => {
        let tenancyId = response.data.id;
        setTenancies([...tenancies, { ...data, id: tenancyId }]);
        setNewTenancyModalOpen(false);
        setShowLoader(false);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
        } else {
          console.log("Error adding new tenancy to portfolio: " + e);
        }
        setShowLoader(false);
      });
  };

  const handleRemove = (id) => {
    setShowLoader(true);
    PortfolioService.removeTenancy(id)
      .then((response) => {
        setTenancies(tenancies.filter((e) => e.id !== id));
        setShowLoader(false);
      })
      .catch((e) => {
        console.log("Error removing new tenancy to portfolio: " + e);
      });
  };

  return (
    <div>
      <Typography variant="h2">Proper Portfolio</Typography>
      {showAlert && (
        <Alert variant="filled" severity="error" className={classes.alert}>
          Wrong address, please try again
        </Alert>
      )}
      {tenancies
        ? tenancies.map((tenancy) => (
            <TenancyCard
              tenancy={tenancy}
              handleRemove={handleRemove}
              key={tenancy.id}
            />
          ))
        : null}
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => setNewTenancyModalOpen(true)}
      >
        <AddIcon />
      </Fab>
      <NewTenancyModal
        modalIsOpen={newTenancyModalOpen}
        handleClose={() => setNewTenancyModalOpen(false)}
        handleAdd={handleAdd}
        showLoader={showLoader}
      />
      {showLoader && <CircularProgress className={classes.loader} />}
    </div>
  );
}

export default App;
