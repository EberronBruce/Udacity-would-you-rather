import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared';


class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }

  handleChangeOptionOne = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionOneText: text
    }));
  }

  handleChangeOptionTwo = (e) => {
    const text = e.target.value;

    this.setState(() => ({
      optionTwoText: text
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    if (optionOneText.trim() !== '' && optionTwoText.trim() !== '') {
      dispatch(handleAddQuestion(optionOneText, optionTwoText));

      this.setState(() => ({
        optionTwoText: '',
        optionOneText: '',
        toHome: true
      }));
    }
  }
  render() {

    const { optionOneText, optionTwoText, toHome} = this.state;

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return(
      <div className='create-question form'>
        <div className='create-question-container'>
          <div className='create-question-title'>
            <h1 className='center'>Create New Question</h1>
          </div>
          <div className='create-question-subtitle'>
            <h3>Complete the question.</h3>
          </div>
          <div className='create-question-rather-holder'>
            <h2>Would you rather...</h2>
          </div>
          <div>
            <form className='create-question-form' onSubmit={this.handleSubmit}>
              <div className='create-question-input-holder'>
                <input
                  className='create-question-input-text'
                  type='text'
                  placeholder='Enter Option One Text Here'
                  value={optionOneText}
                  onChange={this.handleChangeOptionOne}
                />
              </div>
              <div className='line-holder'>
                <hr className='line-left'/><span className='line-or'>OR</span><hr className='line-right' />
              </div>
              <div className='create-question-input-holder'>
                <input
                  className='create-question-input-text'
                  type='text'
                  placeholder='Enter Option Two Text Here'
                  value={optionTwoText}
                  onChange={this.handleChangeOptionTwo}
                />
              </div>
              <div className='create-question-button-holder'>
                <button className='btn'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion);
