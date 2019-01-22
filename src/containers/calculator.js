import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumbers, multiplyNumbers } from '../actions/calculator';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <label>Sumar</label>
                    <ul>
                        <li><input type="number" /></li>
                        <li><input type="number" /></li>
                    </ul>
                    <button onClick={this.props.addNumbers}>Sumar</button>
                </div>
                <div>
                    <label>Restar</label>
                    <ul>
                        <li><input type="number" /></li>
                        <li><input type="number" /></li>
                    </ul>
                    <button onClick={this.props.multiplyNumbers}>Restar</button>
                </div>
            </div>
        );
    }
}
//bind reducers to container
function mapStateToProps({ calculatorReducer }) {
    return {
        calculatorReducer
    };
}
//bind actions to container
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addNumbers, multiplyNumbers }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);