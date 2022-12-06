import React from 'react';
import './articleBody.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ArticleBody = () => {

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);
    //Make api call to news api
    async function getNewsData() {
    //Set loading boolean to true so that we know to show loading text
    setLoading(true);
    //Make news api call using axios
    let topic = 'rat'
    let articleCount = '1'
    let url = 'https://newsapi.org/v2/everything?q='+topic+'&apiKey=b738ed2669c54125aae96fba7c1107d5&pageSize=' +articleCount
    const resp = await axios.get(url);
    setNewsData(resp.data.articles);
    //Set loading boolean to false so that we know to show news articles
    setLoading(false);
  }
  useEffect(() => {
    getNewsData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {loading ? "Loading..." :
          <Container>
          {newsData.map((newsData, index) =>
          <div className = 'articleBody'>
                <a target="_blank" href={newsData.url}>
                  <h1 className="articleTitle">  {newsData.title} </h1>
                  <img className="imageBody" src={newsData.urlToImage} />
                  <div className="articleDescription">{newsData.description}</div>
                </a>
          </div>
            
          )}

         </Container>
        }
      </header>
    </div>
  );

}

export default ArticleBody