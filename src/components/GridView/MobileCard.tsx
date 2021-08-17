import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Row, Col, Card, Image } from 'react-bootstrap'
import { Product } from './GridView';
import style from './Card.module.scss'

const MobileCard = ({ productInfo }: MobileCardProps) => {

  return (
    <Link className={style.mobileCard} to={{ pathname: `/detail/${productInfo.isbn13}` }}>
      <Row >
        <Col xs={4}>
          <Image src={productInfo.image} fluid />
        </Col>
        <Col className={style.titleprice} xs={7}>
          {/* <Card.Title className="text text-truncate">{productInfo.title}</Card.Title>
          <Card.Text>{productInfo.price} VNĐ</Card.Text> */}
          <h4 className={style.title}>
            <a href={`/detail/${productInfo.isbn13}`}>
              {productInfo.title}
            </a>
          </h4>
          <div className={style.price}>{productInfo.price}</div> 
        </Col>
      </Row>
    </Link>
  );
};

type MobileCardProps = {
  productInfo: Product
}

export default MobileCard;
