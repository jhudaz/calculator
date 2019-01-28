import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { consumeApi, consumeApiPut, consumeApiGet, consumeApiDelete } from '../actions';
import '../App.scss';

class ConsumeApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: ''
        }
    this.saveData = this.saveData.bind(this);
    }
    componentDidMount() {
        this.props.consumeApiGet();
    }
    saveData(fn,ln){
        this.props.consumeApi(fn,ln);
        this.setState({firstName:'',lastName:''});
    }
    createlist() {

        return this.props.consumeApiReducer.map((users) => {
            return (
                <div key={users.id}>
                    <li
                        className="listElement">{users.id} {users.firstName} {users.lastName}</li>
                    <button className="eliminar"
                        onClick={() => this.props.consumeApiDelete(users.id)}>Eliminar</button>
                    <button className="actualizar">Actualizar</button>
                </div>
            )
        })
    }
    
    render() {
        return (
            <div className="box">
                <div className="row">
                    <div className="form">
                        <h2>First name:</h2>
                        <input
                            type="text"
                            value={this.state.firstName}
                            placeholder="first name"
                            onChange={(e) => this.setState({ firstName: e.target.value })} />
                        <h2>Last name:</h2>
                        <input
                            type="text"
                            value={this.state.lastName}
                            placeholder="last name"
                            onChange={(e) => this.setState({ lastName: e.target.value })} />
                        <br />
                        <button
                            className="save"
                            onClick={() => this.saveData(this.state.firstName, this.state.lastName)}
                            disabled={this.state.firstName.length === 0 || this.state.lastName.length ===0}>Guardar</button>
                    </div>
                    <div className="list">
                        <ul className="list">
                            {this.createlist()}
                        </ul>
                    </div>


                </div>

            </div >
        );
    }
}

function mapStateToProps({ consumeApiReducer }) {
    return { consumeApiReducer };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        consumeApi,
        consumeApiPut,
        consumeApiGet,
        consumeApiDelete
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsumeApi);
