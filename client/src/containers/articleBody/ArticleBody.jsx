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
    let topic = 'lion'
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
        {loading ? "Loading..." : <Container>
          {newsData.map((newsData, index) =>
            <Row className="d-flex justify-content-center">
              <Col xs={12} className="mt-5 w-500" key={index}>
                <a target="_blank" href={newsData.url}>
                  <Card >
                    <Card.Title className="my-3">  {newsData.title}</Card.Title>
                    <Card.Img src={newsData.urlToImage} />
                    <Card.Body>
                      <Card.Text>
                        {newsData.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          )}
        </Container>
        }
      </header>
    </div>
  );

}

export default ArticleBody