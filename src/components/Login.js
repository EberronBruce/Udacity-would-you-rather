import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';



class Login extends Component {
  render() {
    return (
      <div className='login'>
        <h2 className='center'>Login</h2>
        <ul>
          {this.props.userIds.map((id) => (
            <li key={id}>
              <User id={id}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userIds : Object.keys( users )
  };
}

export default connect(mapStateToProps)(Login);
