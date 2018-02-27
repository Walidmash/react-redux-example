import React, { Component } from 'react';

class Search extends Component {
  render() {

    return (
      <div className='search'>
        <form>
          <input type='search' placeholder='Search here...' />
          <button type='submit'>Search</button>
        </form>
      </div>
    );
  };
}

export default Search;
