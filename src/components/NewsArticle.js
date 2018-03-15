import React from 'react';

const NewsArticle = (props) => {
  const publishedDate = new Date(props.publishedDate).toString().substring(0,15);

  return (
    <div>
      <h3>
        <a href={props.url}>
          {props.title}
        </a>
      </h3>
      <h4>{publishedDate}</h4>
      <img src={props.imageUrl} alt="News image" width="300px"/>
      <p>{props.description}</p>
    </div>
  )

}

export default NewsArticle;
