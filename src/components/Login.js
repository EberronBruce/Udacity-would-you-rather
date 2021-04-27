import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';



class Login extends Component {
  render() {
  //   console.log("-----------------------")
  // console.log(this.props)
    return (
      <div>
        <h3 className='center'>Login</h3>
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
