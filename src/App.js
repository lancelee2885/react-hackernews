import React, { Component } from 'react';
import StoryList from './StoryList';
import SearchForm from './SearchForm';
import axios from 'axios';

/**
 * App makes an axios request to get a story based on a user's search term.
 * 
 * State: 
 * -hits - the array of objects with story information from the API [{title, url, ...}]
 * -term - the user's search term
 *  
 * App -> StoryList
 */

class App extends Component {
  state = {
    hits: []
  }

  // handleSearch = (term) => {
  //   this.setState((oldState) => ({...oldState, term: term}))
  // }

 handleSearch = async (term = "react") => {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${term}`);
    const { hits } = response.data;
    this.setState((oldState) => ({...oldState, hits:hits}));
  }

  // async componentDidMount() {
  //   return this.handleSearch();
  // }


  render() {
    console.log(this.state.hits, "HITS FROM APP");
    
    return (
      <div>
        <StoryList hits={this.state.hits} handleSearch={this.handleSearch}  />
      </div>
    );
  }
}


export default App;