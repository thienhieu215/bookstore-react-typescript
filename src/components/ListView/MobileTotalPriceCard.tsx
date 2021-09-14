import style from './ListView.module.scss'

const MobileTotalPriceCard = ({ numbItems, totalPrices, openDialogCheckout }: MobileTotalPriceCardProps) => {

  return (
    <div className={style.mobileTotalPrice}>
      <div className={style.summary}>
        <strong>TOTAL: {numbItems} ITEM(S)</strong>
        <div className={style.price}>${totalPrices}</div>
      </div>
      <button className={style.checkoutBtn} onClick={() => openDialogCheckout(true)}>Check out</button>
    </div>
  );
};

type MobileTotalPriceCardProps = {
  numbItems: number,
  totalPrices: string,
  openDialogCheckout: (e: boolean) => void,
}

export default MobileTotalPriceCard;
