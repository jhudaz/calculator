import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gitProfile } from '../actions';

class GitProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };
    }
    render() {
        return (
            <div>
                <label>Git User:</label>
                <br />
                <input type="text" placeholder='user' value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />
                <button onClick={() => this.props.gitProfile(this.state.username)}>Find</button>
            </div>
        )
    }
}
function mapStateToProps({ gitProfileReducer }) {
    return {
        gitProfileReducer
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ gitProfile }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GitProfile);
