import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderSnippet from './LeaderSnippet';

class LeaderBoard extends Component {
  render() {
    const {loading, sortedUserIds} = this.props;

    return(
      <div className='question-list'>
        <div>
          <h2 className='center'>Leader Board</h2>
        </div>
        <div className='leader-list-holder'>
          {!loading &&
            <ul>
              {sortedUserIds.map((id) => <li key={id}><LeaderSnippet user_id={id}/></li>)}
            </ul>
          }

        </div>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  if (users === {}) {return {loading: true}}
  let sortedUserIds = Object.keys(users)
  .sort((a,b) =>
    (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
  )

  return {
    laoding: false,
    sortedUserIds: sortedUserIds,
    users
  }
}


export default connect(mapStateToProps)(LeaderBoard);
