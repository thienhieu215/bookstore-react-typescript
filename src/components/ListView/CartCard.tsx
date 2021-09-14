import { Card, Row, Col } from 'react-bootstrap'
import { CartItem } from './ListView';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ClearIcon from '@material-ui/icons/Clear';
import style from './ListView.module.scss'

const FullsizeCard = ({ productInfo, increase, reduce, showRemove }: FullsizeCardProps) => {

  return (
    <Card className={style.card}>
      <Row>
        <Col xs={3} className={style.img}>
          <Card.Img variant="top" src={productInfo.image} />
        </Col>
        <Col xs={7} className={style.prodInfo}>
          <div className={style.title}>
            {productInfo.title}
          </div>
          <div className={style.price}>{productInfo.price}</div>
          <div style={{marginBottom: '4px'}}>
            <RemoveIcon className={style.quantityBtn} onClick={() => reduce(productInfo)} />
            &nbsp;
            <div className={style.quantity}>{productInfo.quantity}</div>
            &nbsp;
            <AddIcon className={style.quantityBtn} onClick={() => increase(productInfo)} />
          </div>
        </Col>
        <Col xs={2} className={style.removeItem}>
          <div onClick={() => showRemove(productInfo)}><ClearIcon /></div>
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
