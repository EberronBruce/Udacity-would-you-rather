import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import QuestionPicture from './QuestionPicture';



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
        <div className='login-user-picture'>
          <QuestionPicture author={user} />
          <div className='user-info-name'>
            <h3>{name}</h3>
            <div className='login-user-btn-holder'>
              <button onClick={this.assignAuthedUser} className='btn login-btn'> Sign In </button>
            </div>
          </div>

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
