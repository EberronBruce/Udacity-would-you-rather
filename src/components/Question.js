import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';


class Question extends Component {
  state = {
    selectedOption: null
  }

  onRadioChange = (e, option) => {
    this.setState({ selectedOption: option});
  }

  onSubmit = (e) => {
    console.log(`Props question id: ${this.props.question.id}`)
    e.preventDefault();
    const { dispatch } = this.props;
    console.log(this.state.selectedOption)
    this.state.selectedOption !== null
    ? dispatch(
      handleSaveAnswer({
        qid: this.props.question.id,
        authedUser: this.props.authedUser,
        answer: this.state.selectedOption
      })
    )
    : console.log("blah")


    console.log(`AuthedUser: ${this.props.authedUser}`)
    console.log(this.props.question.answers)
  }

  render() {
    const {question} = this.props;
    const OPTION_ONE = "optionOne";
    const OPTION_TWO = "optionTwo";
    return(
      <div className='question-info'>
        <div className='question-title-center'>
          <h3 className='question-header'>Would you rather</h3>
        </div>
        <div className='question-center-form'>
          <form onSubmit={this.onSubmit}>
            <label>
              <input
                type="radio"
                value={question.optionOne.text}
                checked={this.state.selectedOption === OPTION_ONE}
                onChange={(e) => this.onRadioChange(e, OPTION_ONE)}
              />
              {question.optionOne.text}
            </label>
            <br/>
            <br/>
            <label>
              <input
                type="radio"
                value={question.optionTwo.text}
                checked={this.state.selectedOption === OPTION_TWO}
                onChange={(e) => this.onRadioChange(e, OPTION_TWO)}
              />
              {question.optionTwo.text}
            </label>

          </form>
        </div>
        <div className='question-submit-btn-container'>
          <button className='btn' onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, {question}) {

  return {
    question: question,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Question);
