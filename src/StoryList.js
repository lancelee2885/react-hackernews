import React from 'react';
import Story from './Story';

class StoryList extends React.Component(){
  
  render(){
    const { stories } = this.props

    return (
      <ul>
        {stories.map(s => (
          <Story 
            props={{title: s.title, url: s.url}} 
            key={s.objectID}
          />
        ))}
      </ul>
    )
  }
}

export default StoryList;