import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
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
        <QuestionList />
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  console.log(`App Autheduser: ${authedUser}`)
  return {
    loading: users.length === 0
  };
}

export default connect(mapStateToProps)(App);
