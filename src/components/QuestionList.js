import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionSnippet from './QuestionSnippet';


class Questions extends Component {
  state = {
    selectedAnswer: false,
    answerButtonSelected: false
  }

  selectAnswer = (e, selectedAnswer) => {
    e.preventDefault();
    this.setState({selectedAnswer: selectedAnswer})
  }

  listItem = (id) => {
    return <li key={id}><QuestionSnippet id={id} /></li>
  }

  render() {
    const { loading, answers, questions, unanswered} = this.props;

    return(
      <div className='question-list'>
        <div className='question-list-btn-holder'>
          <button
            className={`question-list-btn question-list-btn-left ${this.state.selectedAnswer ? "question-list-btn-not-selected" : "question-list-btn-selected"}`}
            onClick={(e) => this.selectAnswer(e, false)}>
            Unanswered
          </button>
          <button
            className={`question-list-btn question-list-btn-right ${this.state.selectedAnswer ? "question-list-btn-selected" : "question-list-btn-not-selected"}`}
            onClick={(e) => this.selectAnswer(e, true)}>
            Answered
          </button>
        </div>
        <div className='question-list-holder'>
          {!loading &&
            <ul>
              {this.state.selectedAnswer === true
                ? answers.map( (id) =>
                  this.listItem(id, questions)
                )
                : unanswered.map((id) =>
                  this.listItem(id, questions)
                )
              }
            </ul>
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}) {
  if (authedUser === null) {return { loading : true}}
  let unansweredQuestions = {...questions}
  let answers = Object.keys(users[authedUser].answers)
  answers.map((answer) => delete unansweredQuestions[answer])
  let unanswered = Object.keys(unansweredQuestions)

  return {
    loading: false,
    answers,
    questions,
    unanswered: unanswered
  }
}

export default connect(mapStateToProps)(Questions);
