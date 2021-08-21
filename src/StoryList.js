import React from 'react';
import SearchForm from './SearchForm';
import Story from './Story';

class StoryList extends React.Component {

  render() {
    const { hits = [], handleSearch } = this.props

    return (
      <div>
        <ul>
          {hits.map(s => (
            <Story
              title={s.title} url={s.url}
              key={s.objectID}
            />
          ))}
        </ul>
        <SearchForm handleSearch={handleSearch} />
      </div>
    )
  }
}

export default StoryList;