import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { consumeApiPut, consumeApiGetById } from '../actions';
import '../App.scss';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      fName: '',
      lName: ''
    }
    this.goBack = this.goBack.bind(this);
    this.updateData = this.updateData.bind(this);
  }

  //to bring the data of the user by id
  componentDidMount() {
    this.props.consumeApiGetById(this.props.match.params.userID).then(() => {
      this.setState({
        fName: this.props.consumeApiReducer.user.firstName,
        lName: this.props.consumeApiReducer.user.lastName
      })
    });
  }
  //function to update data of one user and clear the inputs
  updateData() {
    this.props.consumeApiPut(this.props.match.params.userID, this.state.fName, this.state.lName);
  }
  //to go back on the route
  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="container">
        <div>
          <br />
          <input
            type="text"
            placeholder="first name"
            value={this.state.fName}
            onChange={(e) => this.setState({ fName: e.target.value })} />
          <br />
          <input
            type="text"
            placeholder="last name"
            value={this.state.lName}
            onChange={(e) => this.setState({ lName: e.target.value })} />
        </div>
        <div>
          <button
            className="save"
            onClick={() => this.updateData()}
          >Save</button>
          <button
            className="delete"
            onClick={() => this.goBack()}>Cancel</button>
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
