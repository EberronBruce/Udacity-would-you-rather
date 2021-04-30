import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import QuestionList from './QuestionList';
import QuestionHolder from './QuestionHolder';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className='container'>
        {/* {this.props.loading === true
          ? null
          : <Login />
        } */}
        <QuestionHolder />
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    loading: users.length === 0
  };
}

export default connect(mapStateToProps)(App);
