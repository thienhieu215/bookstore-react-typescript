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

const GridView = ({ newBooksList }: GridViewProps) => {

  return (
    <Container>
      <MediaQuery maxWidth={768}>
        {newBooksList.map((product, index) => (
          <MobileCard productInfo={product} />
        ))}
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {newBooksList.map((product, index) => (
            <FullsizeCard productInfo={product} />
          ))}
        </div>
      </MediaQuery>
    </Container>
  );
};

type GridViewProps = {
  newBooksList: Array<Product>
}

export default GridView;
