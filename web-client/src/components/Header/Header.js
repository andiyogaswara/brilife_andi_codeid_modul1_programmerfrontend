import React, { Component } from 'react';
import styles from './styles.js';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import Navigation from '../Navigation'





class Header extends Component {
    render() {
        const { classes, onMenuClick } = this.props;
        return (
            <AppBar position="fixed" className={classes.appBar + " animated slideInDown"} id="menu-button" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={onMenuClick}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap id="title-label">
                        <a className={classes.menulogo + " animated flash"} href='/'  >Inventory</a>
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }

}

Navigation.propTypes = {
    onMenuClick: PropTypes.func
};

export default withStyles(styles, { withTheme: true })(Header);