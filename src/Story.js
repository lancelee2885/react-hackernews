import React from 'react';

class Story extends React.Component{

  render(){
    const { link, title } = this.props;
    return (
      <li className="Story">
        <a href={link}>
          {title}
        </a>
      </li>
    )
  };
}

export default Story;


