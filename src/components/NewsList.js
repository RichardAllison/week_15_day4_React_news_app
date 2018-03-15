import React from 'react';
import NewsArticle from './NewsArticle';
import TitleBar from './TitleBar';

const NewsList = (props) => {

  if (props.articles == null || props.articles.length === 0) {
    return <p>Loading...</p>;
  }

  const newsList = props.articles.map((article, index) => {

    return (
      <NewsArticle
        key = {index}
        title = {article.title}
        description = {article.description}
        publishedDate = {article.publishedAt}
        url = {article.url}
        imageUrl = {article.urlToImage}
      />
    )
  });

  return (
    <div className = "news-list">
      <TitleBar/>
      {newsList}
    </div>
  )

}

export default NewsList;
