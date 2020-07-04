import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

class Counter extends Component {

    constructor(props) {
        super(props);

        

        this.intervalId = null;
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.state = {
            value : this.props.min
        };

    }

    componentDidMount(){
        this.intervalId = setInterval(() => this.increment(), 1000);  
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    increment() {
        let value = this.state.value + 1;
        this.setState({ value: value <= this.props.max ? value :this.props.min});
    }

    decrement() {

        let value = this.state.value - 1;
        this.setState({ value: value <= this.props.min ? this.props.max:value})
    }



    render() {
        const{min} = this.props;
        const {value} = this.state;
        return ( 
            <div>
                <button onClick={this.decrement}>-</button>
                <span>{value}</span>
                <button onClick={this.increment}>+</button>
                {value == min && <span>This is min value</span>}
            </div>
        );
    }

    
}

Counter.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number
};

Counter.defaultProps = {
    min: 0,
    max: 60
}


export default Counter;