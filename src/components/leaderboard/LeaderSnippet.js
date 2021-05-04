import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPicture from '../question/QuestionPicture';

class LeaderSnippet extends Component {
  render() {
    const { answerCount, questionCount, user} = this.props;

    return(
      <div className='question-snippet'>
        <div className='question-snippet-info'>
          <QuestionPicture author={user} />

          <div className='leader-data-container'>
            <div className='leader-user-name'>
              <h3>{this.props.user.name}</h3>
            </div>
            <div className='leader-data-holder'>
              <div className='leader-data'>
                <span className='leader-data-text'>Answered questions</span>
                <span className='leader-data-number'>{answerCount}</span>
              </div>
              <hr className='line'/>
              <div className='leader-data'>
                <span className='leader-data-text'>Created questions</span>
                <span className='leader-data-number'>{questionCount}</span>
              </div>
            </div>
          </div>
          <div className='leader-score-container'>
            <div className='score-text-holder'>
              <h4 className='score-header'>Score</h4>
            </div>
            <div className='score-number-holder'>
              <span>{answerCount + questionCount}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({users}, {user_id}) {
  return {
    answerCount: Object.keys(users[user_id].answers).length,
    questionCount: users[user_id].questions.length,
    user: users[user_id],
  }
}

export default connect(mapStateToProps)(LeaderSnippet);
