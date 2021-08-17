import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'
import { Product } from './GridView';
import style from './Card.module.scss'

const FullsizeCard = ({ productInfo }: FullsizeCardProps) => {

  return (
    <Card className={style.Card}>
      <a href={`/detail/${productInfo.isbn13}`} title={productInfo.title}>
        <Card.Img variant="top" src={productInfo.image} />
      </a>
      <Card.Body>
        <h4 className={style.title}>
          <a href={`/detail/${productInfo.isbn13}`} title={productInfo.title}>
            {productInfo.title}
          </a>
        </h4>
        <div className={style.price}>{productInfo.price}</div>
      </Card.Body>
    </Card>
  );
};

type FullsizeCardProps = {
  productInfo: Product
}

export default FullsizeCard;
