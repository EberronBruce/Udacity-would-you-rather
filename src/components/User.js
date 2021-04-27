import React, { Component } from 'react';
import { connect } from 'react-redux';



class User extends Component {
  render() {
    const { user } = this.props;
    if (user === null) {
      return <p>This user doesnt exist.</p>;
    }
    const {name, avatarURL} = user;
    return (
      <div className='user'>
        <img
          src={avatarURL}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='user-info'>
          <span>{name}</span>
          <button className='btn'> Sign In </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({users}, {id}) {
  return {
    user: users[id]
  };
}

export default connect(mapStateToProps)(User);
