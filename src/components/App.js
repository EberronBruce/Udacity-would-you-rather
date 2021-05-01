import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../App.css';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import QuestionList from './QuestionList';
import QuestionHolder from './QuestionHolder';
import NewQuestion from './NewQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <div className='container'>
          {this.props.loading === true
            ? null
            : this.props.authedUser === null
              ? <Route path='/' component={Login} />
              :
              <div className='sub-container'>
                <Route path='/login' component={Login} />
                <Route path='/' exact component={QuestionList} />
                <Route path='/question/:id' component={QuestionHolder} />
                <Route path='/new' component={NewQuestion} />
              </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  console.log(`App Autheduser: ${authedUser}`)
  return {
    loading: users.length === 0,
    authedUser
  };
}

export default connect(mapStateToProps)(App);
