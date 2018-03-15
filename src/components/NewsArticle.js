import React from 'react';

const NewsArticle = (props) => {

  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>

    </div>
  )

}

export default NewsArticle;
