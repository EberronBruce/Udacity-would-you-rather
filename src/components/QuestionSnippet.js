import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPicture from './QuestionPicture';
import QuestionAuthorHeader from './QuestionAuthorHeader';


class QuestionSnippet extends Component {
  render() {
    const { author, question} = this.props;
    return (
      <div className='question-snippet'>
        <QuestionAuthorHeader author={author} />
        <div className='question-snippet-info'>
          <QuestionPicture author={author} />
          <div className='question-snippet-details'>
            <h3>Would you rather</h3>
            <p>{`...${question.optionOne.text.substring(0, 35)}...`}</p>
            <button className='question-snippet-btn'>View Poll</button>
          </div>
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
