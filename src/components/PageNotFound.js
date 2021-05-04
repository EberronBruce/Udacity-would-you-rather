import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class PageNotFound extends Component {
  render(){
    return(
      <div className='not-found-container'>
        <h1>Error 404</h1>
        <h2>Sorry, Page Not Found</h2>
        <Link to='/' className='not-found-link'>
          <p>
            Go to Home
          </p>
        </Link>
      </div>
    )
  }
}

export default PageNotFound;
