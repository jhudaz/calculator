import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { consumeApi, consumeApiPut, consumeApiGet, consumeApiDelete } from '../actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Update from './update-form';
import '../App.scss';

class ConsumeApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      edit: false
    }
    this.setEdit = this.setEdit.bind(this);
    this.saveData = this.saveData.bind(this);
    this.createRouteUpdate = this.createRouteUpdate.bind(this)
  }
  //function to call the action consumeApi  the which one bring all the users stored in the db 
  componentDidMount() {
    this.props.consumeApiGet();
  }
  //function to save de data and clear the inputs
  saveData(fn, ln) {
    this.props.consumeApi(fn, ln);
    this.setState({ firstName: '', lastName: '' });
  }

  //function to display the inputs for the edit function
  setEdit() {
    this.setState({ edit: true });
  }
  //function to display delete a update buttons  
  createRouteUpdate(users) {

    return (
      <Router>
        <div className="routes">
          <ul className="list">
            <li>
              <button
                className="delete"
                onClick={() => this.props.consumeApiDelete(users.id)}>Delete</button>
            </li>
            <li>
              <Link to={`/update-form/${users.id}`} >
                <button
                  className="update"
                  onClick={() => this.setEdit()}>Update</button>
              </Link>
            </li>
          </ul>
          <Route path={`/update-form/${users.id}`} component={Update} />
        </div>
      </Router>
    )
  }
  //function create  the users list with delete and update functions
  createlist() {
    return this.props.consumeApiReducer.map((users) => {
      return (
        <div key={users.id} ref={this.formRef}>
          <li
            className="listElement">
            <h3>{users.id}) {users.firstName}  {users.lastName}</h3>
          </li>
          {this.createRouteUpdate(users)}
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
              disabled={this.state.firstName.length === 0 || this.state.lastName.length === 0}>Save</button>
            <button
              className="delete"
              onClick={() => this.setState({ edit: false, firstName: '', lastName: '' })}>Cancel</button>
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
