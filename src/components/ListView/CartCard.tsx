import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { CartItem } from './ListView';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import style from './ListView.module.scss'

const FullsizeCard = ({ productInfo, increase, reduce, showRemove }: FullsizeCardProps) => {

  return (
    <Card className={style.card}>
      <Row >
        <Col xs={3}>
          <Card.Img className={style.img}
            variant="top" src={productInfo.image} />
        </Col>
        <Col xs={7} className={style.prodInfo}>
          <Card.Title className={style.title}>{productInfo.title}</Card.Title>
          <Card.Text className={style.price}>{productInfo.price}</Card.Text>
          <div>
            <RemoveIcon className={style.quantityBtn} onClick={() => reduce(productInfo)} />
            &nbsp;
            <div className={style.quantity}>{productInfo.quantity}</div>
            &nbsp;
            <AddIcon className={style.quantityBtn} onClick={() => increase(productInfo)} />
          </div>
        </Col>
        <Col xs={2}  >
          <div className={style.removeItem} onClick={() => showRemove(productInfo)}><ClearIcon /></div>
        </Col>
      </Row>
    </Card>
  );
};

type FullsizeCardProps = {
  productInfo: CartItem,
  increase: (e: CartItem) => void,
  reduce: (e: CartItem) => void,
  showRemove: (e: CartItem) => void
}

export default FullsizeCard;
