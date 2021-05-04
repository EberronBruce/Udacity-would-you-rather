import React, { Component } from 'react';
import { connect } from 'react-redux';


class AnswerBlock extends Component {
  render() {
    const {percent, authedUserAnswer, totalAnswers, optionLength, option} = this.props;

    return(
      <div className= {`answer-block ${authedUserAnswer ? "answer-block-your-vote": null}`}>
        {authedUserAnswer === true
          ? <div className='answer-your-vote'><span>Your Vote</span></div>
          : null
        }
        <p>Would you rather {option.text}?</p>
        <div className="empty-bar">
          <div className={`progress-bar`} style={{ width: `${percent}%`}}>
            <span className="progress-bar-text">{`${percent}%`}</span>
          </div>
        </div>
        <p>{optionLength} out of {totalAnswers} votes</p>
      </div>
    );
  }
}


function mapStateToProps({authedUser, users, questions}, {option, qid, question}) {

  let optionLength = option.votes.length;
  let didAuthedUserAnswer = option.votes.includes(authedUser);
  let totalAnswers = question.optionOne.votes.length + question.optionTwo.votes.length;
  let fraction = optionLength/totalAnswers;
  let percent = Math.round(fraction * 100, 1)

  return {
    percent: percent,
    authedUserAnswer: didAuthedUserAnswer,
    totalAnswers: totalAnswers,
    optionLength: optionLength,
    option: option,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(AnswerBlock);
