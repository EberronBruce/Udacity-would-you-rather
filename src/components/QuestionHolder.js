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
    const { author, question} = this.props;
    return (

      <div className="question-snippet">
        {this.props.loading === true
          ? null
          :

          <QuestionAuthorHeader author={author} />

        }
        <div className='question-snippet-info'>
          {this.props.loading === true
            ? null
            :

            <QuestionPicture author={author} />

          }

          {this.props.loading === true
            ? null
            : this.questionItem(question)

          }
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  //Todo: for Testing purposes
  console.log(authedUser)
  if (authedUser === null) {return { loading : true}}
  let id = "vthrdm985a262al8qx3do";
  //const { id } = props.match.params
  let author = users[questions[id].author]
  console.log(`questions: ${questions[id].author}`)

  //let author = users[questions[id].author]
  return {
    loading: false,
    author: author,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionHolder)
