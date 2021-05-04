import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionPicture from './QuestionPicture';
import QuestionAuthorHeader from './QuestionAuthorHeader';
import { Link, withRouter } from 'react-router-dom';


class QuestionSnippet extends Component {

  toQuestion = (e, id) => {
    e.preventDefault();
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const { author, question} = this.props;
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const { id } = question.id;

    return (
      <Link to={`/questions/${id}`}>
        <div  className='question-snippet'>
          <QuestionAuthorHeader author={author} />
          <div className='question-snippet-info'>
            <QuestionPicture author={author} />
            <div className='question-snippet-details'>
              <h3>Would you rather</h3>
              <p>{`...${question.optionOne.text.substring(0, 35)}...`}</p>
              <button className='question-snippet-btn' onClick={(e) => this.toQuestion(e, question.id)}>View Poll</button>
            </div>
          </div>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(QuestionSnippet));
