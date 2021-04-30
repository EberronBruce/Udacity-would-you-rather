import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionHolder extends Component {


  questionItem = (question) => {
    return  <div>
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
  }

  render() {
    const { author, question} = this.props;
    return (

      <div className="question-snippet">
        {this.props.loading === true
          ? null
          :

          <div className='question-snippet-author'>
            <h3>{`${author.name} asks:`}</h3>
          </div>

        }
        {this.props.loading === true
          ? null
          :

          <div className='question-snippet-picture-holder'>
            <img
              src={author.avatarURL}
              alt={`Avatar for ${author.name}`}
              className='avatar question-picture'
            />
          </div>

        }

        {this.props.loading === true
          ? null
          :

          <div className='question-answer-detail-container'>
            <div>
              <h3>Results:</h3>
            </div>
            <div className='answer-block answer-block-your-vote'>
              <div className='answer-your-vote'><span>Your Vote</span></div>
              <p>Would you rather {question.optionOne.text}?</p>
              <div className="empty-bar">

                <div className={`progress-bar`}>
                  <span className="progress-bar-text">66.7%</span>
                </div>
              </div>
              <p>1 out of 3 votes</p>
            </div>

            <div className='answer-block'>
              <div className='answer-your-vote'><span>Your Vote</span></div>
              <p>Would you rather {question.optionOne.text}?</p>
              <div className="empty-bar">

                <div className={`progress-bar`}>
                  <span className="progress-bar-text">66.7%</span>
                </div>
              </div>
              <p>1 out of 3 votes</p>
            </div>

          </div>


        }
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  //Todo: for Testing purposes
  console.log(authedUser)
  if (authedUser === null) {return { loading : true}}
  let id = "6ni6ok3ym7mf1p33lnez";
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
