import React, { Component } from 'react';
import { connect } from 'react-redux';


class QuestionSnippet extends Component {
  render() {
    const { author, question} = this.props;
    return (
      <div className='question-snippet'>
        <div className='question-snippet-author'>
          <h3>{`${author.name} asks:`}</h3>
        </div>
        <div className='question-snippet-picture-holder'>
          <img
            src={author.avatarURL}
            alt={`Avatar for ${author.name}`}
            className='avatar'
          />
        </div>
        <div className='question-snippet-details'>
          <h3>Would you rather</h3>
          <p>{`...${question.optionOne.text.substring(0, 35)}...`}</p>
          <button className='question-snippet-btn'>View Poll</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {


  let author = users[questions[id].author]


  return {
    author: author,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(QuestionSnippet);
