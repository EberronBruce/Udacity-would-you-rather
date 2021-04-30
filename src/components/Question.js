import React, { Component } from 'react';
import { connect } from 'react-redux';


class Question extends Component {
  render() {
    const {question} = this.props;
    return(
      <div className='question-info'>
        <div className='question-title-center'>
          <h3 className='question-header'>Would you rather</h3>
        </div>
        <div className='question-center-form'>
          <form>
            <label htmFor="optionOne">
              <input type="radio" id="optionOne" name="option" value="optionOne" />
              {question.optionOne.text}
            </label>
            <br/>
            <br/>
            <label htmlFor="optionOne">
              <input type="radio" id="optionTwo" name="option" value="optionTwo" />
              {question.optionTwo.text}
            </label>

          </form>
        </div>
        <div className='question-submit-btn-container'>
          <button className='btn'>Submit</button>
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
