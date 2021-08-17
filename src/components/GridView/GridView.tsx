import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import MediaQuery from 'react-responsive'
import FullsizeCard from './FullsizeCard';
import MobileCard from './MobileCard';

export interface Product {
  isbn13: string,
  title: string,
  subtitle: string,
  price: string,
  image: string
};

const GridView = ({newBooksList}: GridViewProps) => {
  
  return (
    <Container>
      <MediaQuery maxWidth={415}>
        {newBooksList.map((product, index) => (
          <MobileCard productInfo={product} />
        ))}
      </MediaQuery>
      <MediaQuery minWidth={415}>
        <Row>
          {newBooksList.map((product, index) => (
            <Col sm={6} md={4} lg={3}>
              <FullsizeCard productInfo={product} />
            </Col>
          ))}
        </Row>
      </MediaQuery>
    </Container>
  );
};

type GridViewProps = {
  newBooksList: Array<Product>
}

export default GridView;
