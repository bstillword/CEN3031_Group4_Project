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
    let topic = 'space'
    getColors(topic)

    let articleCount = '1'
    let url = 'https://newsapi.org/v2/everything?q='+topic+'&apiKey=bcecc23f7d0b408793afed5c8bc7e27b&pageSize=' +articleCount
    const resp = await axios.get(url);
    setNewsData(resp.data.articles);
    //Set loading boolean to false so that we know to show news articles
    setLoading(false);
  }
    async function getColors(t){
      let topic = t
      fetch("http://localhost:5000/webController", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          topic
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "topicColors");
          const e = document.querySelector('.gradient__bg');
          e.style.background = ['radial-gradient(circle at 50% 50%, '+data[0].replace(/['"]+/g, '')+', '+data[1].replace(/['"]+/g, '')+' )'];
          const e2 = document.querySelector('.mck4__navbar-sign button, .mck4__navbar-menu_container button');
          e2.style.background = data[2].replace(/['"]+/g, '')
        });
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