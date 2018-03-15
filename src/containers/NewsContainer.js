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
    console.log(url);


  }

  render(){
    return (
      <div></div>
    )
  }

}

export default NewsContainer;
