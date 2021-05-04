import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from '../answer/Answer';
import QuestionPicture from './QuestionPicture';
import QuestionAuthorHeader from './QuestionAuthorHeader';

class QuestionHolder extends Component {

  questionItem = (question) => {
    return <Question question={question} />
  }

  answerItem = (question) => {
    return <Answer question={question} />
  }

  render() {
    const { question, answer, authedUser, users} = this.props;
    const author = users[question.author];

    if (authedUser === null) {
      return <p>The user isn't logged in.</p>
    }

    if (author === null || author === undefined) {
      return <p>This author doesn't exist</p>
    }

    return (
      <div className="question-snippet">
        <QuestionAuthorHeader author={author} />
        <div className='question-snippet-info'>
          <QuestionPicture author={author} />
          {answer === null || answer === undefined
            ? this.questionItem(question)
            : this.answerItem(question)
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  const { question_id } = props.match.params;

  let answer = users[authedUser].answers[question_id]

  return {
    loading: false,
    question: questions[question_id],
    answer: answer,
    autheduser: authedUser,
    users
  }
}

export default connect(mapStateToProps)(QuestionHolder);
