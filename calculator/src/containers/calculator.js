import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { result } from '../actions/';
import '../App.scss';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            s1: 0,
            s2: 0,
            m1: 0,
            m2: 0,
            r1: 0,
            r2: 0,
            d1: 0,
            d2: 0
        }
        this.sumar = this.sumar.bind(this);
        this.multiplicar = this.multiplicar.bind(this);
        this.dividir = this.dividir.bind(this);
        this.restar = this.restar.bind(this);

    }
    sumar() {
        this.props.result(`Suma: ${this.state.s1} + ${this.state.s2} = ${this.state.s1 + this.state.s2}`);
        this.setState({ s1: 0, s2: 0 });
    }
    multiplicar() {
        this.props.result(`Multiplicacion: ${this.state.m1} * ${this.state.m2} = ${this.state.m1 * this.state.m2}`);
        this.setState({ m1: 0, m2: 0 });
    }
    dividir() {
        if (this.state.d2 === 0) {
            this.props.result(`No se puede dividir entre 0!`);
        } else {
            this.props.result(`Division: ${this.state.d1} / ${this.state.d2} = ${this.state.d1 / this.state.d2}`)
        }
        this.setState({ d1: 0, d2: 0 });
    }
    restar() {
        this.props.result(`Resta: ${this.state.r1} - ${this.state.r2} = ${this.state.r1 - this.state.r2}`);
        this.setState({ r1: 0, r2: 0 });
    }
    render() {
        return (
            <div className="container box">
                <div className="row">
                    <div className="boxes">
                        <h3>Sumar</h3>
                        <ul className="list">
                            <li><input className="suma1" type="number" value={this.state.s1} onChange={a => this.setState({ s1: +a.target.value })} /></li>
                            <li><input className="suma2" type="number" value={this.state.s2} onChange={a => this.setState({ s2: +a.target.value })} /></li>
                        </ul>
                        <button className="sumar save" onClick={this.sumar}>Sumar</button>
                    </div>
                    <div className="boxes">
                        <h3>Multiplicar</h3>
                        <ul className="list">
                            <li><input className="multi1" type="number" value={this.state.m1} onChange={a => this.setState({ m1: +a.target.value })} /></li>
                            <li><input className="multi2" type="number" value={this.state.m2} onChange={a => this.setState({ m2: +a.target.value })} /></li>
                        </ul>
                        <button className="multiplicar save" onClick={this.multiplicar}>Multiplicar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="boxes">
                        <h3>Restar</h3>
                        <ul className="list">
                            <li><input className="resta1" type="number" value={this.state.r1} onChange={a => this.setState({ r1: +a.target.value })} /></li>
                            <li><input className="resta2" type="number" value={this.state.r2} onChange={a => this.setState({ r2: +a.target.value })} /></li>
                        </ul>
                        <button className="restar save" onClick={this.restar}>Restar</button>
                    </div>
                    <div className="boxes">
                        <h3>Dividir</h3>
                        <ul className="list">
                            <li><input className="divi1" type="number" value={this.state.d1} onChange={a => this.setState({ d1: +a.target.value })} /></li>
                            <li><input className="divi2" type="number" value={this.state.d2} onChange={a => this.setState({ d2: +a.target.value })} /></li>
                        </ul>
                        <button className="dividir save" onClick={this.dividir}>Dividir</button>
                    </div>
                </div>


            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ result }, dispatch)
}

export default connect(undefined, mapDispatchToProps)(Calculator);
