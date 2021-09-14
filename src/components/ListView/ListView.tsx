import React, { useState } from 'react';
import { Product } from '../GridView/GridView'
import { useDispatch, useSelector } from "react-redux";
import { increase, reduce, removeFromCart, clearCart } from '../../store/slices/cartSlice'
import { TStore } from "../../store/store";
import Dialog from '../Dialog/ConfirmDialog'
import CheckoutDialog from '../Dialog/CheckoutDialog'
import { Container, Row, Col } from 'react-bootstrap'
import style from './ListView.module.scss'
import CartCard from './CartCard'
import TotalPriceCard from './TotalPriceCard'
import MediaQuery from 'react-responsive'
import MobileTotalPriceCard from './MobileTotalPriceCard';


export interface CartItem extends Product {
  quantity: string
}

const ListView = () => {

  const [openDialogClearAll, setOpenDialogClearAll] = React.useState<boolean>(false);
  const [openDialogRemove, setOpenDialogRemove] = React.useState<boolean>(false);
  const [openDialogCheckout, setOpenDialogCheckout] = React.useState<boolean>(false);
  const [removeObj, setRemoveObj] = useState<CartItem>({ isbn13: '', title: '', subtitle: '', price: '', image: '', quantity: '' })
  const dispatch = useDispatch()
  const items: Array<CartItem> = useSelector((state: TStore) => state.cartReducer.cartItems);
  const numbItems: number = useSelector((state: TStore) => state.cartReducer.numbOfItems);

  const calculateTotalPrices = (): string => {
    let temp: number = 0
    for (let i = 0; i < items.length; i++) {
      temp += parseFloat(items[i].price.replace('$', '')) * parseInt(items[i].quantity)
    }
    let tempToString: string = temp.toFixed(2)
    return tempToString
  }

  const totalPrices: string = calculateTotalPrices()

  const handleCloseClearAll = (): void => setOpenDialogClearAll(false);
  const handleShowClearAll = (): void => setOpenDialogClearAll(true);

  const handleShowRemove = (obj: CartItem): void => {
    setOpenDialogRemove(true)
    setRemoveObj(obj)
  }
  const handleShowCloseRemove = (): void => {
    setOpenDialogRemove(false)
  }

  const increaseQuantity = (product: CartItem): void => {
    dispatch(increase(product))
  }

  const reduceQuantity = (product: CartItem): void => {
    dispatch(reduce(product))
  }

  const removeItem = (product: CartItem): void => {
    dispatch(removeFromCart(product))
    setOpenDialogRemove(false)
  }

  const clear = (): void => {
    dispatch(clearCart())
    setOpenDialogClearAll(false)
  }

  return (
    <>
      <Container>
        <Dialog title='Confirmation' agreeContent='Clear' closeContent='Cancel'
          content='Are you sure you want to remove all items from your cart?'
          func={clear} handleClose={handleCloseClearAll} isOpen={openDialogClearAll}
        />
        <Dialog title='Confirmation' agreeContent='Remove' closeContent='Cancel'
          content='Are you sure you want to remove this item from your cart?'
          func={() => removeItem(removeObj)} handleClose={handleShowCloseRemove} isOpen={openDialogRemove}
        />
        <CheckoutDialog title='Shipping Information' agreeContent='Check Out' closeContent='Cancel'
          handleClose={() => setOpenDialogCheckout(false)} isOpen={openDialogCheckout}
        />

        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            {items.length > 0 && <div className={style.clearAll} onClick={handleShowClearAll}>Clear All</div>}
            {items.length === 0 && <h4>No items in cart</h4>}
            {items.map((product, index) => (
              <CartCard productInfo={product} increase={increaseQuantity} reduce={reduceQuantity} showRemove={handleShowRemove} />
            ))}
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <MediaQuery minWidth={769}>
              <TotalPriceCard numbItems={numbItems} totalPrices={totalPrices} openDialogCheckout={setOpenDialogCheckout} />
            </MediaQuery>
          </Col>
        </Row>
      </Container>
      <MediaQuery maxWidth={768}>
        <MobileTotalPriceCard numbItems={numbItems} totalPrices={totalPrices} openDialogCheckout={setOpenDialogCheckout} />
      </MediaQuery>
    </>
  );
};

export default ListView;
