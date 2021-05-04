import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavLeft extends Component {
  render(){
    return(
      <nav className='nav-left'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active' className='nav-item'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active' className='nav-item'>
              Create Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active' className='nav-item'>
              LeaderBoard
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavLeft;
