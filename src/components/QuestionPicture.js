import React, { Component } from 'react';
import { connect } from 'react-redux';


class QuestionPicture extends Component {
  render() {
    const { author } = this.props;
    return(
      <div className='question-snippet-picture-holder'>
        <img
          src={author.avatarURL}
          alt={`Avatar for ${author.name}`}
          className='avatar question-picture'
        />
      </div>
    );
  }
}


function mapStateToProps({authedUser, users, questions}, {author}) {
  return {
    author: author
  }
}


export default connect(mapStateToProps)(QuestionPicture);
