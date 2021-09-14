import CartList from '../components/ListView/ListView'
import { Container } from 'react-bootstrap'
import style from './Page.module.scss'

const Cart = () => {

  return (
    <>
      <Container className={style.CartPage}>
        <h1 className={style.Title}>Your Cart</h1>
      </Container>
      <CartList />
    </>
  );
};

export default Cart;
