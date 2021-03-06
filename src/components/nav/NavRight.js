import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';

class NavRight extends Component {
  logout = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(setAuthedUser(null))
  }

  render(){
    return(
      <nav className='nav-right'>
        <ul>
          {this.props.user === null
            ? null
            : <li>
              <span className='nav-item'>
                {`Hello, ${this.props.user.name}`}
              </span>
            </li>
          }

          <li>
            {this.props.user === null
              ?
                <NavLink to='/' activeClassName='active' className='nav-item'>
                  Login
                </NavLink>
              :
              <span onClick={this.logout}>
                <Link to='/' className='nav-item logout-btn'>
                  Logout
                </Link>
              </span>
            }
          </li>
        </ul>


      </nav>
    )
  }
}

function mapStateToProps({authedUser, users}) {
  let user = null;
  authedUser !== null ? user = users[authedUser] : user = null
  return {
    user: user
  }
}

export default connect(mapStateToProps)(NavRight);
