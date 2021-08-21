import React from 'react';

/** HackerNews search form */

class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A search term was submitted: ' + this.state.value);
      event.preventDefault();
      this.props.handleSearch(this.state.value);
      this.setState({value: ''});
    }
  
    render() {
        console.log(this.props, "PROPS IN SEARCHFORM");
      return (
        <form onSubmit={this.handleSubmit}>
          <label for="search">
            Search:
            <input name="search" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
      );
    }
  }

  export default SearchForm;