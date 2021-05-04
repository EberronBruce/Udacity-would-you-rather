import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

class Nav extends Component {
  render(){
    return(
      <div className='nav-container'>
        <div className='nav'>
          {this.props.authedUser === null
            ? null
            : <NavLeft />
          }
          <NavRight />
        </div>
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav);
