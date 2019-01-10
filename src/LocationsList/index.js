import React, { Component } from "react";
import { AppBar, Fab, Toolbar, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

class LocationList extends Component {
  render() {
    return (
      <div style={styles.content}>
        <AppBar position="fixed" color="default" style={styles.AppBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className="grow">
              Locations
            </Typography>
            <Fab color="secondary" aria-label="add" style={styles.fabButton}>
              <AddIcon />
            </Fab>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  content: {
    width: "100%",
    height: "100%"
  },
  AppBar: {
    width: "25%",
    top: "auto",
    bottom: 0
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    right: 10,
    margin: "0 auto"
  }
};

export default LocationList;
