import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';



class User extends Component {
  assignAuthedUser = (e) => {
    e.preventDefault();

    const {dispatch, user} = this.props

    dispatch(setAuthedUser(user.id));
  }

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
          <button onClick={this.assignAuthedUser} className='btn'> Sign In </button>
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
