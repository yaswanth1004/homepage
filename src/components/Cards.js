// Cards.js

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Cards = () => {
  // Sample card data - Replace with your actual data
  const cardData = [
    {
      id: 1,
      imageUrl: 'https://drive.google.com/uc?id=1QPK2CveF2HQ590TMfBg_6cVUaX-4OMNk',
      description: 'Description for Card 1',
    },
    {
      id: 2,
      imageUrl: 'https://drive.google.com/uc?id=1INAISvdxnuK4utEfuApHeC2yfKSKEdZj',
      description: 'Description for Card 2',
    },
    {
      id: 2,
      imageUrl: 'https://drive.google.com/uc?id=1INAISvdxnuK4utEfuApHeC2yfKSKEdZj',
      description: 'Description for Card 2',
    },
    {
      id: 2,
      imageUrl: 'https://drive.google.com/uc?id=1INAISvdxnuK4utEfuApHeC2yfKSKEdZj',
      description: 'Description for Card 2',
    },
    {
      id: 2,
      imageUrl: 'https://drive.google.com/uc?export=view&id=1hajmGBlx_jLhEy05mJtumjLM-60QZvM8',
      description: 'Description for Card 2',
    },
    {
      id: 2,
      imageUrl: 'https://drive.google.com/uc?id=1INAISvdxnuK4utEfuApHeC2yfKSKEdZj',
      description: 'Description for Card 2',
    },
    // Add more card data as needed
    // ...
  ];

  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={6} className="g-4">
        {cardData.map((card) => (
          <Col key={card.id}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: '50', overflow: 'hidden' }}>
                <Card.Img variant="top" src={card.imageUrl} alt={`Card ${card.id}`} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
              </div>
              <Card.Body>
                <Card.Text>{card.description}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
