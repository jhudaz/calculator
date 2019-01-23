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
    createList(data, i) {
        return (
            <li>{data}</li>
        );
    }
    render() {
        return (
            <div>
                <label>Git User:</label>
                <br />
                <input type="text" placeholder='user' value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />
                <button onClick={() => this.props.gitProfile(this.state.userName)}>Find</button>
                <hr />
                <h2>Profile</h2>
                <ul>
                    <li>name:{this.props.gitProfileReducer.name}</li>
                    <li><img src={this.props.gitProfileReducer.avatar_url} alt='image profile'/></li>
                    <li>location: {this.props.gitProfileReducer.location}</li>
                    <li>description: {this.props.gitProfileReducer.bio}</li>
                    <li>id: {this.props.gitProfileReducer.id}</li>
                </ul>

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
