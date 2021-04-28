import React, { Component } from 'react';
import { connect } from 'react-redux';


class Questions extends Component {
  state = {
    selectedAnswer: false
  }

  selectAnswer = (e, selectedAnswer) => {
    e.preventDefault();
    this.setState({selectedAnswer: selectedAnswer})
  }

  listItem = (id) => {
    let questions = this.props.questions
    return <li key={id}>{questions[id].optionOne.text}</li>
  }

  render() {
    const { loading, answers, questions, unanswered} = this.props;

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
