import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {} from '../actions';
import '../App.scss';

class Update extends Component {
  constructor(props){
    super(props);
    this.state ={
      edit:false
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          {/* <span>{users.id})</span> */}
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
//reduces
function mapStateToProps({}) {
  return {

  };
}
//actions
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Update);
