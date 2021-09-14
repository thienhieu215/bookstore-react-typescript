import style from './ListView.module.scss'

const FullsizeCard = ({ numbItems, totalPrices, openDialogCheckout }: FullsizeCardProps) => {

  return (
    <div className={style.totalPrice}>
      <h5 className={style.summary}>Order Summary</h5>
      <div className={style.detail}>
        <div>{numbItems} ITEM(S)</div>
        <div>${totalPrices}</div>
      </div>
      <div className={style.detail}>
        <strong>TOTAL</strong>
        <strong>${totalPrices}</strong>
      </div>
      <div>
        <button className={style.checkoutBtn} onClick={() => openDialogCheckout(true)}>Check out</button>
      </div>
    </div>
  );
};

type FullsizeCardProps = {
  numbItems: number,
  totalPrices: string,
  openDialogCheckout: (e: boolean) => void,
}

export default FullsizeCard;
