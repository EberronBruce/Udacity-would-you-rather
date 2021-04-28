import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterObject } from '../utils/helpers'


class Questions extends Component {
  state = {
    selectedAnswer: false
  }

  selectAnswer = (e, selectedAnswer) => {
    e.preventDefault();
    this.setState({selectedAnswer: selectedAnswer})
  }

  render() {

    const { loading, answers, questions, unansweredQuestions } = this.props;


    return(
      <div>
        <div>
          <button onClick={(e) => this.selectAnswer(e, false)}>Unanswered</button>
          <button onClick={(e) => this.selectAnswer(e, true)}>Answered</button>
        </div>
        <div>
          {!loading &&
            <ul>
              {this.state.selectedAnswer === true
                ? answers.map( (answer) =>
                  <li key={answer}>
                    {questions[answer].optionOne.text}
                  </li>
                )
                : Object.values(unansweredQuestions).map((question) =>
                  <li key={question.id}>
                    {question.optionOne.text}
                  </li>
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

  return {
    loading: false,
    answers,
    questions,
    unansweredQuestions: unansweredQuestions
  }
}

export default connect(mapStateToProps)(Questions);
