import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { consumeApiPut,consumeApiGetById } from '../actions';
import '../App.scss';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      firstName: '',
      lastName: ''
    }
    this.setEdit = this.setEdit.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  //function to update data of one user and clear the inputs
  updateData(id, fn, ln) {
    this.props.consumeApiPut(id, fn, ln);
    this.setState({ edit: false, firstName: '', lastName: '' });
  }
  setEdit() {
    this.setState({ edit: true });
    
  }
  render() {
    return (
      <div className="container">
        <div>
          <br />
          <input
            type="text"
            placeholder="first name"
            onChange={(e) => this.setState({ firstName: e.target.value })} />
          <br />
          <input
            type="text"
            placeholder="last name"
            onChange={(e) => this.setState({ lastName: e.target.value })} />
        </div>
        <div>
          <button
            className="save"
            onClick={() => this.updateData(
              // users.id,
              this.state.firstName,
              this.state.lastName
            )}
            disabled={this.state.firstName.length === 0 || this.state.lastName.length === 0}>Save</button>
          <button
            className="delete"
            onClick={() => this.setState({ edit: false, firstName: '', lastName: '' })}>Cancel</button>
        </div>
      </div>
    )
  }
}
//reducers
function mapStateToProps({ consumeApiReducer }) {
  return {
    consumeApiReducer
  };
}
//actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    consumeApiPut,
    consumeApiGetById
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);
