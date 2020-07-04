import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Errors extends Component {
    render() {
        return (
            <div>
                <h1>Error {this.props.code}</h1>
            </div>
        );
    }
}

Errors.propTypes = {
    code: PropTypes.number.isRequired
};

export default Errors;
