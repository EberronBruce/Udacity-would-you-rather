import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from './Answer';
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
    const { author, question, answer, authedUser} = this.props;
    if (authedUser === null) {
      return <p>The user isn't logged in.</p>
    }

    if (author === null) {
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
  const { id } = props.match.params;
  let author = users[questions[id].author];
  let answer = users[authedUser].answers[id]

  return {
    loading: false,
    author: author,
    question: questions[id],
    answer: answer,
    autheduser: authedUser
  }
}

export default connect(mapStateToProps)(QuestionHolder)
