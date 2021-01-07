import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import useStyles from "./styles";

export default function HorizontalNav(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Link
          href="#"
          variant="h5"
          color="inherit"
          underline="none"
          className={classes.linkBrand}
        >
          <img
            src="mui-assets/img/logo-pied-piper-white.png"
            alt=""
            width="120"
          />
        </Link>
        <Link
          href="#"
          variant="h5"
          color="inherit"
          underline="none"
          className={classes.linkBrandSmall}
        >
          <img
            src="mui-assets/img/logo-pied-piper-white-icon.png"
            alt=""
            width="32"
          />
        </Link>
        <Tabs value={0} className={classes.tabs}>
          <Tab
            href="#"
            component={Link}
            label="Features"
            color="inherit"
            className={classes.tab}
          />
          <Tab
            href="#"
            component={Link}
            label="Enterprise"
            color="inherit"
            className={classes.tab}
          />
          <Tab
            href="#"
            component={Link}
            label="Support"
            color="inherit"
            className={classes.tab}
          />
          <Tab
            href="#"
            component={Link}
            label="ICO"
            color="inherit"
            className={classes.tab}
          />
        </Tabs>
        <Button
          color="default"
          variant="contained"
          className={classes.loginButton}
        >
          Login
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="Features">
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary="Features" />
            </ListItem>
            <ListItem button key="Enterprise">
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Enterprise" />
            </ListItem>
            <ListItem button key="Support">
              <ListItemIcon>
                <LiveHelpIcon />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItem>
            <ListItem button key="ICO">
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="ICO" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
}
