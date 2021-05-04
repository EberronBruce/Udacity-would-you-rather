import React, { Component } from 'react';
import { connect } from 'react-redux';
import AnswerBlock from './AnswerBlock';

class Answer extends Component {
  render() {
    const {question} = this.props;
    return(
      <div className='question-answer-detail-container'>
        <div>
          <h3>Results:</h3>
        </div>
        <AnswerBlock option={question.optionOne} qid={question.id} question={question} />
        <AnswerBlock option={question.optionTwo} qid={question.id} question={question} />
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {question}) {
  return {
    question: question,
    authedUser: authedUser,
  }
}

export default connect(mapStateToProps)(Answer);
