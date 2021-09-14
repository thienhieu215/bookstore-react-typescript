import { Row, Col, Image } from 'react-bootstrap'
import { Product } from './GridView';
import style from './Card.module.scss'

const MobileCard = ({ productInfo }: MobileCardProps) => {

  return (

    <Row className={style.mobileCard}>
      <Col xs={4}>
        <Image src={productInfo.image} fluid />
      </Col>
      <Col className={style.titleprice} xs={8}>
        <h4 className={style.title}>
          <a href={`/detail/${productInfo.isbn13}`}>
            {productInfo.title}
          </a>
        </h4>
        <div className={style.price}>{productInfo.price}</div>
      </Col>
    </Row>

  );
};

type MobileCardProps = {
  productInfo: Product
}

export default MobileCard;
