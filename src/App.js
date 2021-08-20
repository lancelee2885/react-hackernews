import React, { Component } from 'react';
import StoryList from './StoryList';
import axios from 'axios';
 
class App extends Component {
  state = {
    hits: [],
    term: ""
  }

  async componentDidMount() {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${term}`);
    const { hits } = response.data;
    this.setState({
      hits
    });
  }

  render() {
    return (
      <div>
        <StoryList props={this.state.hits} />
      </div>
    );
  }
}

 
export default App;