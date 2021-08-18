import React, { FC, useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Button, Image, ButtonGroup, Table, Tabs, Tab } from 'react-bootstrap'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Product } from '../components/GridView/GridView'
import { CartItem } from '../components/ListView/ListView'
import { addToCart } from '../store/slices/cartSlice'
import { useDispatch } from "react-redux";
import { getDetailBookAPI } from '../components/api';
import style from './Page.module.scss'
import Dialog from './../components/Dialog/ConfirmDialog'

const DetailPage = () => {

  const [bookDetail, setBookDetail] = useState<any>({})
  const [quantity, setQuantity] = useState<number>(1)
  const [tabKey, setTabKey] = useState('info');
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const dispatch = useDispatch()
  const { bookId }: { bookId: string } = useParams();
  let history = useHistory();

  const addItemToCart = (product: Product): void => {
    let obj: CartItem = {
      isbn13: product.isbn13,
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      image: product.image,
      quantity: quantity.toString()
    }
    dispatch(addToCart(obj))
    setOpenDialog(true)
    setQuantity(1)

  }

  const getDetailBook = async (): Promise<any> => {
    let result = await getDetailBookAPI(bookId)
    setBookDetail(result.data)
  }

  useEffect(() => {
    getDetailBook()
  }, [])

  let arr = ["Authors", "Publisher", "Year", "Pages", "Language"]
  let bookTableInfo = []
  for (let i = 0; i < arr.length; i++) {
    bookTableInfo.push(
      <tr>
        <td className='col-4'>{arr[i]}</td>
        <td className='col-8'>{bookDetail[arr[i].toLowerCase()]}</td>
      </tr>
    )
  }

  return (
    <Container className={style.DetailPage}>

      <Dialog title='SUCCESSFULLY ADDED TO CART!' agreeContent='View Cart' closeContent='Continue Shopping'
        content={`"${bookDetail.title}" is added to your cart. What do you want to do next?`}
        func={() => history.push('/cart')} handleClose={() => setOpenDialog(false)} isOpen={openDialog}
      />

      <Row className={style.bookInfo}>
        <Col lg={5} md={5} sm={5}>
          <Image fluid src={bookDetail.image} />
        </Col>
        <Col lg={7} md={7} sm={7} style={{ textAlign: 'left' }} >
          <h3 >{bookDetail.title}</h3>
          <h6 >{bookDetail.subtitle}</h6>
          <h2 className={style.price}>{bookDetail.price}</h2>
          <div className={style.btnGroup}>
            <ButtonGroup>
              <Button className={style.quantityBtn} variant="outline-secondary" size="sm"
                onClick={() => { if (quantity > 1) { setQuantity(quantity - 1) } }} >
                <RemoveIcon fontSize='small' />
              </Button>
              <Button className={style.quantityBtn} disabled variant="muted">
                <div className={style.quantity}>{quantity}</div>
              </Button>
              <Button className={style.quantityBtn} variant="outline-secondary" size="sm"
                onClick={() => setQuantity(quantity + 1)}>
                <AddIcon fontSize='small' />
              </Button>
            </ButtonGroup>
          </div>
          <button className={style.addCartBtn} onClick={() => addItemToCart(bookDetail)}>
            Add to Cart
          </button>
        </Col>
      </Row>
      <Col className={style.Tabs} lg={8}>
        <Tabs
          className={`mb-3 ${style.tab}`}
          defaultActiveKey={'info'}
          activeKey={tabKey}
          onSelect={(e) => setTabKey(e || 'info')}
        >
          <Tab eventKey="info" title="More Information">
            <Table striped>
              <tbody>
                {bookTableInfo}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="desc" title="Description">
            {bookDetail.desc}
          </Tab>
        </Tabs>
      </Col>

    </Container>
  );
};

export default DetailPage;
