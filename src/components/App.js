import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import QuestionList from './QuestionList';
import QuestionHolder from './QuestionHolder';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Nav from './Nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className='container'>
            {this.props.loading === true
              ? null
              : this.props.authedUser === null
                ? <Route path='/' component={Login} />
                :
                <div className='sub-container'>
                  <Route path='/login' component={Login} />
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/questions/:question_id' component={QuestionHolder} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </div>
            }
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    loading: users.length === 0,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
