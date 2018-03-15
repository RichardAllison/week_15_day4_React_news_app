import React from 'react';
import NewsList from '../components/NewsList';
import TitleBar from '../components/TitleBar';
import newsKey from '../keys/news_api_key';

class NewsContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []

    }

  }

  componentDidMount(){
    const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${newsKey}`
    const request = new XMLHttpRequest();
    request.open('GET', url)
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const newsArticlesData = JSON.parse(jsonString);
      this.setState({articles: newsArticlesData.articles});
    });
    request.send();
  }

  render(){
    return (
      <NewsList articles={this.state.articles}/>
    )
  }

}

export default NewsContainer;
