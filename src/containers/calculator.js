import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNumbers, multiplyNumbers } from '../actions/calculator';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s1: 0,
            s2: 0,
            m1: 0,
            m2: 0
        }
        this.sumar = this.sumar.bind(this);
        this.multiplicar = this.multiplicar.bind(this);
        this.createList = this.createList.bind(this);

    }
    sumar(s1, s2) {
        this.props.addNumbers(this.state.s1, this.state.s2);
        this.setState({s1:0,s2:0})
    }
    multiplicar(m1, m2) {
        this.props.multiplyNumbers(this.state.m1, this.state.m2);
        this.setState({m1:0,m2:0})
    }
    createList(state,i){  
        return (<li>{state}</li>)  ;    
    }
    render() {
        return (
            <div>
                <div>
                    <label>Sumar</label>
                    <ul>
                        <li><input type="number" value={this.state.s1} onChange={a => this.setState({ s1: +a.target.value })} /></li>
                        <li><input type="number" value={this.state.s2} onChange={a => this.setState({ s2: +a.target.value })} /></li>
                    </ul>
                    <button onClick={this.sumar}>Sumar</button>
                </div>
                <div>
                    <label>MUltiplicar</label>
                    <ul>
                        <li><input type="number" value={this.state.m1} onChange={a => this.setState({ m1: +a.target.value })} /></li>
                        <li><input type="number" value={this.state.m2} onChange={a => this.setState({ m2: +a.target.value })} /></li>
                    </ul>
                    <button onClick={this.multiplicar}>Multiplicar</button>
                </div>
                <hr/>
                <h2>Resultados</h2>
                <ul>
                    {this.props.calculatorReducer.map(this.createList)}
                </ul>
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