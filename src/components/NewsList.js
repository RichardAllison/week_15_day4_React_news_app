import React from 'react';

const NewsList = (props) => {

  if (props.articles == null || props.articles.length === 0) {
      return <p>Loading...</p>;
  }

  const newsList = props.articles.map((article, index) => {
    return <p key={index}>{article.title}</p>
  })

  return (
    <div>
      {newsList}
    </div>
  )

}

export default NewsList;
