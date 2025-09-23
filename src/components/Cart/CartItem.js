import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
 function handleAddItem(){
     dispatch(cartActions.addItemToCart({
        id:props.item.id,
        title:props.item.title,
        price:props.item.price
     }))
 }
 function handleMinusItem(){
    dispatch(cartActions.removeItemFromCart(props.item.id));
 }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleMinusItem}>-</button>
          <button onClick={ handleAddItem }>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
