import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import {
  Home as PropinsiIcon,
  LocalOffer as KontrasepsiIcon,
  Storage as PemakaiPropinsiIcon,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles.js";
const menus = [
  {
    path: "/",
    icon: PropinsiIcon,
    label: "Propinsi",
  },
  {
    path: "/kontrasepsi",
    icon: KontrasepsiIcon,
    label: "Kontrasepsi",
  },
  {
    path: "/pemakaipropinsi",
    icon: PemakaiPropinsiIcon,
    label: "PemakaiPropinsi",
  },
];

class Navigation extends Component {
  render() {
    const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;

    const drawer = (
      <div className={classes.drawtool + " animated slideInLeft"}>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {menus.map((menu, index) => (
            <Link key={index} to={menu.path}>
              <ListItem button key={index}>
                <ListItemIcon>
                  <menu.icon />
                </ListItemIcon>
                <ListItemText primary={menu.label} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      // <header>
      //     <ul>
      //         <li><Link to="/">Home</Link></li>
      //         <li><Link to="/stocks">Stocks</Link></li>
      //         <li><Link to="/items">Items</Link></li>
      //         <li><Link to="/units">Units</Link></li>
      //     </ul>
      //         {/* <div><Link to="/">Home</Link></div>
      //         <div><Link to="/stocks">Stocks</Link></div>
      //         <div><Link to="/items">Items</Link></div>
      //         <div><Link to="/units">Units</Link></div> */}
      // </header>
    );
  }
}

Navigation.propTypes = {
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navigation);
