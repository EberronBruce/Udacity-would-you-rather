import React, { Component } from 'react';
import { connect } from 'react-redux';


class QuestionAuthorHeader extends Component {
  render() {
    const { author } = this.props;

    return(
      <div className='question-snippet-author'>
        <h3>{`${author.name} asks:`}</h3>
      </div>
    );
  }
}

function mapStateToProps({authedUser, users, questions}, {author}) {
  return {
    author: author
  }
}

export default connect(mapStateToProps)(QuestionAuthorHeader);
