import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.scss';

class CalculatorResults extends Component {
    createList(state, i) {
        return (<li>{state}</li>);
    }
    render() {
        return (
            <div class="container">
                <h2>Results!</h2>
                <ul>
                    {this.props.calculatorReducer.map(this.createList)}
                </ul>
            </div>

        );
    }
}
function mapStateToProps({ calculatorReducer }) {
    return {
        calculatorReducer
    };
}

export default connect(mapStateToProps, undefined)(CalculatorResults);
