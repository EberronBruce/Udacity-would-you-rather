import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './login/Login';
import QuestionList from './question/QuestionList';
import QuestionHolder from './question/QuestionHolder';
import NewQuestion from './add/NewQuestion';
import LeaderBoard from './leaderboard/LeaderBoard';
import Nav from './nav/Nav';
import PageNotFound from './PageNotFound';

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
                  <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/' exact component={QuestionList} />
                    <Route path='/questions/:question_id' component={QuestionHolder} />
                    <Route path='/add' component={NewQuestion} />
                    <Route path='/leaderboard' component={LeaderBoard} />
                    <Route path='*' component={PageNotFound} />
                  </Switch>
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
