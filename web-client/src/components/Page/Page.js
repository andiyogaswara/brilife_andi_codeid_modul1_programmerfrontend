
import React, { Component } from 'react';
import Header from '../../components/Header'
import Navigation from '../Navigation'
import { CssBaseline } from '@material-ui/core';
import styles from './styles.js'
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';



class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            drawerOpen: false,
            showAlert: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { error } = this.props;
        if (prevProps.error !== error) {
            this.setState({ showAlert: true });
        }
    }

    handleDrawerToggle = () => {
        this.setState({ drawerOpen: !this.state.drawerOpen });
    }

    hideAlert = () => {
        this.setState({ showAlert: false })
    }

    render() {
        const { children, classes, error } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header onMenuClick={this.handleDrawerToggle} />
                <Navigation mobileOpen={this.state.drawerOpen} handleDrawerToggle={this.handleDrawerToggle} />
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                    <Snackbar open={this.state.showAlert} autoHideDuration={3000} onClose={this.hideAlert}>
                        <Alert onClose={this.hideAlert} elevation={6} variant="filled" severity="error">{error?.message}
                        </Alert>
                    </Snackbar>
                </main>
            </div>
        );
    }
}

Page.propTypes = {
    error: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Page);
